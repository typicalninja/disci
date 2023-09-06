import {
	APIActionRowComponent,
	APIEmbed,
	APIMessage,
	APIMessageActionRowComponent,
	APIThreadChannel,
	AllowedMentionsTypes,
	MessageFlags,
	Routes,
	Snowflake,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import User from "./User";
import { BitFieldResolvable, MessageFlagsBitField } from "../Bitfield";
import { WebhookPartial } from "./Webhook";
import type { RESTFile } from "../../utils/REST";
import { GenericPartialChannel, ThreadChannel } from "./Channel";

export type EmojiResolvable = string | { name: string; id: string };

/**
 * @link https://discord.com/developers/docs/resources/channel#allowed-mentions-object
 */
export interface AllowedMentions {
	parse?: AllowedMentionsTypes[];
	repliedUser?: boolean;
	roles?: Snowflake[];
	users?: Snowflake[];
}

/**
 * @link https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure
 * channel_id is optional when creating a reply, but will always be present when receiving an event/response that includes this data model.
 */
export interface MessageReference {
	messageId: Snowflake;
	channelId?: Snowflake;
	guildId?: Snowflake;
	failIfNotExists?: boolean;
}

/**
 * @link https://discord.com/developers/docs/resources/channel#create-message-jsonform-params
 * Params used for sending of Messages
 */
export interface CreateMessageParams {
	/**
	 * Message contents (up to 2000 characters)
	 */
	content?: string;
	/**
	 * Array of Embeds (max 10)
	 */
	embeds?: APIEmbed[];
	/**
	 *  Allowed mentions for the message
	 */
	allowedMentions?: AllowedMentions;
	/**
	 * Include to make your message a reply
	 */
	messageReference?: MessageReference;
	/**
	 * The components belonging to this message
	 */
	components?: APIActionRowComponent<APIMessageActionRowComponent>[];
	files?: RESTFile[];
	/**
	 * Message flags to be used
	 */
	flags?: MessageFlagsBitField | BitFieldResolvable;
}

export default class Message implements IBase {
	readonly handler!: InteractionHandler;
	/**
	 * Id of this message
	 */
	id: Snowflake;
	/**
	 * Embeds for this message
	 */
	embeds: APIEmbed[];
	/**
	 * Content of this message
	 */
	content?: string;
	/**
	 * Timestamp of the message was sent at
	 */
	createdTimestamp: number;
	/**
	 * TImestamp of when this message was last edited (if applicable)
	 */
	editedTimestamp: number | null;
	/**
	 * The user who created this message (if created by a user)
	 */
	author?: User;
	/**
	 * Webhook that created this message (if created by webhook)
	 */
	webhook?: WebhookPartial;
	/**
	 * Channel this message was created in
	 */
	channelId: string;
	channel: GenericPartialChannel;
	/**
	 * Flags for this message
	 */
	flags: MessageFlagsBitField;
	constructor(handler: InteractionHandler, apiData: APIMessage) {
		Object.defineProperty(this, "handler", { value: handler });

		this.id = apiData.id;
		this.embeds = apiData.embeds ?? [];
		// timestamps
		this.createdTimestamp = Date.parse(apiData.timestamp);
		this.editedTimestamp = apiData.edited_timestamp
			? Date.parse(apiData.edited_timestamp)
			: null;

		this.channelId = apiData.channel_id;
		this.channel = new GenericPartialChannel(this.handler, {
			id: this.channelId,
		});

		if ("flags" in apiData) {
			this.flags = new MessageFlagsBitField(apiData.flags);
		} else this.flags = new MessageFlagsBitField();

		if ("content" in apiData) {
			this.content = apiData.content;
		}

		if (apiData.webhook_id) {
			// from webhook
			this.webhook = new WebhookPartial(handler, { id: apiData.webhook_id });
		} else {
			// if the message is not from a webhook, its has a author
			this.author = new User(this.handler, apiData.author);
		}
	}
	/**
	 * The time the message was sent at
	 */
	get createdAt(): Date {
		return new Date(this.createdTimestamp);
	}
	/**
	 * The time the message was last edited at (if applicable)
	 */
	get editedAt() {
		return this.editedTimestamp ? new Date(this.editedTimestamp) : undefined;
	}
	/**
	 * Whether this message has a thread associated with it
	 */
	get hasThread() {
		return this.flags.has(MessageFlags.HasThread);
	}

	/**
	 * Delete this Message
	 */
	async delete() {
		await this.handler.api.delete(
			Routes.channelMessage(this.channelId, this.id),
		);

		return this;
	}

	async addReaction(emoji: EmojiResolvable) {
		const e = typeof emoji === "string" ? emoji : `${emoji.name}:${emoji.id}`;
		await this.handler.api.put<void>(
			Routes.channelMessageOwnReaction(this.channelId, this.id, e),
		);
	}
	/**
	 * Pins this message
	 */
	async pin(): Promise<void> {
		await this.handler.api.put<void>(
			Routes.channelPin(this.channelId, this.id),
		);
	}
	/**
	 * Unpin this message
	 */
	async unpin(): Promise<void> {
		await this.handler.api.delete<void>(
			Routes.channelPin(this.channelId, this.id),
		);
	}

	/**
	 * Creates a new thread from an existing message.
	 * @param threadOptions Options for this thread
	 * @returns
	 */
	async startThread(threadOptions: {
		name: string;
		rateLimitPerUser?: number;
		autoArchiveDuration?: number;
	}) {
		if (this.hasThread)
			throw new Error(`This message already contains a thread`);
		if (!this.channel)
			throw new Error(`Channel for message could not be resolved`);

		const data = await this.handler.api.post<APIThreadChannel>(
			Routes.threads(this.channel.id, this.id),
			{
				body: {
					name: threadOptions.name,
					auto_archive_duration: threadOptions.autoArchiveDuration,
					rate_limit_per_user: threadOptions.rateLimitPerUser,
				},
			},
		);

		return new ThreadChannel(this.handler, data);
	}

	/**
	 * Internal method to resolve data for message Create
	 * @private
	 */
	static resolveMessageParams<T extends Record<string, unknown>>(
		params: CreateMessageParams,
	): {
		body: T;
		files: RESTFile[];
	} {
		const msg = {} as APIMessage;
		const files: RESTFile[] = [];
		// if message content is present
		if (params.content) {
			if (typeof params.content !== "string")
				throw new TypeError(`Expected a string for message content`);
			msg.content = params.content;
		}

		// resolve embeds
		if (params.embeds) {
			if (!Array.isArray(params.embeds))
				throw new TypeError(`Expected an array for embeds`);
			msg.embeds = params.embeds;
		}

		// resolve components
		if (params.components) {
			if (!Array.isArray(params.components))
				throw new TypeError(`Expected an array for Component Action rows`);
			msg.components = params.components;
		}

		if (params.files) {
			if (!Array.isArray(params.files))
				throw new TypeError(`Expected an array for Files`);
			files.push(...params.files);
		}

		if (params.flags) {
			const bitfield = MessageFlagsBitField.resolve(params.flags);
			msg.flags = bitfield.toString() as unknown as MessageFlags;
		}

		return {
			body: msg as unknown as T,
			files,
		};
	}
}
