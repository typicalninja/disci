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

export interface IHandlerOptions {
  /**
   * After this, the request will be considered stale
   */
  replyTimeout: number;
  /**
   * Instead of request getting marked as stale, respond to it with a "defer" if timed out
   * Allows you to have more time to reply
   */
  deferOnTimeout: boolean;
  /**
   * PublicKey for authorization 
   */
  publicKey: string;
  /**
   * Token for authorization on rest requsts
   */
  token: string;
  cryptoAlgorithm: string
}

export type MessageReplyOptions = {
  embeds?: APIEmbed[] | Embed[];
  content: string
}

export const defaultOptions: IHandlerOptions = {
  replyTimeout: 2900,
  deferOnTimeout: true,
  // we assume credentials are in .env files [If provided in options, will be overidden]
  publicKey: process.env.PUBLIC_KEY!,
  token: process.env.TOKEN!,
  cryptoAlgorithm: 'Ed25519'
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
