import { NativeVerificationStratergy, verificationStratergy } from "../verification";
import type { ApplicationCommands } from "../structures/ApplicationCommand";
import type { AutoCompleteInteraction } from "../structures/AutoCompleteInteraction";
import type { IResponse } from "./request";
import type { RESTClientOptions } from "./REST";

export enum DiscordVerificationHeaders {
  Signature = "x-signature-ed25519",
  TimeStamp = "x-signature-timestamp",
}

export const DiscordEpoch = 14200704e5;

// Common type for interactions
export type InteractionContext = ApplicationCommands | AutoCompleteInteraction ;

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
   * A debug callback function that can be used for debugging
   */
  debug?: (msg: string) => void;
  /**
   * Verification stratergy used for validating incoming requests,
   * do no specify for default and specify null for allow all requests
   * specify a string (your public key) for default stratergy will use that instead of process.env.PUBLIC_KEY
   */
  verificationStratergy: verificationStratergy | null | string;
  /**
   * Options for built in rest client
   */
  rest: RESTClientOptions;
}


export const defaultOptions: IHandlerOptions = {
  replyTimeout: 2600,
  deferOnTimeout: true,
  verificationStratergy: new NativeVerificationStratergy(),
  rest: {
    token: process.env.TOKEN ?? '',
  }
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

export enum URLS {
  DiscordApi = "https://discord.com/api"
}

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

