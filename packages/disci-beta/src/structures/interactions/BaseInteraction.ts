import type { APIInteraction, InteractionType, Snowflake } from "discord-api-types/v10";
import { Base } from "../Base";
import type { InteractionHandler } from "../../InteractionHandler";

export class BaseInteraction extends Base<APIInteraction> {
    /**
	 * ID of the interaction
	 */
	readonly id: Snowflake;
	/**
	 * ID of the application this interaction is for
	 */
	readonly applicationId: Snowflake;
	/**
	 * Token of this interaction
	 */
	readonly token: string;
	/**
	 * Type of this interaction
	 */
	type: InteractionType;
	/**
	 * Id of the Guild that the interaction was sent from
	 */
	guildId?: string;
	/**
	 * Id of the Channel that the interaction was sent from
	 */
	channelId?: string;
	/**
	 * Readonly Property, as per the Discord docs always 1
	 * https://discord.com/developers/docs/interactions/receiving-and-responding
	 */
	readonly version: 1;
    constructor(raw: APIInteraction, handler: InteractionHandler) {
        super(raw, handler);

        // readonly property received from the api, always 1
        this.version = raw.version
        this.id = raw.id;
        this.applicationId = raw.application_id
        this.token = raw.token
        this.type = raw.type
    }
}