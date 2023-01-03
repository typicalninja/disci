import type { APIActionRowComponent, APIEmbed, APIMessageActionRowComponent } from "discord-api-types/v10";
import type { ChatInputCommandContext } from "../structures/context/ChatInputCommandContext";
import type { RequestTransformer, ResponseTransformer } from "./transformers";


export enum DiscordVerificationHeaders {
  Signature = "x-signature-ed25519",
  TimeStamp = "x-signature-timestamp"
}


// Common type for interactions
export type InteractionContext = ChatInputCommandContext ;

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
  publicKey?: string;
  /**
   * Token for authorization on rest requsts
   */
  token?: string;
  /**
   * id of the current user
   */
   appId?: string;
}

export interface BaseReplyOptions {
  content?: string
  embeds?: Array<APIEmbed>
}

export interface MessageReplyOptions extends BaseReplyOptions {
  components?: Array<APIActionRowComponent<APIMessageActionRowComponent>>
}


export const defaultOptions: HandlerOptions = {
  replyTimeout: {
   action: 'defer',
   timeout: 2900
  }
}

export const debugNameSpace = `disci`


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
    requestData: { request: RequestTransformer<any>; reply: ResponseTransformer<any> },
    verified: boolean
  ) => void;
  'interactionCreate': (InteractionContext: InteractionContext) => void;
}
