import type { InteractionHandler } from "../InteractionHandler";
import type { IBase } from "./Base";
import { PermissionsBitField } from "./builders/Bitfield";

import type { Snowflake } from "discord-api-types/globals";
import { APIInteraction, APIInteractionResponse, APIInteractionResponseCallbackData, InteractionResponseType, InteractionType } from "discord-api-types/v10";
import { callBackFunction, convertSnowflakeToTimeStamp, DisciError, DisciInteractionError, DisciTypeError } from "../utils/helpers";
import type { ApplicationCommand } from "./ApplicationCommand";
import type { MessageReplyOptions } from "../utils/constants";

/**
 * Base Interaction, used by all other Interaction related Structures
 */
export abstract class BaseInteraction implements IBase {
    /**
     * ID of the interaction
     */
    readonly id: Snowflake;
    /**
     * ID of the application this interaction is for
     */
    readonly applicationId: Snowflake
    /**
     * Token of this interaction
     */
    readonly token: string;
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
    constructor(public handler: InteractionHandler<any>, readonly RawInteractionData: APIInteraction, protected callback: callBackFunction) {
        this.id = RawInteractionData.id;
        this.applicationId = RawInteractionData.application_id;
        this.token = RawInteractionData.token;
        this.type = RawInteractionData.type;
        this.version = RawInteractionData.version;

        if(RawInteractionData.guild_id) this.guildId = RawInteractionData.guild_id;
        if(RawInteractionData.channel_id) this.channelId = RawInteractionData.channel_id;

        const permissions = RawInteractionData.app_permissions;
        if(permissions) {
            this.appPermissions = new PermissionsBitField(BigInt(permissions));
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
    /**
     * Type guard to verify if this interaction is ApplicationCommand
     * @returns 
     */
    isCommand(): this is ApplicationCommand {
		return this.type === InteractionType.ApplicationCommand;
	}
    /**
     * Respond to this interaction
     * @returns 
     */
    respond(message: string, options?: Omit<MessageReplyOptions, 'content'>): this;
    respond(type: InteractionResponseType, options?: MessageReplyOptions): this;
    respond(type: InteractionResponseType | string = InteractionResponseType.DeferredChannelMessageWithSource, options?: MessageReplyOptions) {
        if(this.timeout) throw new DisciError(`Response Stale, the Interaction has expired`);
        if(this.responded) throw new DisciError(`This interaction has already been responded to.`);
        let APIdata = {} as APIInteractionResponse;

        // if a Defer just the type is required
        if(type === InteractionResponseType.DeferredChannelMessageWithSource) {
            APIdata = { type }
        } 
        // can pass the text to reply with
        else if(typeof type === 'string') {
            APIdata = {
                type: InteractionResponseType.ChannelMessageWithSource,
                data: {
                    content: type,
                }
            }

        }
        else if(options) {
            const { content, embeds } = options;
            if(!content && !embeds) throw new DisciTypeError(`Invalid Response options, require atleast content`)
            APIdata = { type, data: options }
        }
        else throw new DisciTypeError(`Response types other than defer require options`)

        this.callback({
            responseData: APIdata,
            statusCode: 200,
        });
        this.responded = true;
        return this;
    }
    /**
     * Send a defer type response, gives you extra time to reply
     */
    deferResponse() {
        if(this.timeout) throw new DisciInteractionError(`Interaction already timed out`);
        if(this.responded) throw new DisciInteractionError(`This interaction has already been responded to.`);
        return this.respond(InteractionResponseType.DeferredChannelMessageWithSource)
    }
}

