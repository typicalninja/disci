import type { InteractionHandler } from "../InteractionHandler";
import type { Base } from "./Base";


import type { Snowflake } from "discord-api-types/globals";
import type { APIInteraction } from "discord-api-types/v10";

/**
 * Base Interaction, used by all other Interaction related Structures
 */
export abstract class BaseInteraction implements Base {
    /**
     * ID of the interaction
     */
    id: Snowflake;
    constructor(public handler: InteractionHandler<any, any>, InteractionData: APIInteraction) {
        
    }
}
