import {
  APIApplicationCommandInteraction,
  APIChatInputApplicationCommandInteraction,
  ApplicationCommandType,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";
import type { callBackFunction } from "../utils/helpers";
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
    handler: InteractionHandler<any>,
    rawData: APIApplicationCommandInteraction,
    callback: callBackFunction
  ) {
    super(handler, rawData, callback);
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
}

export class ChatInputInteraction extends ApplicationCommand {
  constructor(
    handler: InteractionHandler<any>,
    rawData: APIChatInputApplicationCommandInteraction,
    callback: callBackFunction
  ) {
    super(handler, rawData, callback);
  }
}

export class MessageCommandInteraction extends ApplicationCommand {}
export class UserCommandInteraction extends ApplicationCommand {}
