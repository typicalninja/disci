export enum DiscordVerificationHeaders {
  Signature = "x-signature-ed25519",
  TimeStamp = "x-signature-timestamp"
}

export interface ClientOptions {
  autoDefer?: boolean;
  autoDeferTimeout?: number;
  publicKey?: string, 
}

export const defaultOptions: ClientOptions = {
  autoDefer: true, 
  autoDeferTimeout: 2000,
}