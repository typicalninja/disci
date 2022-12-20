import {
  APIInteraction,
  APIInteractionResponse,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";
import {
  HandlerOptions,
  defaultOptions,
  DiscordVerificationHeaders,
} from "./utils/constants";
import nacl from "tweetnacl";
// to add typings to events
import { TypedEmitter } from "tiny-typed-emitter";
//import BaseInteractionContext from "./structures/context/BaseInteractionContext";
import { ClientEvents, getRepliedEvent, getResponseEvent, RequestEvents, WaitForEvent } from "./utils/events";
import { CommonHttpRequest, HandlerResponse, RequestTransformer, ResponseTransformer } from "./utils/transformers";

import { match } from "ts-pattern";

export type replyFunction = (
  data: APIInteractionResponse,
  code?: number
) => void;


export class InteractionHandler extends TypedEmitter<ClientEvents> {
  options: HandlerOptions;
  constructor(options: Partial<HandlerOptions>) {
    super();
    this.options = Object.assign({}, defaultOptions, options);
    if(!this.options.publicKey || typeof this.options.publicKey !== 'string') {
      console.warn(`VerifyOff (no publicKey): Running in debug mode, Requests will not be verified of thier origin (Disable This mode by passing your "publicKey" to options)`)
    }
  }
  /**
   * Handles a Request and returns a ResponseTransformer
   * @returns A Object containing Response Object
   */
  handleRequest<Request extends CommonHttpRequest, Response>(
    _req: Request,
    _res: Response
  ): Promise<HandlerResponse> {
    // create our custom response/request transformers
    const req = new RequestTransformer<Request>(_req);
    const res = new ResponseTransformer<Response>(_res);
    return new Promise((resolve) => {
      // verify if its a valid request
      this.verifyRequest(req).then((verified) => {
        // fire requestCreate event
        this.emit(
          RequestEvents.requestCreate,
          { request: req, reply: res },
          verified
        );
        // this request is unauthorized, reply to it accordingly
        if (!verified) return resolve(res.reply('Invalid Authorization', 401));
        this.emit(
          RequestEvents.rawInteractionCreate,
          { request: req, reply: res },
        );
        // Body will be a APIInteraction
        const rawInteraction = JSON.parse(req.rawBody) as APIInteraction;
        // a ping request (handle it first)
        if (rawInteraction.type === InteractionType.Ping) return resolve(res.reply({ type: InteractionResponseType.Pong }))

        // finally wait for it to finish
        WaitForEvent(this, getResponseEvent(res.responseId), 2500).then((data: APIInteractionResponse) => {
          // reply received
          return resolve(res.reply(data))
        }).catch(() => {
          const defer = ()  => {
            // emit this to makesure any attached handlers mark interaction as replied
            this.emit(getRepliedEvent(res.responseId) as any)
            return resolve(res.reply({ type: InteractionResponseType.DeferredChannelMessageWithSource }))
          }
          // if auto defer is disabled
          match(this.options.autoDefer)
            .with(true, { enabled: true }, defer)
        
          console.debug(`Automatic defer`)
        })

        let interaction;
        if (rawInteraction.type === InteractionType.ApplicationCommand) {
        
        }

        if(interaction) {

        }
      });
    });
  }
  /**
   * Verfies a request to see if it originated from discord
   * https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization
   */
  private verifyRequest(req: RequestTransformer<any>): Promise<boolean> {
    return new Promise((resolve) => {
      // no public key yet (maybe not correctly attached)
      if (!this.options.publicKey) {
        console.warn(`VerifyOff (no publicKey): Automatic debug mode is running, this request is not validated and maybe malicious`)
        // debug mode
        return resolve(true)
      }
      const timestamp = req.headers[
        DiscordVerificationHeaders.TimeStamp
      ] as string;
      const signature = req.headers[
        DiscordVerificationHeaders.Signature
      ] as string;
      const { body } = req
      // all of them should be present
      if (!timestamp || !signature || !body) return resolve(false);
      try {
        return resolve(
          nacl.sign.detached.verify(
            Buffer.from(timestamp + body),
            Buffer.from(signature, "hex"),
            Buffer.from(this.options.publicKey, "hex")
          )
        );
      } catch {
        return resolve(false);
      }
    });
  }
}
