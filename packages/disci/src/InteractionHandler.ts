import { EventEmitter } from "eventemitter3";

import {
	APIInteraction,
	APIInteractionResponse,
	InteractionResponseType,
	InteractionType,
} from "discord-api-types/v10";
import {
	HandlerOptions,
	defaultOptions,
	ClientEvents,
} from "./utils/constants";
import { tryAndValue } from "./utils/helpers";
import { InteractionFactory } from "./utils/Factories";

import { Rest } from "./utils/REST";

/**
 * Main Handler class, handles incoming request and outputs a response
 */
export class InteractionHandler extends EventEmitter<ClientEvents> {
	options: HandlerOptions;
	/**
	 * Handler Rest Manager
	 */
	api: Rest;
	constructor(options: Partial<HandlerOptions> = {}) {
		super();
		this.options = Object.assign(defaultOptions, options);
		this.api = new Rest(this.options.rest);
	}
	/**
	 * Process a request and return a response according to the request.
	 * This does not verify the validity of the request
	 *
	 * @param body body of the received request
	 * @param signal Abort controller signal allow you to control when the handler ends (timeouts etc)
	 * @returns A json object containing data to be responded with
	 *
	 *
	 * @example
	 *
	 * ```ts
	 * // get the request here
	 *
	 * // verify it here
	 * if(!(await isVerified(request))) return new Response("Invalid Headers, Unauthorized", { status: 401 })
	 *
	 *	const timeOutAbort = new AbortController();
	 *	const timeout = setTimeout(() => {
	 *		timeOutAbort.abort("Time out");
	 *	}, 3000);
	 *
	 * try {
	 * 	const handled = await processRequest(body, timeOutAbort.signal)
	 * 	// if it resolved that means handler successfully resolved
	 * 	// remember to remove the timeout
	 * 	clearTimeout(timeout)
	 * 	// it safe to return the response as a json response
	 * 	return new Response(handled, { status: 200 })
	 * }
	 * catch {
	 * 	return new Response("Server Error", { status: 500 })
	 * }
	 * ```
	 */
	processRequest(
		body: string | Record<string, unknown>,
		signal?: AbortSignal,
	): Promise<APIInteractionResponse> {
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
					new TypeError(
						`Failed to parse received interaction to a valid interaction`,
					),
				);
			// convert rawInteraction -> interaction
			const interaction = InteractionFactory.from(this, rawInteraction);

			if (interaction) {
				// assign a callback
				interaction.useCallback((response) => resolve(response));
				// register a event to check for aborts
				if (signal) {
					signal.addEventListener("abort", () => {
						interaction.useCallback(() => {
							throw new Error(`Interaction timed out (via abort)`);
						});
						reject(signal.reason);
					});
				}

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
					new TypeError(
						`Unsupported Interaction of type ${rawInteraction.type} received`,
					),
				);
			}
		});
	}
}
