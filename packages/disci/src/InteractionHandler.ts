// types for events
import type { TypedEmitter } from './utils/TypedEmitter';

import {
  APIInteraction,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";
import {
  IHandlerOptions,
  defaultOptions,
  DiscordVerificationHeaders,
  EResponseErrorMessages,
  IClientEvents,
} from "./utils/constants";
import crypto from 'node:crypto'
// to add typings to events
import { IRequest, IResponse, ToRequest, toResponse } from "./utils/request";
import { DisciParseError, DisciValidationError, tryAndValue } from "./utils/helpers";
import { InteractionFactory } from './utils/Factories';

import EventEmitter from 'node:events';
import type {IRestAdapter} from './utils/RestAdapter';

export class InteractionHandler extends (EventEmitter as any as new () => TypedEmitter<IClientEvents>)  {
  options: IHandlerOptions;
  rest: IRestAdapter;
  private publicKey: null | crypto.webcrypto.CryptoKey
  constructor(options: Partial<IHandlerOptions>) {
    super()
    this.options = Object.assign({}, defaultOptions, options);
    if(!!this.options.publicKey) throw new DisciValidationError(`Public key is required`)
    // rest manager is provided by the user
    this.rest = this.options.restAdapter;
    this.publicKey = null;
  }
  /**
   * Internal function for debugging conditionally
   */
  private debug(msg: string) {
    msg = '[@DISCI/HANDLER]: ' + msg;
    if(this.options.debug) {
      // if debug is enabled
      if(typeof this.options.debug === 'function') this.options.debug(msg)
      else console.debug(msg)
    }

    return void 0;
  }
  /**
   * Handles a Request and returns a Response Object
   * @param Request the request from the server to handle
   * @returns A Object containing Response Object.Does not reject
   */
  handleRequest(
    req: IRequest,
  ): Promise<IResponse> {
    return new Promise((resolve) => {
      req = ToRequest(req)
      // verify if its a valid request
      return (this.options.verifyRequest || this.verifyRequest.bind(this))(req).then((verified) => {
          // if not verified, resolve as unauthed
          this.debug(`New Request ${verified ? 'Passed Verification' : 'Failed verification'}`)
          if(!verified) return resolve(toResponse(EResponseErrorMessages.Unauthorized, 401));
          // process the request
          this.processRequest(req).then(resolve).catch((err) => {
            this.emit('error', err);
            this.debug(`Error occurred while processing an Interaction > ${err}`)
            resolve(toResponse(EResponseErrorMessages.InternalError, 500))
          });
      });
    });
  } 
  /**
   * Process a request and return a response according to the request
   * this does not verify if request is valid or not
   * @param req 
   * @param res 
   */
  processRequest(req: IRequest): Promise<IResponse> {
    return new Promise((resolve, reject) => {
        // parse the request body
        const rawInteraction = tryAndValue<APIInteraction>(() => JSON.parse(req.body));
        if(!rawInteraction) return reject(new DisciParseError(`Failed to parse rawBody into a valid ApiInteraction`));
        
        // convert rawInteraction -> interaction
        const interaction = InteractionFactory.from(this, rawInteraction)
      
        if(interaction) {
          // assign a callback
          interaction.useCallback((response) => {
            this.debug(`Resolving Interaction with ${JSON.stringify(response)} `)
            return resolve(toResponse(response))
          });

          // timeout after specified time out duration, usually below 3s
          setTimeout(() => {
            if(interaction && !interaction.responded) {
              this.debug(`Interaction of id ${interaction.id} timed out`)
              // check if option is turned on
              if(this.options.deferOnTimeout && !interaction.isAutoComplete()) {
                this.debug(`Interaction of id ${interaction.id} was auto defered`)
                return interaction.deferResponse();
              }
              else {
                interaction.timeout = true;
                return resolve(toResponse(EResponseErrorMessages.TimedOut, 504))
              }
            }
          }, this.options.replyTimeout)

          // finally emit the event
          return this.emit('interactionCreate', interaction);
        }
        // a ping
        else if(rawInteraction.type === InteractionType.Ping) return resolve(toResponse({
          type: InteractionResponseType.Pong,
        }))
        else {
          this.debug(`Unsupported Interaction type of ${rawInteraction.type} was received`);
          return resolve(toResponse(EResponseErrorMessages.NotSupported, 500));
        }
      });
  }
  /**
   * Used to validate if a request originated from discord
   * https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization
   */
  async verifyRequest(req: IRequest): Promise<boolean> {
      // no public key yet (maybe first run)
      if (!this.publicKey) {
        this.publicKey = await crypto.subtle.importKey(
          'raw', 
          Buffer.from(this.options.publicKey, "hex"),
          'Ed25519',
          true,
		      ['verify'],
          )
      }
      const timestamp = req.headers[
        DiscordVerificationHeaders.TimeStamp
      ] as string;
      const signature = req.headers[
        DiscordVerificationHeaders.Signature
      ] as string;
      const { body } = req;
      if (!timestamp || !signature || !body) return false;
      try {
        return crypto.subtle.verify(
          'Ed25519', 
          this.publicKey,
          Buffer.from(signature, "hex"),
          Buffer.from(timestamp + body)
          );
      } catch {
        return false;
      }
  }
}
