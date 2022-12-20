import type { BaseCommandContext } from "../structures/context/BaseCommandContext";
import type { BaseComponentContext } from "../structures/context/BaseComponentContext";



export enum DiscordVerificationHeaders {
  Signature = "x-signature-ed25519",
  TimeStamp = "x-signature-timestamp"
}

export type InteractionCtx = BaseCommandContext | BaseComponentContext ;

export interface HandlerOptions {
  autoDefer: boolean | { enabled: boolean; timeout: number };
  publicKey?: string, 
}

export const defaultOptions: HandlerOptions = {
  autoDefer: {
    enabled: true,
    timeout: 2000
  }, 
}