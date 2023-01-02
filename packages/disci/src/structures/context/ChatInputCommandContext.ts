import { APIInteractionResponseChannelMessageWithSource, ApplicationCommandType,InteractionResponseType } from "discord-api-types/v10";
//import type { MessageReplyOptions } from "../../utils/constants";
import BaseCommandContext from "./BaseCommandContext";


export class ChatInputCommandContext extends BaseCommandContext {
    override commandType = ApplicationCommandType.ChatInput;
    /**
     * Reply to the original request
     * @param type 
     * @param data 
     * @returns 
     */
    reply(type: InteractionResponseType.DeferredChannelMessageWithSource | InteractionResponseType.ChannelMessageWithSource, /*data?: MessageReplyOptions*/) {
        if(this.replied) throw new Error(`Interaction already replied`)
        if(![InteractionResponseType.DeferredChannelMessageWithSource, InteractionResponseType.ChannelMessageWithSource].includes(type)) throw new Error(`Invalid response type ${type}`)
        this.replied = true;
        // emit the event to mark as replied
        this.callback({
            status: 200,
            responseHeaders: {},
            responseData: {
              type: type,
               data: {
                content: 'Test'
               }
            } as APIInteractionResponseChannelMessageWithSource
        })
        return this;
    }
    /**
     * Defer The reply 
     * cannot defer if already replied
     * @returns 
     */
    deferReply() {
        if(this.replied) throw new Error(`Interaction already replied`)
        return this.reply(InteractionResponseType.DeferredChannelMessageWithSource);
    }
}