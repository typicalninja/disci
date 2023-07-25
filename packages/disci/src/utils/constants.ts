import type { ApplicationCommands } from "../structures/ApplicationCommand";
import type { AutoCompleteInteraction } from "../structures/AutoCompleteInteraction";
import type { RESTClientOptions } from "./REST";
import type { ComponentInteraction } from "../structures/ComponentInteraction";

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

// Common type for interactions
export type InteractionContext =
	| ApplicationCommands
	| AutoCompleteInteraction
	| ComponentInteraction;

export interface IHandlerOptions {
	/**
	 * A debug callback function that can be used for debugging
	 */
	debug?: (msg: string) => void;
	/**
	 * Options for built in rest client
	 */
	rest: RESTClientOptions;
}

export const defaultOptions: IHandlerOptions = {
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
