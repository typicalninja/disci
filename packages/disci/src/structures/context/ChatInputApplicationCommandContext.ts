import { APIApplicationCommandInteractionData, APIInteraction, ApplicationCommandType, InteractionResponseType, InteractionType } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractioHandler";
import { getResponseEvent } from "../../utils/events";
import BaseApplicationCommandContext from "./BaseApplicationCommandContext";


export class BaseCommandContext extends BaseApplicationCommandContext {
    constructor(apiData: APIInteraction, public override InteractionHandler: InteractionHandler, public resId: string) {
        super(apiData, InteractionHandler);
        this.commandType = ApplicationCommandType.ChatInput;
    }
    reply(type: InteractionType, data: APIApplicationCommandInteractionData) {
        if(this.replied) throw new Error(`Interaction already replied`)
        // emit the event to mark as replied
        this.InteractionHandler.emit(getResponseEvent(this.resId) as any, {
            type: 'done',
            data: {
                type: InteractionResponseType.ChannelMessageWithSource,
                data: {
                    content: 'test'
                }
            }
        });

        return this;
    }
}