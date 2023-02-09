import type { APIEmbed } from "discord-api-types/v10";
import type { ApplicationCommands } from "../structures/ApplicationCommand";
import type { AutoCompleteInteraction } from "../structures/AutoCompleteInteraction";
import type { EmbedBuilder } from "../structures/builders/Embed";
import type { IRequest, IResponse } from "./request";
import { DefaultNonImplementedRestAdapter , IRestAdapter } from "./RestAdapter";
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
   * PublicKey for authorization
   */
  publicKey: string;
  /**
   * Token for authorization on rest requsts
   */
  token: string;
  /**
   * Used to validate if a request originated from discord
   * @param req - The request from the server to verify
   * @returns boolean indicating wether this is a verified request or not
   */
  verifyRequest?: (req: IRequest) => Promise<boolean>;
  /**
   * A debug callback function that can be used for debugging
   */
  debug?: (msg: string) => void;
  /**
   * Adapter use for rest requests
   */
  restAdapter: IRestAdapter;
}

export type MessageReplyOptions = {
  embeds?: APIEmbed[] | EmbedBuilder[];
  embed: EmbedBuilder;
  content: string;
};

export const defaultOptions: IHandlerOptions = {
  replyTimeout: 2600,
  deferOnTimeout: true,
  // we assume credentials are in .env files [If provided in options, will be overidden]
  publicKey: process.env.PUBLIC_KEY!,
  token: process.env.TOKEN!,
  restAdapter: new DefaultNonImplementedRestAdapter()
};

export const debugNameSpace = `disci`;

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
  error: (err: Error) => void;
}
