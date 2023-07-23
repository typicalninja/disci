import {
	APIApplicationCommandAutocompleteInteraction,
	APIApplicationCommandOptionChoice,
	ApplicationCommandType,
	InteractionResponseType,
	InteractionType,
	Snowflake,
} from "discord-api-types/v10";
import { TypeErrorsMessages, DisciTypeError } from "../utils/errors";
import type { IBase } from "./Base";
import { BaseInteraction, InteractionOptions } from "./BaseInteraction";
import type { InteractionHandler } from "../InteractionHandler";

/**
 * Represents a Autocomplete interaction
 */
export class AutoCompleteInteraction extends BaseInteraction implements IBase {
	override type = InteractionType.ApplicationCommandAutocomplete;
	/**
	 * Id of the command this autocomplete was sent for
	 */
	commandId: Snowflake;
	/**
	 * Name of the command this autocomplete was sent for
	 */
	commandName: string;
	/**
	 * Type of the command this autocomplete was sent for
	 */
	commandType: ApplicationCommandType;
	/**
	 * Guild id of the command this autocomplete was sent for
	 */
	commandGuildId?: Snowflake;
	options: InteractionOptions;
	constructor(
		handler: InteractionHandler,
		rawData: APIApplicationCommandAutocompleteInteraction,
	) {
		super(handler, rawData);
		const data = rawData.data;

		this.commandId = data.id;
		this.commandName = data.name;
		this.commandType = data.type;
		this.commandGuildId = data.guild_id;
		this.options = new InteractionOptions(data.options ?? []);
	}
	/**
	 * Send autocomplete results
	 *
	 * Set to empty array for "No choices"
	 */
	respondWithChoices(choices: (APIApplicationCommandOptionChoice | string)[]) {
		if (!Array.isArray(choices))
			throw new DisciTypeError(
				TypeErrorsMessages.ExpectedParameter(
					`choices`,
					"array",
					typeof choices,
				),
			);
		const _choices = this.getChoices(choices);
		this._respond({
			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
			data: {
				choices: _choices,
			},
		});
		return this;
	}
	private getChoices(
		choices: (APIApplicationCommandOptionChoice | string)[],
	): APIApplicationCommandOptionChoice[] {
		// string or obj can be present
		return choices.map((choice) =>
			typeof choice !== "string" ? choice : { name: choice, value: choice },
		);
	}
}
