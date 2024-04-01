import type { APIInteraction } from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";
import { BaseInteraction } from "../structures/interactions/BaseInteraction";

export class InteractionFactory {
    static from(raw: APIInteraction, handler: InteractionHandler) {
        switch(raw.type) {
            default:
                return new BaseInteraction(raw, handler)
        }
    }
}