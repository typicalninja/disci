import {
	type APIApplicationCommandInteraction,
	type APIApplicationCommandInteractionDataBasicOption,
	type APIApplicationCommandInteractionDataOption,
	type APIInteraction,
	type APIInteractionResponse,
	type APIMessageComponentInteraction,
	type APIModalSubmitInteraction,
	ApplicationCommandOptionType,
	InteractionResponseType,
	InteractionType,
	type Snowflake,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler.js";
import { InternalEventNames } from "../../utils/constants.js";
import { Base } from "../Base.js";
import { PermissionsBitField } from "../Bitfield.js";
import { PartialGuild } from "../primitives/Guild.js";
import {
	type CreateMessageParams,
	type Message,
	MessagePartial,
} from "../primitives/Message.js";
import { WebhookPartial } from "../primitives/Webhook.js";
import type {
	AutoCompleteInteraction,
	BaseCommandInteraction,
} from "./CommandInteractions.js";
import type { BaseComponentInteraction } from "./ComponentInteraction.js";

export class BaseInteraction<
	T extends APIInteraction = APIInteraction,
> extends Base<T> {
	/**
	 * ID of the interaction
	 */
	readonly id: Snowflake;
	/**
	 * ID of the application this interaction is for
	 */
	readonly applicationId: Snowflake;
	/**
	 * Token of this interaction
	 */
	readonly token: string;
	/**
	 * Type of this interaction
	 */
	type: InteractionType;
	/**
	 * The guild as a partial (if the interaction is from a guild)
	 */
	guild?: PartialGuild;
	/**
	 * Id of the Channel that the interaction was sent from
	 */
	channelId?: string;

	appPermissions?: PermissionsBitField;
	/**
	 * The corresponding webhook for this interaction
	 */
	webhook: WebhookPartial;
	constructor(raw: T, handler: InteractionHandler) {
		super(raw, handler);

		this.id = raw.id;
		this.applicationId = raw.application_id;
		this.token = raw.token;
		this.type = raw.type;

		this.webhook = new WebhookPartial(
			{ id: this.id, token: this.token },
			handler,
		);

		if (raw.guild_id) {
			this.guild = new PartialGuild({ id: raw.guild_id }, handler);
		}

		const permissions = raw.app_permissions;
		if (permissions) {
			this.appPermissions = new PermissionsBitField(BigInt(permissions));
		}
	}

	isAutoCompleteInteraction(): this is AutoCompleteInteraction {
		return this.type === InteractionType.ApplicationCommandAutocomplete;
	}

	isCommandInteraction(): this is BaseCommandInteraction {
		return this.type === InteractionType.ApplicationCommand;
	}

	isComponentInteraction(): this is BaseComponentInteraction {
		return this.type === InteractionType.MessageComponent;
	}

	/**
	 * Type guard to verify if this interaction can be replied to
	 * NOTE: Reply here means replying via a message and does not include replying to Autocomplete interactions
	 * @returns
	 */
	isRepliable(): this is BaseRepliableInteraction {
		return this.isCommandInteraction() || this.isComponentInteraction();
	}
	/**
	 * Respond to this interaction, forwards it to request handler.
	 * Internal raw method
	 * @param response
	 */
	respondRaw(response: APIInteractionResponse) {
		const responseEvent = InternalEventNames.interactionResponse + this.id;
		this.handler.emit(responseEvent, response);
	}
}

export type APIRepliableInteractions =
	| APIApplicationCommandInteraction
	| APIMessageComponentInteraction
	| APIModalSubmitInteraction;

export class BaseRepliableInteraction<
	T extends APIRepliableInteractions = APIRepliableInteractions,
> extends BaseInteraction<T> {
	/**
	 * Reply to this interaction
	 * @param options
	 */
	reply(options: CreateMessageParams & { fetchReply?: false }): Promise<this>;
	reply(options: CreateMessageParams & { fetchReply: true }): Promise<Message>;
	reply(
		options: CreateMessageParams & { fetchReply?: boolean },
	): Promise<Message | this> {
		const resolved = MessagePartial.resolveMessageBody(options);

		this.respondRaw({
			type: InteractionResponseType.ChannelMessageWithSource,
			data: resolved.body,
		});

		if (options.fetchReply) return this.webhook.fetchMessage("@original");
		return Promise.resolve(this);
	}

	/**
	 * Defer replying to this interaction. client sees a loading state
	 * @param options
	 */
	deferReply(options: { fetchReply: false }): Promise<this>;
	deferReply(options: { fetchReply: true }): Promise<Message>;
	deferReply(options: { fetchReply?: boolean } = {}): Promise<Message | this> {
		this.respondRaw({
			type: InteractionResponseType.DeferredChannelMessageWithSource,
		});

		if (options.fetchReply) return this.webhook.fetchMessage("@original");
		return Promise.resolve(this);
	}

	/**
	 * Edit the reply to this message.
	 * @param newMessage
	 * @returns
	 */
	async editReply(newMessage: CreateMessageParams) {
		const msg = await this.webhook.editMessage("@original", newMessage);
		return msg;
	}
}

/**
 * Utility for working with interaction options
 */
export class InteractionOptions {
	private options: APIApplicationCommandInteractionDataOption[];
	private subCommand?: string;
	private group?: string;
	constructor(options: APIApplicationCommandInteractionDataOption[]) {
		this.options = options ?? [];

		if (options[0]?.type === ApplicationCommandOptionType.Subcommand) {
			this.subCommand = options[0].name;
			this.options = options[0].options ?? [];
		} else if (
			options[0]?.type === ApplicationCommandOptionType.SubcommandGroup
		) {
			this.group = options[0].name;
			this.options = options[0].options ?? [];
		}
	}
	/**
	 * Gets the selected subcommand.
	 * @param required If required and Subcommand is found, will throw a error
	 * @returns The name of the selected subcommand, or null if not set and not required.
	 */
	getSubCommand(required: true): string;
	getSubCommand(required = false): string | null {
		if (required && !this.subCommand)
			throw new TypeError("Required option Subcommand Not found");
		return this.subCommand ?? null;
	}
	/**
	 * Gets the selected subcommand group.
	 * @param required If required and Subcommand group is found, will throw a error
	 * @returns The name of the selected subcommand group, or null if not set and not required.
	 */
	getSubCommandGroup(required: true): string;
	getSubCommandGroup(required = false): string | null {
		if (required && !this.group)
			throw new TypeError("Required option SubcommandGroup Not found");
		return this.group ?? null;
	}
	/**
	 * Get a option by name
	 * @param key Key to get
	 * @param required If required and no options found, will throw a error
	 * @returns The option if found, if required is turned of null will be returned if not found
	 */
	get(
		name: string,
		required: true,
	): APIApplicationCommandInteractionDataBasicOption;
	get(
		name: string,
		required?: boolean,
	): APIApplicationCommandInteractionDataBasicOption | null;
	get(name: string, required = false) {
		const opt = this.options.find(
			(o) => o.name === name,
		) as APIApplicationCommandInteractionDataBasicOption;
		if (required && !opt)
			throw new TypeError(`Required option ${name} not found`);
		return opt ?? null;
	}

	private getOption(
		name: string,
		expectedTypes: ApplicationCommandOptionType[],
		required: boolean,
		properties: ["value"] = ["value"],
	) {
		const option = this.get(name, required);

		if (!option) return null;
		if (!expectedTypes.includes(option.type))
			throw new TypeError(
				`Expected Type of option to be ${expectedTypes.join(" ")} Received ${
					option.type
				}`,
			);
		if (
			required &&
			properties.every(
				(prop) => option[prop] == null || typeof option[prop] === "undefined",
			)
		)
			throw new TypeError(`Required atrribute in option ${name} not found`);

		return option;
	}

	// start methods

	/**
	 * Retrive a String option
	 * @param required If required and no String option by name was found, will throw a Error
	 * @returns the value of the string option if found
	 */
	getString(name: string, required: true): string;
	getString(name: string, required?: boolean): string | null;
	getString(name: string, required = false) {
		return (
			this.getOption(name, [ApplicationCommandOptionType.String], required)
				?.value ?? null
		);
	}

	/**
	 * Retrive a Boolean option
	 * @param required If required and no Boolean option by name was found, will throw a Error
	 * @returns the value of the Boolean option if found
	 */
	getBoolean(name: string, required: true): boolean;
	getBoolean(name: string, required?: boolean): boolean | null;
	getBoolean(name: string, required = false) {
		return (
			this.getOption(name, [ApplicationCommandOptionType.Boolean], required)
				?.value ?? null
		);
	}

	/**
	 * Retrive a Number option
	 * @param required If required and no Number option by name was found, will throw a Error
	 * @returns the value of the Number option
	 */
	getNumber(name: string, required: true): number;
	getNumber(name: string, required?: boolean): number | null;
	getNumber(name: string, required = false) {
		return (
			this.getOption(name, [ApplicationCommandOptionType.Number], required)
				?.value ?? null
		);
	}

	/**
	 * Retrive a Integer option
	 * @param required If required and no Integer option by name was found, will throw a Error
	 * @returns the value of the Integer option
	 */
	getInteger(name: string, required: true): number;
	getInteger(name: string, required?: boolean): number | null;
	getInteger(name: string, required = false) {
		return (
			this.getOption(name, [ApplicationCommandOptionType.Integer], required)
				?.value ?? null
		);
	}

	/**
	 * Retrive a User option
	 * @param required If required and no User option by name was found, will throw a Error
	 * @returns the value of the User (userId) option
	 */
	getUserId(name: string, required: true): string;
	getUserId(name: string, required?: boolean): string | null;
	getUserId(name: string, required = false) {
		return (
			this.getOption(name, [ApplicationCommandOptionType.User], required)
				?.value ?? null
		);
	}

	/**
	 * Retrive a Channel option
	 * @param required If required and no Channel option by name was found, will throw a Error
	 * @returns the value of the Channel (channelId) option
	 */
	getChannelId(name: string, required: true): string;
	getChannelId(name: string, required?: boolean): string | null;
	getChannelId(name: string, required = false) {
		return (
			this.getOption(name, [ApplicationCommandOptionType.Channel], required)
				?.value ?? null
		);
	}

	/**
	 * Retrive a Role option
	 * @param required If required and no Role option by name was found, will throw a Error
	 * @returns the value of the Role (roleId) option
	 */
	getRolelId(name: string, required: true): string;
	getRolelId(name: string, required?: boolean): string | null;
	getRolelId(name: string, required = false) {
		return (
			this.getOption(name, [ApplicationCommandOptionType.Role], required)
				?.value ?? null
		);
	}

	/**
	 * Retrive a mentionable option
	 * @param required If required and no mentionable option by name was found, will throw a Error
	 * @returns the value of the mentionable option
	 */
	getMentionable(name: string, required: true): string;
	getMentionable(name: string, required?: boolean): string | null;
	getMentionable(name: string, required = false) {
		return (
			this.getOption(name, [ApplicationCommandOptionType.Mentionable], required)
				?.value ?? null
		);
	}
	/**
	 * Retreive the currently Focused option, for AutoCompleteInteractions
	 * @param full Whether to get the full option object
	 * @returns The value of the option, or the whole option if full is true
	 */
	getFocused(full: true): APIApplicationCommandInteractionDataBasicOption;
	getFocused(
		full: false,
	): APIApplicationCommandInteractionDataBasicOption["value"];
	getFocused(full: boolean) {
		const focusedOption = this.options.find(
			(option) => (option as { focused?: boolean }).focused,
		) as APIApplicationCommandInteractionDataBasicOption;
		if (!focusedOption) throw new Error("No Focused option found");
		return full ? focusedOption : focusedOption.value;
	}
}
