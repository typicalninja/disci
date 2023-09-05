import type { InteractionHandler } from "../InteractionHandler";
import type { IBase } from "./Base";
import { PermissionsBitField } from "../structures/Bitfield";

import type { Snowflake } from "discord-api-types/globals";
import {
	APIApplicationCommandInteractionDataBasicOption,
	APIApplicationCommandInteractionDataOption,
	APIInteraction,
	APIInteractionResponse,
	APIInteractionResponseChannelMessageWithSource,
	//APIMessageComponent,
	ApplicationCommandOptionType,
	InteractionResponseType,
	InteractionType,
	LocaleString,
	MessageFlags,
} from "discord-api-types/v10";
import { convertSnowflakeToTimeStamp } from "../utils/helpers";

import User from "./primitives/User";
import Member from "./primitives/Member";

// Types for different interaction context's
import type { ApplicationCommand } from "./ApplicationCommand";
import type { AutoCompleteInteraction } from "./AutoCompleteInteraction";
import { Webhook } from "./primitives/Webhook";
import type { ComponentInteraction } from "./ComponentInteraction";
import { CreateMessageParams, default as Message } from "./primitives/Message";
import { PartialGuild } from "./primitives/Guild";
import { GenericPartialChannel } from "./primitives/Channel";

type CallbackFunction = (data: APIInteractionResponse) => void;

/**
 * Represents an basic interaction.
 */
export abstract class BaseInteraction implements IBase {
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
	 * Id of the Guild that the interaction was sent from
	 */
	guildId?: string;
	/**
	 * Guild the interaction was sent from as a partial guild
	 */
	guild?: PartialGuild;
	/**
	 * Id of the Channel that the interaction was sent from
	 */
	channelId?: string;
	/**
	 * Channel the interactions was send from
	 */
	channel?: GenericPartialChannel;
	/**
	 * Readonly Property, as per the Discord docs always 1
	 * https://discord.com/developers/docs/interactions/receiving-and-responding
	 */
	readonly version: 1;
	appPermissions?: PermissionsBitField;
	private callback!: CallbackFunction;
	/**
	 * If this interaction has Already been responded to
	 */
	responded: boolean;
	/**
	 * The user who invoked this interaction
	 */
	user?: User;

	/**
	 * Guild member who invoked this interaction (if any)
	 */
	member?: Member;
	/**
	 * Handler that initiated this class
	 */
	readonly handler!: InteractionHandler;
	/**
	 * The preferred locale from the guild this interaction was sent in
	 */
	guildLocale: LocaleString | null;
	/**
	 * Create a new received interaction
	 * @param handler
	 * @param RawInteractionData
	 */
	constructor(
		handler: InteractionHandler,
		readonly RawInteractionData: APIInteraction,
	) {
		Reflect.defineProperty(this, "handler", { value: handler });
		Reflect.defineProperty(this, "rawData", { value: RawInteractionData });
		this.id = RawInteractionData.id;
		this.applicationId = RawInteractionData.application_id;
		this.token = RawInteractionData.token;
		this.type = RawInteractionData.type;
		this.version = RawInteractionData.version;
		this.guildLocale = RawInteractionData.guild_locale ?? null;

		if (RawInteractionData.guild_id && RawInteractionData.member) {
			// from a guild
			this.guildId = RawInteractionData.guild_id;
			this.guild = new PartialGuild(this.handler, { id: this.guildId });
			this.member = new Member(this.handler, RawInteractionData.member);
			Reflect.defineProperty(this, "user", {
				get: () => {
					return this.member?.user;
				},
			});
		} else if (RawInteractionData.user) {
			// not from a guild
			this.user = new User(this.handler, RawInteractionData.user);
		}

		if (RawInteractionData.channel_id) {
			this.channelId = RawInteractionData.channel_id;
			this.channel = new GenericPartialChannel(this.handler, {
				id: this.channelId,
			});
		}

		const permissions = RawInteractionData.app_permissions;
		if (permissions) {
			this.appPermissions = new PermissionsBitField(BigInt(permissions));
		}

		// properties to keep track of this Interaction
		this.responded = false;
	}
	/**
	 * Internal function. define the function used to respond the interaction
	 * @param fn
	 * @private
	 * @ignore
	 */
	useCallback(fn: CallbackFunction) {
		Reflect.defineProperty(this, "callback", {
			value: fn,
			enumerable: false,
		});
		return this;
	}

