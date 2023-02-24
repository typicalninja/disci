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
import { IRequest, IResponse, ToRequest, toResponse } from "./utils/request";
import { tryAndValue } from "./utils/helpers";
import { DisciTypeError, TypeErrorsMessages } from './utils/errors';
import { InteractionFactory } from './utils/Factories';

import EventEmitter from 'node:events';
import type {IRestAdapter} from './utils/RestAdapter';

export class InteractionHandler extends (EventEmitter as unknown as new () => TypedEmitter<IClientEvents>)  {
  options: IHandlerOptions;
  /**
   * Rest Manager, user has to provide one
   */
  rest: IRestAdapter;
  /**
   * Public key as a cryptokey for request verification
   */
  private publicKey: null | crypto.webcrypto.CryptoKey
  constructor(options: Partial<IHandlerOptions>) {
    super()
    this.options = Object.assign({}, defaultOptions, options);
    if(!this.options.publicKey) throw new DisciTypeError(TypeErrorsMessages.ParameterRequired('options.publicKey'))
    // rest manager is provided by the user
    this.rest = this.options.restAdapter;
    // publickey is generated on first request or if generatePublicKey is called
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
  async handleRequest(
    req: unknown,
  ): Promise<IResponse> {
      // type this as Irequest for typescript
      const receivedRequest = ToRequest(req as IRequest);
      const verifyFn = typeof this.options.verifyRequest === 'function' ? this.options.verifyRequest : this.verifyRequest.bind(this) as () => Promise<boolean>;
      const requestVerified = await verifyFn(receivedRequest).catch((vErr) => {
        this.debug(`Error occurred while verifying request: [${String(vErr)}]`);
        // return false to trigger the unauthorized error
        return false;
      });

      if(!requestVerified) /* Auth failed */ return toResponse(EResponseErrorMessages.Unauthorized, 400)

      // process the request
      try {
        return await this.processRequest(receivedRequest);
      }
      catch(pErr) {
        // emit error
        this.emit('error', pErr);
        this.debug(`Error occurred while processing an Interaction: [${String(pErr)}]`);

        // close the request
        return toResponse(EResponseErrorMessages.InternalError, 500);
      }
  } 
  /**
   * Process a request and return a response according to the request.
   * You must use the respctive method of returning a response to the client of your framework and return the Response back.
   * this does not verify if request is valid or not
   * @param req 
   * @param res 
   * @returns a Response Object containing data to be responded with
   */
  processRequest(req: IRequest): Promise<IResponse> {
    return new Promise((resolve, reject) => {
        // parse the request body
        const rawInteraction = tryAndValue<APIInteraction>(() => JSON.parse(req.body) as APIInteraction);
        if(!rawInteraction) return reject(new DisciTypeError(`Failed to parse rawBody into a valid ApiInteraction`));
        
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
        // a ping event
        else if(rawInteraction.type === InteractionType.Ping) {
          return resolve(toResponse({
            type: InteractionResponseType.Pong,
          }));
        }
        else {
          this.debug(`Unsupported Interaction type of ${rawInteraction.type} was received`);
          return resolve(toResponse(EResponseErrorMessages.NotSupported, 500));
        }
      });
  }
  /**
   * Generate a cryptokey for the public key provided in the options.
   * Run this at startup if you want to pre create a publicKey before any interaction requests.
   * If not, on first interaction request this will be called.
   */
  async generatePublicKey() {
    if(this.publicKey) return this.publicKey;
    this.publicKey = await crypto.subtle.importKey(
      'raw', 
      Buffer.from(this.options.publicKey, "hex"),
      'Ed25519',
      true,
      ['verify'],
      );
     return this.publicKey
  }
  /**
   * Used to validate if a request originated from discord
   * https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization
   */
  async verifyRequest(req: IRequest): Promise<boolean> {
      const publicKey = await this.generatePublicKey()
      const timestamp = req.headers[
        DiscordVerificationHeaders.TimeStamp
      ];
      const signature = req.headers[
        DiscordVerificationHeaders.Signature
      ];
      const { body } = req;
      if (!timestamp || !signature || !body) return false;
      try {
        return crypto.subtle.verify(
          'Ed25519', 
          publicKey,
          Buffer.from(signature, "hex"),
          Buffer.from(timestamp + body)
          );
      } catch {
        return false;
      }
  }
}
