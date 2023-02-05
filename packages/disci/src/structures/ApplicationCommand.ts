import {
  APIApplicationCommandInteraction,
  ApplicationCommandType,
  InteractionResponseType,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";
import { DisciInteractionError } from "../utils/helpers";
import type { IBase } from "./Base";
import { BaseInteraction } from "./BaseInteraction";

export abstract class ApplicationCommand
  extends BaseInteraction
  implements IBase
{
  /**
   * Type of this command
   * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
   */
  commandType: ApplicationCommandType;
  /**
   * Name of this command
   */
  commandName: string;
  /**
   * Id Of **The Application command** (not interaction)
   */
  commandId: string;
  constructor(
    handler: InteractionHandler,
    rawData: APIApplicationCommandInteraction,
  ) {
    super(handler, rawData);
    const data = rawData.data;
    this.commandType = data.type;
    this.commandName = data.name;
    this.commandId = data.id;
  }
  /**
   * If this is a Message Context menu
   */
  isMessageCommand(): this is MessageCommandInteraction {
    return this.commandType === ApplicationCommandType.Message;
  }
  /**
   * If this is a User Context menu
   */
  isUserCommand(): this is UserCommandInteraction {
    return this.commandType === ApplicationCommandType.User;
  }
  /**
   * If this is a Slash Command
   */
  isSlashCommand(): this is ChatInputInteraction {
    return this.commandType === ApplicationCommandType.ChatInput;
  }

  /**
   * Alias to isSlashCommand
   */
  isChatInputInteraction(): this is ChatInputInteraction {
    return this.isSlashCommand()
  }
   /**
   * Send a defer type response, gives you extra time to reply.User sees a loading state
   */
   deferResponse() {
    if (this.timeout)
      throw new DisciInteractionError(`This Interaction already timed out`);
    if (this.responded)
      throw new DisciInteractionError(
        `This interaction has already been responded to.`
      );
    return this._respond({
      type: InteractionResponseType.DeferredChannelMessageWithSource
    });
  }
}

// dummy for now
export class ChatInputInteraction extends ApplicationCommand {}
export class MessageCommandInteraction extends ApplicationCommand {}
export class UserCommandInteraction extends ApplicationCommand {}



export type ApplicationCommands = ChatInputInteraction | MessageCommandInteraction | UserCommandInteraction