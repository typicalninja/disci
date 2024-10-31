import { type APIInteraction, InteractionType } from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler.js";
import {
	BaseInteraction,
	BaseRepliableInteraction,
} from "../structures/interactions/BaseInteraction.js";
import {
	AutoCompleteInteraction,
	BaseCommandInteraction,
} from "../structures/interactions/CommandInteractions.js";

// biome-ignore lint/complexity/noStaticOnlyClass: factories are meant to be static (for now)
export class InteractionFactory {
	static from(raw: APIInteraction, handler: InteractionHandler) {
		switch (raw.type) {
			case InteractionType.ApplicationCommand:
				return new BaseCommandInteraction(raw, handler);
			case InteractionType.MessageComponent:
				return new BaseRepliableInteraction(raw, handler);
			// auto complete interactions
			case InteractionType.ApplicationCommandAutocomplete:
				return new AutoCompleteInteraction(raw, handler);
			default:
				return new BaseInteraction(raw, handler);
		}
	}
}
