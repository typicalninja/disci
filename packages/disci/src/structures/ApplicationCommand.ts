import {
	APIApplicationCommandInteraction,
	APIChatInputApplicationCommandInteraction,
	APIInteractionDataResolvedGuildMember,
	APIMessageApplicationCommandInteraction,
	APIUserApplicationCommandInteraction,
	ApplicationCommandType,
	InteractionType,
	Snowflake,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";
import type { IBase } from "./Base";
import { BaseReplyInteraction, InteractionOptions } from "./BaseInteraction";
import type {
	default as Message,
} from "./primitives/Message";
import User from "./primitives/User";

/**
 * Represents the resolved data of a received command interaction.
 */
export interface CommandInteractionResolvedData {
	users: Map<Snowflake, User>;
	members: Map<Snowflake, APIInteractionDataResolvedGuildMember>;
	roles: Map<Snowflake, unknown>;
	messages: Map<Snowflake, Message>;
}

/**
 * Represents Application commands such as slash commands / menu
 */
export abstract class ApplicationCommand
	extends BaseReplyInteraction
	implements IBase
{
	override type = InteractionType.ApplicationCommand;
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
			messages: new Map(),
		};
	}
	/**
	 * If this is a Message Context menu
	 */
	isMessageMenu(): this is MessageCommandInteraction {
		return this.commandType === ApplicationCommandType.Message;
	}
	/**
	 * If this is a User Context menu
	 */
	isUserMenu(): this is UserCommandInteraction {
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
		return this.isSlashCommand();
	}
	
}

export class ChatInputInteraction extends ApplicationCommand {
	options: InteractionOptions;
	override commandType = ApplicationCommandType.ChatInput;
	constructor(
		handler: InteractionHandler,
		rawData: APIChatInputApplicationCommandInteraction,
	) {
		super(handler, rawData);
		this.options = new InteractionOptions(rawData.data.options ?? []);
	}
}

export interface ContextMenuInteraction {
	targetId: Snowflake;
}
export class MessageCommandInteraction extends ApplicationCommand {
	override commandType = ApplicationCommandType.Message;
	constructor(
		handler: InteractionHandler,
		rawData: APIMessageApplicationCommandInteraction,
	) {
		super(handler, rawData);
		// parse message
	}
}
export class UserCommandInteraction
	extends ApplicationCommand
	implements ContextMenuInteraction
{
	override commandType = ApplicationCommandType.User;
	/**
	 * Id of the Target user
	 */
	targetId: Snowflake;
	/**
	 * Target User
	 */
	targetUser?: User;
	constructor(
		handler: InteractionHandler,
		rawData: APIUserApplicationCommandInteraction,
	) {
		super(handler, rawData);
		const data = rawData.data;
		this.targetId = data.target_id;

		// resolved users
		if (data.resolved.users) {
			for (const [id, user] of Object.entries(data.resolved.users)) {
				this.resolved.users.set(id, new User(this.handler, user));
			}
		}

		if (data.resolved.members) {
			for (const [id, member] of Object.entries(data.resolved.members)) {
				this.resolved.members.set(id, member);
			}
		}

		this.targetUser = this.resolved.users.get(this.targetId);
	}
}

export type ApplicationCommands =
	| ChatInputInteraction
	| MessageCommandInteraction
	| UserCommandInteraction;