	/**
	 * Timestamp of this interaction
	 */
	get createdTimestamp() {
		return convertSnowflakeToTimeStamp(this.id);
	}
	/**
	 * Created time as a date
	 */
	get createdAt(): Date {
		return new Date(this.createdTimestamp);
	}
	/**
	 * Indicates whether this interaction is a {@link ApplicationCommand}
	 */
	isCommand(): this is ApplicationCommand {
		return this.type === InteractionType.ApplicationCommand;
	}
	/**
	 * Indicates whether this interaction is a {@link AutoCompleteInteraction}
	 */
	isAutoComplete(): this is AutoCompleteInteraction {
		return this.type === InteractionType.ApplicationCommandAutocomplete;
	}
	/**
	 * Indicates whether this interaction is a {@link ComponentInteraction}
	 */
	isComponent(): this is ComponentInteraction {
		return this.type === InteractionType.MessageComponent;
	}
	/**
	 * Indicates whether this interaction can be replied to (i.e {@link BaseReplyInteraction}).
	 */
	isRepliable(): this is BaseReplyInteraction {
		return (
			!this.responded &&
			this.type != InteractionType.ApplicationCommandAutocomplete
		);
	}
	/**
	 * Respond to this interaction, Raw method
	 * @returns
	 * @private
	 * @ignore
	 */
	_respond(response: APIInteractionResponse) {
		if (this.responded)
			throw new Error(`This interaction has already been responded to.`);
		this.callback(response);
		this.responded = true;
		return this;
	}
}

/**
 * Base for all repliable to interactions
 */
export class BaseReplyInteraction extends BaseInteraction {
	/**
	 * Defers the reply to the interaction.
	 * @param options options for defer reply
	 * @param options.fetchReply Whether to fetch the reply that was sent
	 * @param options.ephemeral send a ephemeral defer
	 */
	deferReply(options?: {
		fetchReply?: true;
		ephemeral?: boolean;
	}): Promise<Message>;
	deferReply({ fetchReply = false, ephemeral = false } = {}):
		| Promise<this>
		| Promise<Message> {
		if (this.responded)
			throw new Error(
				`This Interaction already timed out or has been replied to`,
			);
		// respond to this interaction
		this._respond({
			type: InteractionResponseType.DeferredChannelMessageWithSource,
			data: {
				flags: ephemeral ? MessageFlags.Ephemeral : undefined,
			},
		});

		if (fetchReply) {
			return this.fetchReply();
		}
		return Promise.resolve(this);
	}
	/**
	 * Fetch the reply that was sent for this interaction
	 * @returns Message
	 */
	fetchReply() {
		if (!this.responded)
			throw new Error(`Please Respond to this interaction before fetching it.`);
		return Webhook.prototype.fetchMessage.call(
			{
				id: this.applicationId,
				token: this.token,
				handler: this.handler,
			},
			"@original",
		);
	}
	/**
	 * reply to this interaction
	 * @param opts
	 * @returns this interaction instance or the message instance after responding if fetchReply is true
	 */
	reply(
		opts: Omit<CreateMessageParams, "files"> & { fetchReply?: false },
	): Promise<this>;
	reply(
		opts: Omit<CreateMessageParams, "files"> & { fetchReply: true },
	): Promise<Message>;
	reply(
		opts: Omit<CreateMessageParams, "files"> & { fetchReply?: boolean },
	): Promise<this> | Promise<Message> {
		if (this.responded)
			throw new Error(
				`This interaction either timed out or already been responded to`,
			);
		const APIResponse = {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {},
		} as APIInteractionResponseChannelMessageWithSource;

		if (opts) {
			APIResponse.data = Message.resolveMessageParams(opts).body;
		} else throw new TypeError(`CreateMessage Options are required`);

		this._respond(APIResponse);
		if (opts.fetchReply === true) return this.fetchReply();
		return Promise.resolve(this);
	}
	/**
	 * Edit previously sent responses
	 */
	editReply(message: CreateMessageParams) {
		if (!this.responded) throw new Error(`Interaction was not responded to`);
		return Webhook.prototype.editReply.call(
			{
				id: this.applicationId,
				token: this.token,
				handler: this.handler,
			},
			"@original",
			message,
		);
	}
}

