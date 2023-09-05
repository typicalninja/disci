// factory pattern - takes data from the api and returns their respective classes from disci
// fixes a circular dep bug due to old factories being in their respective files?
import {
	type APIInteraction,
	InteractionType,
	APIApplicationCommandInteraction,
	ApplicationCommandType,
	APIChatInputApplicationCommandInteraction,
	APIMessageComponentInteraction,
	APIUserApplicationCommandInteraction,
	APIMessageApplicationCommandInteraction,
	APIChannel,
	ChannelType,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";
import {
	type ApplicationCommands,
	ChatInputInteraction,
	MessageCommandInteraction,
	UserCommandInteraction,
} from "../structures/ApplicationCommand";
import { AutoCompleteInteraction } from "../structures/AutoCompleteInteraction";
import { ComponentInteraction } from "../structures/ComponentInteraction";
import type { BaseInteraction } from "../structures";
import {
	BaseChannel,
	DMTextChannel,
	GuildTextChannel,
} from "../structures/primitives/Channel";

/**
 * Factory for all base Interactions
 */
export class InteractionFactory {
	static from(
		handler: InteractionHandler,
		apiInteraction: APIInteraction,
	): BaseInteraction | null {
		switch (apiInteraction.type) {
			case InteractionType.ApplicationCommand:
				return ApplicationCommandFactory.from(handler, apiInteraction);
			case InteractionType.ApplicationCommandAutocomplete:
				return new AutoCompleteInteraction(handler, apiInteraction);
			case InteractionType.MessageComponent:
				return ComponentInteractionFactory.from(handler, apiInteraction);
			default:
				return null;
		}
	}
}

/**
 * Factory for components
 */
export class ComponentInteractionFactory {
	static from(
		handler: InteractionHandler,
		apiComponent: APIMessageComponentInteraction,
	) {
		return new ComponentInteraction(handler, apiComponent);
	}
}

/**
 * Factory for various types of channels
 */
export class ChannelFactory {
	static from(
		handler: InteractionHandler,
		apiChannel: APIChannel,
	): BaseChannel | null {
		switch (apiChannel.type) {
			case ChannelType.GuildText:
				return new GuildTextChannel(handler, apiChannel);
			case ChannelType.DM:
				return new DMTextChannel(handler, apiChannel);
			default:
				return null;
		}
	}
}

/**
 * Factory for Application Commands
 */
export class ApplicationCommandFactory {
	static from(
		handler: InteractionHandler,
		apiAppCommand: APIApplicationCommandInteraction,
	): ApplicationCommands | null {
		switch (apiAppCommand.data.type) {
			case ApplicationCommandType.ChatInput:
				return new ChatInputInteraction(
					handler,
					apiAppCommand as APIChatInputApplicationCommandInteraction,
				);
			case ApplicationCommandType.Message:
				return new MessageCommandInteraction(
					handler,
					apiAppCommand as APIMessageApplicationCommandInteraction,
				);
			case ApplicationCommandType.User:
				return new UserCommandInteraction(
					handler,
					apiAppCommand as APIUserApplicationCommandInteraction,
				);
			default:
				return null;
		}
	}
}
