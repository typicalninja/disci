import type { RESTClientOptions } from "./REST";
import type { BaseInteraction } from "../structures";

/**
 * @link https://discord.com/developers/docs/reference#image-formatting
 */
export type DiscordImageSize =
	| 16
	| 32
	| 64
	| 128
	| 256
	| 512
	| 1024
	| 2048
	| 4096;

export const DiscordEpoch = 14200704e5;

export interface HandlerOptions {
	/**
	 * Options for built in rest client
	 */
	rest: RESTClientOptions;
}

export const defaultOptions: HandlerOptions = {
	rest: {
		token: (typeof process !== "undefined" && process.env.TOKEN) || "",
	},
};

/** @private */
export enum URLS {
	DiscordApi = "https://discord.com/api",
	DiscordCdn = "https://cdn.discordapp.com",
}

/**
 * Events fired by the handler
 */
export interface ClientEvents {
	/**
	 * Fired when a interaction is received
	 * @param interaction - Respective interaction class
	 */
	interactionCreate: (interaction: BaseInteraction) => unknown;
}
