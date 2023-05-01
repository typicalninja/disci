import type { verificationStratergy } from '../verification'
import type { ApplicationCommands } from '../structures/ApplicationCommand'
import type { AutoCompleteInteraction } from '../structures/AutoCompleteInteraction'
import type { IResponse } from './request'
import type { RESTClientOptions } from './REST'
import type { ComponentInteraction } from '../structures/ComponentInteraction'
import { isNode } from './helpers'

export enum DiscordVerificationHeaders {
  Signature = 'x-signature-ed25519',
  TimeStamp = 'x-signature-timestamp',
}

/**
 * @link https://discord.com/developers/docs/reference#image-formatting
 */
export type DiscordImageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096

export const DiscordEpoch = 14200704e5

// Common type for interactions
export type InteractionContext = ApplicationCommands | AutoCompleteInteraction | ComponentInteraction

export interface IHandlerOptions {
  /**
   * A debug callback function that can be used for debugging
   */
  debug?: (msg: string) => void
  /**
   * Verification stratergy used for validating incoming requests,
   * do no specify for default and specify null for allow all requests
   * specify a string (your public key) for default stratergy will use that instead of process.env.PUBLIC_KEY
   */
  verificationStratergy: verificationStratergy | null | string
  /**
   * Options for built in rest client
   */
  rest: RESTClientOptions
}

export const defaultOptions: IHandlerOptions = {
  verificationStratergy: (isNode && process.env.PUBLIC_KEY) || '',
  rest: {
    token: (isNode && process.env.TOKEN) || '',
  },
}

/**
 * Error Messages Returned in HttpErrors
 */
export enum EResponseErrorMessages {
  Unauthorized = 'Unable to Authorize. Check your headers',
  NotSupported = 'This Feature is not yet supported',
  TimedOut = 'Response Timed Out',
  InternalError = 'Internal Server Error occurred.',
}

export enum URLS {
  DiscordApi = 'https://discord.com/api',
  DiscordCdn = 'https://cdn.discordapp.com',
}

/**
 * Events fired by the handler
 */
export interface IClientEvents {
  /**
   * Fired when a interaction is received
   * @param interaction - Interaction contact
   */
  interactionCreate: (interaction: InteractionContext) => void
  /**
   * Fired when there is a error
   * @param err
   * @returns
   */
  error: (err: unknown) => void
}
