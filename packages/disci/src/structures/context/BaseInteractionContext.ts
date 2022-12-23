import type { APIInteraction, InteractionType, Snowflake } from "discord-api-types/v10";
import type { callBackFunction, InteractionHandler } from "../../InteractioHandler";



/**
 * Base Interaction class for recived requests 
 */
export default class BaseInteractionContext {
    // ApiData By discord (according to https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure)
    /**
     * ID of the interaction
     */
    id!: Snowflake;
    /**
     * Continuation token for responding to the interaction
     */
    token!: string;
    /**
     * Type of this interaction
     */
    type!: InteractionType
    /**
     * Guild id of where it originated 
     */
    guildId?: Snowflake
    /**
     * Channel id of the interaction
     */
    channelId?: Snowflake
    // non discord data (own data)
    /**
     * Wether this Interaction has Already been replied to
     */
    replied: boolean = false;
    /**
     * Indicated wether the Interaction was Timedout
     */
    timedOut: boolean = false;
    constructor(apiData: APIInteraction, public InteractionHandler: InteractionHandler<any, any>, public callback: callBackFunction) {
        this.token = apiData.token;
        // if interaction from guild
        if(apiData.guild_id) {
            this.guildId = apiData.guild_id
        }
        
        if(apiData.channel_id) {
            this.channelId = apiData.channel_id
        }
    }
}

