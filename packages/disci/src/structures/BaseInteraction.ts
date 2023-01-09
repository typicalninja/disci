import type { InteractionHandler } from "../InteractionHandler";
import type { IBase } from "./Base";
import { PermissionsBitField } from "./Bitfield";

import type { Snowflake } from "discord-api-types/globals";
import { APIInteraction, APIInteractionResponseCallbackData, InteractionResponseType, InteractionType } from "discord-api-types/v10";
import { callBackFunction, convertSnowflakeToTimeStamp, DisciError, DisciTypeError } from "../utils/helpers";
import type { ApplicationCommand } from "./ApplicationCommand";

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
     appPermissions?: PermissionsBitField;
     /**
      * If this interaction has Already been responded to
      */
     responded: boolean;
     /**
      * If this interaction timed out (3s)
      */
     timeout: boolean;
    /**
     * 
     * @param handler 
     * @param RawInteractionData 
     */
    constructor(public handler: InteractionHandler<any, any>, readonly RawInteractionData: APIInteraction, protected callback: callBackFunction) {
        this.id = RawInteractionData.id;
        this.applicationId = RawInteractionData.application_id;
        this.token = RawInteractionData.token;
        this.type = RawInteractionData.type;
        this.version = RawInteractionData.version;

        if(RawInteractionData.guild_id) this.guildId = RawInteractionData.guild_id;
        if(RawInteractionData.channel_id) this.channelId = RawInteractionData.channel_id;

        const permissions = RawInteractionData.app_permissions;
        if(permissions) {
            this.appPermissions = new PermissionsBitField(BigInt(permissions))
        }

        // properties to keep track of this Interaction
        this.responded = false;
        this.timeout = false;
    }
    /**
     * Timestamp of this interaction
     */
    get createdTimestamp() {
        return convertSnowflakeToTimeStamp(this.id)
    }
    /**
     * Created time as a date
     */
    get createdAt(): Date {
		return new Date(this.createdTimestamp);
	}

    isCommand(): this is ApplicationCommand {
		return this.type === InteractionType.ApplicationCommand;
	}
    /**
     * Respond to this interaction
     * @returns 
     */
    respond(type: InteractionResponseType.ChannelMessageWithSource | InteractionResponseType.DeferredChannelMessageWithSource = InteractionResponseType.DeferredChannelMessageWithSource, options: APIInteractionResponseCallbackData) {
        if(this.timeout) throw new DisciError(`Response Stale, the Interaction has expired`);
        if(this.responded) throw new DisciError(`This interaction has already been responded to.`);
        const { content, embeds } = options;
        if(!content || !embeds) throw new DisciTypeError(`Invalid Response options, require atleast content`)
        this.callback({
            responseData: {
                type,
                data: options,
            },
            statusCode: 200,
        });
        this.responded = true;
        return this;
    }
}

