import {
  APIApplicationCommandInteraction,
  APIChatInputApplicationCommandInteraction,
  ApplicationCommandType,
  InteractionType,
  Snowflake,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";
import type { IBase } from "./Base";
import { BaseInteraction, InteractionOptions } from "./BaseInteraction";
import type { default as Message } from "./primitives/Message";
import type User from "./primitives/User";
import type Member from "./primitives/Member";

/**
 * Represents the resolved data of a received command interaction.
 */
export interface CommandInteractionResolvedData {
	users: Map<Snowflake, User>;
	members: Map<Snowflake, Member>;
	roles: Map<Snowflake, unknown>;
	messages: Map<Snowflake, Message>;
}

export abstract class ApplicationCommand
  extends BaseInteraction
  implements IBase
{
  override type = InteractionType.ApplicationCommand
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
  /**
   * Resolved Data of this interaction
   */
  resolved: CommandInteractionResolvedData;
  constructor(
    handler: InteractionHandler,
    rawData: APIApplicationCommandInteraction,
  ) {
    super(handler, rawData);
    const data = rawData.data;
    this.commandType = data.type;
    this.commandName = data.name;
    this.commandId = data.id;

    this.resolved = {
      users: new Map(),
      members: new Map(),
      roles: new Map(),
      messages: new Map()
    }
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
}

export class ChatInputInteraction extends ApplicationCommand {
  options: InteractionOptions;
  override commandType = ApplicationCommandType.ChatInput
  constructor(
    handler: InteractionHandler,
    rawData: APIChatInputApplicationCommandInteraction,
  ) {
    super(handler, rawData)
    this.options = new InteractionOptions(rawData.data.options ?? [])
  }
}
export class MessageCommandInteraction extends ApplicationCommand {
  override commandType = ApplicationCommandType.Message
}
export class UserCommandInteraction extends ApplicationCommand {
  override commandType = ApplicationCommandType.User
}



export type ApplicationCommands = ChatInputInteraction | MessageCommandInteraction | UserCommandInteraction