import type { APIInteractionResponseCallbackData } from "discord-api-types/payloads/v10";
import type { APIEmbed } from "discord-api-types/v10";
import type { ChatInputInteraction } from "../structures/ApplicationCommand";
import type { Embed } from "../structures/builders/Embed";
//import type { ChatInputCommandContext } from "../structures/context/ChatInputCommandContext";
import type { RequestTransformer } from "./transformers";


export enum DiscordVerificationHeaders {
  Signature = "x-signature-ed25519",
  TimeStamp = "x-signature-timestamp"
}


// Common type for interactions
export type InteractionContext = ChatInputInteraction;

export interface HandlerOptions {
  /**
   * Time to reply has/about ended/to end
   */
  replyTimeout: { 
    /**
     * If set to defer, will automatically send a defer reply if timed out for all requests
     * If set to ignore, will set Interaction.timedout to true and not respond to the the request
     */
    action: 'defer' | 'ignore';
    timeout: number;
   };
  /**
   * PublicKey for authorization (keeping this field empty will boot the server to debug mode)
   * Allowing any request to get through
   */
  publicKey: string;
  /**
   * Token for authorization on rest requsts
   */
  token: string;
  /**
   * id of the current user
   */
   appId: string;
}

export type MessageReplyOptions = APIInteractionResponseCallbackData & {
  embeds?: APIEmbed[] | Embed[]
}

export const defaultOptions: HandlerOptions = {
  replyTimeout: {
   action: 'defer',
   timeout: 2900
  },
  // we assume credentials are in .env files [If provided in options, will be overidden]
  publicKey: process.env.PUBLIC_KEY!,
  token: process.env.TOKEN!,
  appId: process.env.APPID!
}

export const debugNameSpace = `disci`


export const ErrorMessages = {
  'ResponseTimedOut': 'The response to this Interaction timed out'
}

export enum httpErrorMessages {
  Unauthorized = "Unable to Authorize. Check your headers",
  NotSupported = "This Feature is not yet supported",
  TimedOut = "Response Timed Out"
}

/**
 * Names of {@link ClientEvents}
 */
export enum RequestEvents {
  /**
   * Fired when a new Request comes through (unverified)
   */
  requestCreate = 'requestCreate',
  /**
   * When a request is succefully identified as a Interaction and context is created
   */
  interactionCreate ='interactionCreate',
}
export interface ClientEvents {
  'requestCreate': (
    requestData: { request: RequestTransformer<any>; reply: any },
    verified: boolean
  ) => void;
  'interactionCreate': (InteractionContext: InteractionContext) => void;
}
