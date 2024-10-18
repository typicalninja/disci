import {
	type APIApplicationCommandAutocompleteInteraction,
	type APIApplicationCommandInteraction,
	type APIApplicationCommandOptionChoice,
	InteractionResponseType,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import {
	BaseInteraction,
	BaseRepliableInteraction,
	InteractionOptions,
} from "./BaseInteraction";

export class BaseCommandInteraction extends BaseRepliableInteraction<APIApplicationCommandInteraction> {}

/**
 * Autocomplete interaction for ChatInput interactions
 */
export class AutoCompleteInteraction extends BaseInteraction {
	options: InteractionOptions;
	constructor(
		raw: APIApplicationCommandAutocompleteInteraction,
		handler: InteractionHandler,
	) {
		super(raw, handler);
		const data = raw.data;

		this.options = new InteractionOptions(data.options);
	}
	/**
	 * Respond to a autocomplete interaction
	 *
	 * @example
	 * ```ts
	 * interaction.respond([
	 * 	{ name: 'choice', value: 'choice value' }
	 * ])
	 * ```
	 */
	respond(choices: APIApplicationCommandOptionChoice[]) {
		if (!Array.isArray(choices))
			throw new TypeError("Expected autocomplete choices to be a array");
		this.respondRaw({
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices,
			},
		});
		return this;
	}
}
