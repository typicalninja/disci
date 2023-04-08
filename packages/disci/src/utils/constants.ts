import type { APIEmbed } from "discord-api-types/v10";
import { NativeVerificationStratergy, verificationStratergy } from "../verification";
import type { ApplicationCommands } from "../structures/ApplicationCommand";
import type { AutoCompleteInteraction } from "../structures/AutoCompleteInteraction";
import type { Embed } from "../structures/Embed";
import type { IResponse } from "./request";
//import type { ChatInputCommandContext } from "../structures/context/ChatInputCommandContext";

export enum DiscordVerificationHeaders {
  Signature = "x-signature-ed25519",
  TimeStamp = "x-signature-timestamp",
}

// Common type for interactions
export type InteractionContext = ApplicationCommands | AutoCompleteInteraction;

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
   * Token for authorization on rest requsts
   */
  token: string;
  /**
   * A debug callback function that can be used for debugging
   */
  debug?: (msg: string) => void;
  /**
   * verification stratergy used for validating incoming requests,
   * do no specify for default and specify null for allow all requests
   * specify a string (your public key) for default stratergy will use that instead of process.env.PUBLIC_KEY
   */
  verificationStratergy: verificationStratergy | null | string;
}

export type MessageReplyOptions = {
  embeds?: APIEmbed[] | Embed[];
  embed: Embed;
  content: string;
};

export const defaultOptions: IHandlerOptions = {
  replyTimeout: 2600,
  deferOnTimeout: true,
  token: process.env.TOKEN ?? '',
  
  verificationStratergy: new NativeVerificationStratergy()
};

/**
 * Error Messages Returned in HttpErrors
 */
export enum EResponseErrorMessages {
  Unauthorized = "Unable to Authorize. Check your headers",
  NotSupported = "This Feature is not yet supported",
  TimedOut = "Response Timed Out",
  InternalError = "Internal Server Error occurred.",
}

/** Type used to represent the respond callback function */
export type TRespondCallback = (
  interaction: InteractionContext
) => IResponse | Promise<IResponse>;

/**
 * Events fired by the handler
 */
export interface IClientEvents {
  /**
   * Fired when a interaction is received
   * @param interaction - Interaction contact
   */
  interactionCreate: (interaction: InteractionContext) => void;
  /**
   * Fired when there is a error
   * @param err
   * @returns
   */
  error: (err: unknown) => void;
}
