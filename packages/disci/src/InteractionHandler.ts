// types for events
import type { TypedEmitter } from "./utils/TypedEmitter";

import {
	APIInteraction,
	APIInteractionResponse,
	InteractionResponseType,
	InteractionType,
} from "discord-api-types/v10";
import {
	IHandlerOptions,
	defaultOptions,
	IClientEvents,
} from "./utils/constants";
import { tryAndValue } from "./utils/helpers";
import { InteractionFactory } from "./utils/Factories";

import { EventEmitter } from "node:events";
import { Rest } from "./utils/REST";

export class InteractionHandler extends (EventEmitter as unknown as new () => TypedEmitter<IClientEvents>) {
	options: IHandlerOptions;
	/**
	 * Rest Manager
	 */
	api: Rest;
	constructor(options: Partial<IHandlerOptions>) {
		super();
		this.options = Object.assign({}, defaultOptions, options);
		// rest manager is provided by the user
		this.api = new Rest(this.options.rest);
	}
	/**
	 * Internal function for debugging conditionally
	 */
	private debug(msg: string) {
		msg = "[@DISCI/HANDLER]: " + msg;
		if (this.options.debug) {
			// if debug is enabled
			if (typeof this.options.debug === "function") this.options.debug(msg);
			else console.debug(msg);
		}

		return void 0;
	}
	/**
	 * Process a request and return a response according to the request.
	 * You must use the respective method of returning a response to the client of your framework and return the Response back with the appropriate statusCode.
	 * This does not verify the validity of the request
	 * @param body body of the received request
	 * @returns a Response Object containing data to be responded with
	 */
	processRequest(body: string): Promise<APIInteractionResponse> {
		return new Promise((resolve, reject) => {
			// parse the request body
			const rawInteraction = tryAndValue<APIInteraction>(
				() =>
					(typeof body === "string"
						? JSON.parse(body)
						: body) as APIInteraction,
			);
			if (!rawInteraction)
				return reject(
					`ParseError: Failed to parse received interaction to a valid interaction`,
				);
			// convert rawInteraction -> interaction
			const interaction = InteractionFactory.from(this, rawInteraction);

			if (interaction) {
				// assign a callback
				interaction.useCallback((response) => {
					this.debug(`Resolving Interaction with ${JSON.stringify(response)} `);
					return resolve(response);
				});
				// finally emit the event
				return this.emit("interactionCreate", interaction);
			}
			// a ping event
			else if (rawInteraction.type === InteractionType.Ping) {
				// just resolve without doing anything
				return resolve({
					type: InteractionResponseType.Pong,
				});
			} else {
				// if its not a interaction we recognize or a ping its most likely unsupported new feature
				reject(
					`UnsupportedInteraction: Unsupported Interaction of type ${rawInteraction.type} received`,
				);
			}
		});
	}
}
