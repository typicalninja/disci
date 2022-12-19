import type { APIInteraction } from "discord-api-types/v10";
import type { FastifyRequest, FastifyReply } from "fastify";
import type BaseInteractionContext from "../structures/context/BaseInteractionContext";

export enum RequestEvents {
  /**
   * Fired when a new Request comes through (unverified)
   */
  requestCreate ='requestCreate',
  /**
   * When a request is succefully verified as a Interaction orginating from discord (raw data)
   */
  rawInteractionCreate = 'rawInteractionCreate',
  /**
   * When a request is succefully identified as a Interaction and context is created
   */
  interactionCreate = 'interactionCreate'
}

export enum DiscordVerificationHeaders {
  Signature = "x-signature-ed25519",
  TimeStamp = "x-signature-timestamp"
}

export interface ClientEvents {
  requestCreate: (
    requestData: { request: FastifyRequest; reply: FastifyReply },
    verified: boolean
  ) => void;
  rawInteractionCreate: (
    requestData: { request: FastifyRequest; reply: FastifyReply },
    body: APIInteraction
  ) => void;
  interactionCreate: (InteractionContext: BaseInteractionContext) => void;
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