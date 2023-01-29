import {
  APIChatInputApplicationCommandInteraction,
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
  httpErrorMessages,
} from "./utils/constants";
import crypto from 'node:crypto'
// to add typings to events
import type { IRequest, IResponse } from "./utils/request";

//import { ChatInputCommandContext } from "./structures/context/ChatInputCommandContext";
import { DisciInteractionError, DisciParseError, DisciValidationError, getResponseCallback, tryAndValue } from "./utils/helpers";
import { REST } from '@discordjs/rest';
import { ChatInputInteraction } from "./structures/ApplicationCommand";

export class InteractionHandler  {
  options: IHandlerOptions;
  rest: REST;
  private publicKey: null | crypto.webcrypto.CryptoKey
  constructor(options: Partial<IHandlerOptions>) {
    this.options = Object.assign({}, defaultOptions, options);
    if(!this.options.token || !this.options.publicKey) throw new DisciValidationError(`Token/publicKey is Required`)
    // Our Rest manager
    this.rest = new REST({ version: '10' }).setToken(this.options.token);
    this.publicKey = null;
  }
  /**
   * Handles a Request and returns a Response Object
   * @param Request the reques t from the server to handle
   * @param [verifyRequest = null]  a function that takes a {@link RequestTransformer} and returns a boolean on whether the request is a authorized request
   * @returns A Object containing Response Object
   */
  handleRequest(
    req: IRequest,
    verifyRequest?: (req:IRequest) => Promise<boolean>
  ): Promise<IResponse> {
    return new Promise((resolve, reject) => {
      // verify if its a valid request
      return (verifyRequest || this.verifyRequest.bind(this))(req).then((verified) => {
         if(verified) return this.processRequest(req).then(resolve).catch(reject)
         // Invalid Request, reject.
         else return reject(new DisciInteractionError(httpErrorMessages.Unauthorized))
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
        
        let interaction: null | InteractionContext = null;
        const callback = getResponseCallback(resolve, this.options.replyTimeout, () => {
          // timed out
          if(!interaction) return /* Unsupported Type */ {
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
          this.options.cryptoAlgorithm,
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
          this.options.cryptoAlgorithm, 
          this.publicKey,
          Buffer.from(signature, "hex"),
          Buffer.from(timestamp + body)
          );
      } catch {
        return false;
      }
  }
}
