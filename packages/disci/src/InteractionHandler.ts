// types for events
import { TypedEmitter } from 'tiny-typed-emitter';

import {
  APIInteraction,
  ApplicationCommandType,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";
import {
  IHandlerOptions,
  defaultOptions,
  DiscordVerificationHeaders,
  InteractionContext, 
  EResponseErrorMessages,
  IClientEvents,
} from "./utils/constants";
import crypto from 'node:crypto'
// to add typings to events
import { IRequest, IResponse, toResponse } from "./utils/request";

//import { ChatInputCommandContext } from "./structures/context/ChatInputCommandContext";
import { DisciParseError, DisciValidationError, tryAndValue } from "./utils/helpers";
import { REST } from '@discordjs/rest';
import { ChatInputInteraction } from "./structures/ApplicationCommand";

export class InteractionHandler extends TypedEmitter<IClientEvents>  {
  options: IHandlerOptions;
  rest: REST;
  private publicKey: null | crypto.webcrypto.CryptoKey
  constructor(options: Partial<IHandlerOptions>) {
    super()
    this.options = Object.assign({}, defaultOptions, options);
    if(!this.options.token || !this.options.publicKey) throw new DisciValidationError(`Token & Publick key is required`)
    // Our Rest manager
    this.rest = new REST({ version: '10' }).setToken(this.options.token);
    this.publicKey = null;
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
      // verify if its a valid request
      return (this.options.verifyRequest || this.verifyRequest.bind(this))(req).then((verified) => {
          // if not verified, resolve as unauthed
          if(!verified) return resolve(toResponse(EResponseErrorMessages.Unauthorized, 400));
          // process the request
          return this.processRequest(req).then(resolve).catch((err) => {
            this.emit('error', err);
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
        let interaction: InteractionContext | null = null;
        
        // decide interaction type
        switch(rawInteraction.type) {
            // ping responses
          case InteractionType.ApplicationCommand: {
            const command = rawInteraction.data;
            if(command.type === ApplicationCommandType.ChatInput) interaction = new ChatInputInteraction(this, rawInteraction)
          }
        }

        if(interaction) {
          interaction.useCallback((response) => {
            return resolve(toResponse(response))
          });

          // timeout after specified time out duration, usually below 3s
          setTimeout(() => {
            if(interaction) {
              if(this.options.deferOnTimeout) {
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
        else if(rawInteraction.type === InteractionType.Ping) return resolve(toResponse({
          type: InteractionResponseType.Pong,
        }))
        else return resolve(toResponse(EResponseErrorMessages.NotSupported, 500))
        /*
        
           
        let interaction: null | InteractionContext = null;
        const callback = getResponseCallback(resolve, this.options.replyTimeout, () => {
          // timed out
          if(!interaction) return /* Unsupported Type / {
            responseData: httpErrorMessages.NotSupported,
            statusCode: 501,
          }
          // autodefer if time out
          if(this.options.deferOnTimeout) {
            interaction.responded = true;
            // auto defer
            return {
              responseData: {
                type: InteractionResponseType.DeferredChannelMessageWithSource,
              },
              statusCode: 200,
            }
          }
          else {
            // handle timeout else
            interaction.timeout = true;
            return {
              responseData: httpErrorMessages.TimedOut,
              statusCode: 504
            }
          }
        })

        switch(rawInteraction.type) {
          // handle pings
          case InteractionType.Ping:
            callback({
              responseData: { type: InteractionResponseType.Pong },
              statusCode: 200,
            })
          break;
          // application commands
          case InteractionType.ApplicationCommand:
              // sub types
              switch(rawInteraction.data.type) {
                // chatinput / slash commands
                  case ApplicationCommandType.ChatInput:
                    interaction = new ChatInputInteraction(this, rawInteraction as APIChatInputApplicationCommandInteraction, callback)
                  break;
              }
          break;
          default:
            // not supported
            callback({
              responseData: httpErrorMessages.NotSupported,
              statusCode: 501,
            })
          break;
        }
        this.emit('int', interaction)
        */
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
      const { body } = req
      // all of them should be present
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
