import { InteractionType, type APIInteraction } from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";
import { BaseInteraction, BaseRepliableInteraction } from "../structures/interactions/BaseInteraction";
import { AutoCompleteInteraction, BaseCommandInteraction } from "../structures/interactions/CommandInteractions";

export class InteractionFactory {
    static from(raw: APIInteraction, handler: InteractionHandler) {
        switch(raw.type) {
            case InteractionType.ApplicationCommand:
                return new BaseCommandInteraction(raw, handler);
            case InteractionType.MessageComponent:
                return new BaseRepliableInteraction(raw, handler)
            // auto complete interactions
            case InteractionType.ApplicationCommandAutocomplete:
                return new AutoCompleteInteraction(raw, handler);
            default:
                return new BaseInteraction(raw, handler);
        }
    }
}