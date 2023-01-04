import type { InteractionHandler } from "../InteractionHandler";
import type { IBase } from "./Base";
import { Permissions } from "../Permissions";

import type { Snowflake } from "discord-api-types/globals";
import type { APIInteraction, InteractionType } from "discord-api-types/v10";
import { SnowFlakeToTimestamp } from "../utils/helpers";

/**
 * Base Interaction, used by all other Interaction related Structures
 */
export abstract class BaseInteraction implements IBase {
    /**
     * ID of the interaction
     */
    id: Snowflake;
    /**
     * ID of the application this interaction is for
     */
    applicationId: Snowflake
    /**
     * Token of this interaction
     */
    token: string;
     /**
     * Type of this interaction
     */
     type: InteractionType
     /**
      * Guild that the interaction was sent from
      */
     guildId?: string;
     /**
      * Channel that the interaction was sent from
      */
     channelId?: string
     /**
      * Readonly Property, as per the Discord docs always 1
      * https://discord.com/developers/docs/interactions/receiving-and-responding
      */
     readonly version: 1;
     appPermissions?: Permissions;
     /**
      * If this interaction has Already been replied to
      */
     responded: boolean;
     /**
      * If this interaction timed out
      */
     timeout: boolean;
    /**
     * 
     * @param handler 
     * @param RawInteractionData 
     */
    constructor(public handler: InteractionHandler<any, any>, readonly RawInteractionData: APIInteraction) {
        this.id = RawInteractionData.id;
        this.applicationId = RawInteractionData.application_id;
        this.token = RawInteractionData.token;
        this.type = RawInteractionData.type;
        this.version = RawInteractionData.version;

        if(RawInteractionData.guild_id) this.guildId = RawInteractionData.guild_id;
        if(RawInteractionData.channel_id) this.channelId = RawInteractionData.channel_id;

        const permissions = RawInteractionData.app_permissions;
        if(permissions) {
            this.appPermissions = new Permissions(BigInt(permissions))
        }

        // properties to keep track of this Interaction
        this.responded = false;
        this.timeout = false;
    }
    get createdTimeStamp() {
        return SnowFlakeToTimestamp(this.id)
    }
    /**
     * Created time as a date
     */
    get createdAt(): Date {
		return new Date(this.createdTimeStamp);
	}
}