// inspired from discord.js & biscuit
/**
 * Utility for working with interaction options
 */
export class InteractionOptions {
	private _options: APIApplicationCommandInteractionDataOption[];
	private subCommand?: string;
	private group?: string;
	constructor(options: APIApplicationCommandInteractionDataOption[]) {
		this._options = options ?? [];
		// from discord.js [thanks :) ]
		if (options[0]?.type === ApplicationCommandOptionType.Subcommand) {
			this.subCommand = options[0].name;
			this._options = options[0].options ?? [];
		}
		if (options[0]?.type === ApplicationCommandOptionType.SubcommandGroup) {
			this.group = options[0].name;
			this._options = options[0].options ?? [];
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
			throw new TypeError(`Subcommand Not found`);
		return this.subCommand ?? null;
	}
	/**
	 * Gets the selected subcommand group.
	 * @param required If required and Subcommand group is found, will throw a error
	 * @returns The name of the selected subcommand group, or null if not set and not required.
	 */
	getSubCommandGroup(required: true): string;
	getSubCommandGroup(required = false): string | null {
		if (required && !this.group) throw new TypeError(`Subcommand Not found`);
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
		const opt = this._options.find(
			(o) => o.name === name,
		) as APIApplicationCommandInteractionDataBasicOption;
		if (required && !opt)
			throw new TypeError(`Missing interaction option: ${name}`);
		return opt ?? null;
	}

	private _getType(
		name: string,
		expectedTypes: ApplicationCommandOptionType[],
		properties: ["value"],
		required: boolean,
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
				(prop) => option[prop] == null || typeof option[prop] == "undefined",
			)
		)
			throw new TypeError(`Expected Value to be available`);

		return option;
	}

	// start methods

	/**
	 * Retrive a String option
	 * @param required If required and no String option by name was found, will throw a Error
	 * @returns the value of the string option
	 */
	getString(name: string, required: true): string;
	getString(name: string, required?: boolean): string | null;
	getString(name: string, required = false) {
		return (
			this._getType(
				name,
				[ApplicationCommandOptionType.String],
				["value"],
				required,
			)?.value ?? null
		);
	}

	/**
	 * Retrive a Boolean option
	 * @param required If required and no Boolean option by name was found, will throw a Error
	 * @returns the value of the Boolean option
	 */
	getBoolean(name: string, required: true): boolean;
	getBoolean(name: string, required?: boolean): boolean | null;
	getBoolean(name: string, required = false) {
		return (
			this._getType(
				name,
				[ApplicationCommandOptionType.Boolean],
				["value"],
				required,
			)?.value ?? null
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
			this._getType(
				name,
				[ApplicationCommandOptionType.Number],
				["value"],
				required,
			)?.value ?? null
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
			this._getType(
				name,
				[ApplicationCommandOptionType.Integer],
				["value"],
				required,
			)?.value ?? null
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
			this._getType(
				name,
				[ApplicationCommandOptionType.User],
				["value"],
				required,
			)?.value ?? null
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
			this._getType(
				name,
				[ApplicationCommandOptionType.Channel],
				["value"],
				required,
			)?.value ?? null
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
			this._getType(
				name,
				[ApplicationCommandOptionType.Role],
				["value"],
				required,
			)?.value ?? null
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
			this._getType(
				name,
				[ApplicationCommandOptionType.Mentionable],
				["value"],
				required,
			)?.value ?? null
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
		const focusedOption = this._options.find(
			(option) => (option as { focused?: boolean }).focused,
		) as APIApplicationCommandInteractionDataBasicOption;
		if (!focusedOption) throw new Error(`No Focused option found`);
		return full ? focusedOption : focusedOption.value;
	}
}
