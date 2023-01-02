import { APIChatInputApplicationCommandInteractionData, APIInteraction, APIMessageApplicationCommandInteractionData, APIUserApplicationCommandInteractionData, ApplicationCommandType, InteractionType } from "discord-api-types/v10";
import type { callBackFunction, InteractionHandler } from "../../InteractionHandler";
import BaseInteractionContext from "./BaseInteractionContext";

type ApplicationCommandDataTypes = APIChatInputApplicationCommandInteractionData | APIUserApplicationCommandInteractionData | APIMessageApplicationCommandInteractionData


export default class BaseCommandContext extends BaseInteractionContext {
    /**
     * The type of the ApplicationCommand 
     */
    commandType!: ApplicationCommandType;
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
    constructor(apiData: APIInteraction, InteractionHandler: InteractionHandler<any, any>, callback: callBackFunction) {
        super(apiData, InteractionHandler, callback);
        const Data = apiData.data as ApplicationCommandDataTypes;
        this.type = InteractionType.ApplicationCommand;
        // add ApplicationCommandData
        this.commandName = Data.name;
        this.commandId = Data.id;
    }
}