import type { APIActionRowComponent, APIEmbed, APIMessageActionRowComponent } from "discord-api-types/v10";
import type { ChatInputCommandContext } from "../structures/context/ChatInputCommandContext";


export enum DiscordVerificationHeaders {
  Signature = "x-signature-ed25519",
  TimeStamp = "x-signature-timestamp"
}

// Common type for interactions
export type InteractionContext = ChatInputCommandContext ;

export interface HandlerOptions {
  autoDefer: boolean | { enabled: boolean; timeout: number };
  publicKey?: string, 
}

export interface BaseReplyOptions {
  content?: string
  embeds?: Array<APIEmbed>
}

export interface MessageReplyOptions extends BaseReplyOptions {
  components?: Array<APIActionRowComponent<APIMessageActionRowComponent>>
}


export const defaultOptions: HandlerOptions = {
  autoDefer: {
    enabled: true,
    timeout: 2000
  }, 
}

