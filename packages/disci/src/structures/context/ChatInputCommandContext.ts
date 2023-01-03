import { APIInteractionResponseChannelMessageWithSource, ApplicationCommandType,InteractionResponseType, Routes } from "discord-api-types/v10";
import { DisciError } from "../../utils/helpers";
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
    reply(type: InteractionResponseType.DeferredChannelMessageWithSource | InteractionResponseType.ChannelMessageWithSource, /*data?: MessageReplyOptions*/): ChatInputCommandContext {
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
    deferReply(): ChatInputCommandContext {
        if(this.replied) throw new DisciError(`Interaction already replied`, { methodName: 'deferReply' })
        return this.reply(InteractionResponseType.DeferredChannelMessageWithSource);
    }
    /**
     * Fetch The initial Interaction response
     */
    fetchOriginal() {
      if(!this.replied) throw new DisciError(`Cannot Fetch a interaction that has not been replied to.`, { methodName: 'fetchOriginal()' })
      const { appId } = this.InteractionHandler.options
      if(!this.InteractionHandler.rest || !appId) throw new DisciError(`Rest Handler is not activated`, { methodName: 'fetchOriginal' });
      return this.InteractionHandler.rest.get(Routes.webhookMessage(appId, this.token))
    }
}