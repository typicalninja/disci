import { APIInteraction, InteractionResponseType, InteractionType } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractioHandler";
import { getResponseEvent } from "../../utils/events";
import BaseInteractionContext from "./BaseInteractionContext";

export class BaseComponentContext extends BaseInteractionContext {
    override type: InteractionType.MessageComponent = InteractionType.MessageComponent;
    constructor(apiData: APIInteraction, public override InteractionHandler: InteractionHandler, public resId: string) {
        super(apiData, InteractionHandler);
    }
    reply() {
        if(this.replied) throw new Error(`Interaction already replied`)
        // emit the event to mark as replied
        console.log('resp:', getResponseEvent(this.resId))
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