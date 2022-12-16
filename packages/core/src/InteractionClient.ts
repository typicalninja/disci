import {
  APIInteraction,
  APIInteractionResponse,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";
import type { FastifyReply, FastifyRequest } from "fastify";
import {
  ClientEvents,
  ClientOptions,
  defaultOptions,
  DiscordVerificationHeaders,
  RequestEvents,
} from "./utils/constants";
import nacl from "tweetnacl";
// to add typings to events
import { TypedEmitter } from "tiny-typed-emitter";
//import { BaseCommandContext } from "./structures/context/BaseCommandContext";
import BaseInteractionContext from "./structures/context/BaseInteractionContext";

export type replyFunction = (
  data: APIInteractionResponse,
  code?: number
) => void;


export class InteractionClient extends TypedEmitter<ClientEvents> {
  attached: boolean = false;
  options: ClientOptions;
  constructor(options: ClientOptions) {
    super();
    this.options = Object.assign({}, defaultOptions, options);
  }
  /**
   * Handles a Request to the specified path
   * @returns A Object containing [APIInteractionResponse](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object)
   */
  handleRequest(
    req: FastifyRequest,
    res: FastifyReply
  ): Promise<APIInteractionResponse> {
    if(!this.options.publicKey) throw new Error(`Public Key is missing`)
    return new Promise((resolve) => {
      // verify if its a valid request
      this.verifyRequest(req).then((verified) => {
        // fire requestCreate event
        this.emit(
          RequestEvents.requestCreate,
          { request: req, reply: res },
          verified
        );
        // helper function
        const reply = (data: APIInteractionResponse, code: number = 200) => {
          if (code) res.statusCode = code;
          return resolve(data);
        };
        // this request is unauthorized, reply to it accordingly
        if (!verified) return reply({ type: 0 }, 401);
        // Body will be a APIInteraction
        const body = req.body as APIInteraction;
        this.emit(
          RequestEvents.rawInteractionCreate,
          { request: req, reply: res },
          body
        );
        // a ping request
        if (body.type === InteractionType.Ping)
          return reply({ type: InteractionResponseType.Pong });
        else if (body.type === InteractionType.ApplicationCommand) {
          this.emit(
            RequestEvents.interactionCreate,
            new BaseInteractionContext(body)
          );
        }
      });
    });
  }
  /**
   * Verfies a request to see if it originated from discord
   * https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization
   */
  private verifyRequest(req: FastifyRequest): Promise<boolean> {
    return new Promise((resolve) => {
      // no public key yet (maybe not correctly attached)
      if (!this.options.publicKey) return resolve(false);
      const timestamp = req.headers[
        DiscordVerificationHeaders.TimeStamp
      ] as string;
      const signature = req.headers[
        DiscordVerificationHeaders.Signature
      ] as string;
      const body = this.getBody(req);
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
  /**
   * Retreive the body from a request (converts to string if anything else)
   * @param req 
   * @returns Buffer of the body
   */
  private getBody(req: FastifyRequest) {
    return typeof req.body === "string"
            ? Buffer.from(req.body, "utf-8")
              : Buffer.from(JSON.stringify(req.body), "utf-8");
  }
}
