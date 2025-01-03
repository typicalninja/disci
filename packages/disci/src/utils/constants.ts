import type { BaseInteraction } from "../structures/interactions/BaseInteraction.js";
import type { RESTClientOptions } from "./REST.js";

export const DiscordEpoch = 14200704e5;

export const DiscordVerifyHeaders = {
	signature: "x-signature-ed25519",
	timestamp: "x-signature-timestamp",
} as const;

/**
 * Events fired by the handler
 */
export interface HandlerEvents {
	/**
	 * Fired when a interaction is received
	 * @param interaction - Respective interaction class
	 */
	interactionCreate: (interaction: BaseInteraction) => unknown;
}

export const EventNames = {
	interactionCreate: "interactionCreate",
} as const;

export const InternalEventNames = {
	interactionResponse: "inte_interactionresponse_",
} as const;

export interface HandlerConfig {
	publicKey: string;
	cryptoEngine: SubtleCrypto;
	waitForResponse: number;
	restConfig: RESTClientOptions;
}

export const DefaultConfig: HandlerConfig = {
	cryptoEngine: crypto.subtle,
	publicKey: "",
	// we use 3000 sinces thats the maximum allowed time by discord, no use allowing more than that
	waitForResponse: 3000,
	restConfig: {},
};

/** @private */
export enum URLS {
	DiscordApi = "https://discord.com/api",
	DiscordCdn = "https://cdn.discordapp.com",
}

/**
 * HTTP request typed as InteractionHandler expects
 * Non standard
 */
export interface GenericRequest {
	body: string;
	/**
	 * Most Request types from regular http frameworks does not offer headers like this
	 * However we let adapters fix this for us
	 * */
	headers: Record<string, string>;
}

export interface GenericErrorResponse {
	status: number;
	error: string;
}
