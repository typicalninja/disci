import { APIChatInputApplicationCommandInteractionData, APIInteraction, APIMessageApplicationCommandInteractionData, APIUserApplicationCommandInteractionData, ApplicationCommandType, InteractionType } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractioHandler";
import BaseInteractionContext from "./BaseInteractionContext";

type ApplicationCommandDataTypes = APIChatInputApplicationCommandInteractionData | APIUserApplicationCommandInteractionData | APIMessageApplicationCommandInteractionData


export default class BaseApplicationCommandContext extends BaseInteractionContext {
    /**
     * The type of the ApplicationCommand 
     */
    commandType: ApplicationCommandType = -1;
    /**
     * The name of the ApplicationCommand
     */
    commandName: string;
    /**
     * Id of the ApplicationCommand
     */
    commandId: string;
    /**
     * Base Context used for Application commands
     * @param apiData 
     * @param InteractionHandler 
     */
    constructor(apiData: APIInteraction, public override InteractionHandler: InteractionHandler) {
        super(apiData, InteractionHandler);
        const Data = apiData.data as ApplicationCommandDataTypes;
        this.type = InteractionType.ApplicationCommand;
        this.commandName = Data.name;
        this.commandId = Data.id;
    }
}