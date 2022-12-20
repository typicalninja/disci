import {  APIInteraction, ApplicationCommandType,InteractionResponseType } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractioHandler";
import type { MessageReplyOptions } from "../../utils/constants";
import { getResponseEvent } from "../../utils/events";
import BaseCommandContext from "./BaseCommandContext";


export class ChatInputCommandContext extends BaseCommandContext {
    constructor(apiData: APIInteraction, public override InteractionHandler: InteractionHandler, public resId: string) {
        super(apiData, InteractionHandler);
        this.commandType = ApplicationCommandType.ChatInput;
    }
    /**
     * Reply to the original request
     * @param type 
     * @param data 
     * @returns 
     */
    reply(type: InteractionResponseType.DeferredChannelMessageWithSource | InteractionResponseType.ChannelMessageWithSource, data?: MessageReplyOptions) {
        if(this.replied) throw new Error(`Interaction already replied`)
        if(![InteractionResponseType.DeferredChannelMessageWithSource, InteractionResponseType.ChannelMessageWithSource].includes(type)) throw new Error(`Invalid response type ${type}`)
        this.replied = true;
        // emit the event to mark as replied
        this.InteractionHandler.emit(getResponseEvent(this.resId) as any, {
            type: 'done',
            data: {
                type: type,
                data: data || null
            }
        });
        return this;
    }
    /**
     * Defer The reply (cannot defer if already replied)
     * @returns 
     */
    deferReply() {
        if(this.replied) throw new Error(`Interaction already replied`)
        return this.reply(InteractionResponseType.DeferredChannelMessageWithSource);
    }
}