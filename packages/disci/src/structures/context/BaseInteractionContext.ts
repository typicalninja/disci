import { APIInteraction, InteractionResponseType, InteractionType, Snowflake } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractioHandler";
import { getRepliedEvent, getResponseEvent } from "../../utils/events";


/**
 * Base Interaction class for recived requests 
 */
export default class BaseInteractionContext {
    // ApiData By discord (according to https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure)
    /**
     * ID of the interaction
     */
    id: Snowflake = "";
    /**
     * Continuation token for responding to the interaction
     */
    token: string = "";
    /**
     * Type of this interaction
     */
    type: InteractionType
    /**
     * Guild id of where it originated 
     */
    guildId?: Snowflake
    channelId?: Snowflake
    // non discord data (own data)
    /**
     * Wether this Interaction has Already been replied to
     */
    replied: boolean;
    constructor(apiData: APIInteraction, public InteractionHandler: InteractionHandler, private resId: string) {
        this.type = apiData.type;
        this.token = apiData.token;
        this.replied = false;
        // if interaction from guild
        if(apiData.guild_id) {
            this.guildId = apiData.guild_id
        }
        
        if(apiData.channel_id) {
            this.channelId = apiData.channel_id
        }

        // marks this interaction a replied, when emitted
        InteractionHandler.once(getRepliedEvent(resId) as any, () => {
            console.log('replied', this.replied)
            this.replied = true;
        });
    }
    reply() {
        if(this.replied) throw new Error(`Interaction already replied`)
        // emit the event to mark as replied
        console.log('resp:', getResponseEvent(this.resId))
        this.InteractionHandler.emit(getResponseEvent(this.resId) as any, {
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
                content: 'test'
            }
        });
        this.InteractionHandler.emit(getRepliedEvent(this.resId) as any);

        return this;
    }
}

