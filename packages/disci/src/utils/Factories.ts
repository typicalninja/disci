// factory pattern - takes data from the api and returns thier respective classes from disci
// fixes a circular dep bug due to old factories being in thier respective files?
import { type APIInteraction, InteractionType, APIApplicationCommandInteraction, ApplicationCommandType, APIChatInputApplicationCommandInteraction, APIMessageComponentBaseInteractionData } from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";
import { type ApplicationCommands, ChatInputInteraction, MessageCommandInteraction, UserCommandInteraction } from "../structures/ApplicationCommand";
import { AutoCompleteInteraction } from "../structures/AutoCompleteInteraction";
import type { InteractionContext } from "./constants";
import { ComponentInteraction } from "../structures/ComponentInteraction";

/**
 * Factory for all base Interactions
 */
export class InteractionFactory {
    static from(handler: InteractionHandler, APIData: APIInteraction): InteractionContext | null {
        switch(APIData.type) {
            case InteractionType.ApplicationCommand:
               return ApplicationCommandFactory.from(handler, APIData);
            case InteractionType.ApplicationCommandAutocomplete:
              return new AutoCompleteInteraction(handler, APIData);
            case InteractionType.MessageComponent:
              return ComponentInteractionFactory.from(handler, APIData)
            default:
                return null;
        }
    }
}

/**
 * Factory for components
 */
export class ComponentInteractionFactory {
  static from(handler: InteractionHandler, apiData: APIMessageComponentBaseInteractionData) {
    return new ComponentInteraction(handler, apiData)
  }
}

/**
 * Factory for Application Commands
 */
export class ApplicationCommandFactory {
    static from(handler: InteractionHandler, APIData: APIApplicationCommandInteraction): ApplicationCommands | null {
      switch(APIData.data.type) {
        case ApplicationCommandType.ChatInput:
          return new ChatInputInteraction(handler, APIData as APIChatInputApplicationCommandInteraction);
        case ApplicationCommandType.Message:
          return new MessageCommandInteraction(handler, APIData);
        case ApplicationCommandType.User:
          return new UserCommandInteraction(handler, APIData)
        default:
          return null;
      }
    }
}

