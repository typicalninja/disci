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
  EResponseErrorMessages,
  IClientEvents,
} from "./utils/constants";
import { IRequest, IResponse, ToRequest, toResponse } from "./utils/request";
import { tryAndValue } from "./utils/helpers";
import { DisciTypeError } from './utils/errors';
import { InteractionFactory } from './utils/Factories';

import EventEmitter from 'node:events';
import type {IRestAdapter} from './utils/RestAdapter';
import { NativeVerificationStratergy, NoLimitVerificationStratergy, verificationStratergy, } from './verification';

export class InteractionHandler extends (EventEmitter as unknown as new () => TypedEmitter<IClientEvents>)  {
  options: IHandlerOptions;
  /**
   * Rest Manager, user has to provide one
   */
  rest: IRestAdapter;
  /**
   * Verifiction stratergy for request verification
   */
  private verificationStratergy: verificationStratergy;
  constructor(options: Partial<IHandlerOptions>) {
    super()
    this.options = Object.assign({}, defaultOptions, options);
    this.verificationStratergy = this.getVerificationStratergy(this.options.verificationStratergy);
    // rest manager is provided by the user
    this.rest = this.options.restAdapter;
  }
  private getVerificationStratergy(receivedStrat: verificationStratergy | null | string): verificationStratergy {
    // null means access=all verification stratergy
    if(receivedStrat === null) return new NoLimitVerificationStratergy();
    // probably provided publicKey as the verification stratergy
    else if(typeof receivedStrat === 'string') return new NativeVerificationStratergy(receivedStrat);
    else return receivedStrat;
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
      const requestVerified = await this.verificationStratergy.verifyRequest(receivedRequest)

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
}
