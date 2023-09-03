import {
	APIActionRowComponent,
	APIEmbed,
	APIMessage,
	APIMessageActionRowComponent,
	AllowedMentionsTypes,
	MessageFlags,
	Routes,
	Snowflake,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import User from "./User";
import { convertSnowflakeToTimeStamp } from "../../utils/helpers";
import { BitFieldResolvable, MessageFlagsBitField } from "../Bitfield";
import { WebhookPartial } from "./Webhook";
import type { RESTFile } from "../../utils/REST";

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
	content?: string;
	timestamp: number;
	editedTimestamp: number | null;
	/**
	 * The user who created this message (if created by a user)
	 */
	author?: User;
	/**
	 * Webhook that created this message (if created by webhook)
	 */
	webhook?: WebhookPartial;
	channelId: string;
	constructor(handler: InteractionHandler, apiData: APIMessage) {
		Object.defineProperty(this, "handler", { value: handler });

		this.id = apiData.id;
		this.embeds = apiData.embeds ?? [];
		this.timestamp = Date.parse(apiData.timestamp);
		this.editedTimestamp = apiData.edited_timestamp
			? Date.parse(apiData.edited_timestamp)
			: null;
		this.channelId = apiData.channel_id;

		if (apiData.content) {
			this.content = apiData.content;
		}

		// if the message is not from a webhook, its has a author
		if (!apiData.webhook_id) {
			this.author = new User(this.handler, apiData.author);
		} else {
			// from webhook
			this.webhook = new WebhookPartial(handler, { id: apiData.webhook_id });
		}
	}
	/**
	 * TimeStamp of when this message was created
	 */
	get createdTimestamp(): number {
		return convertSnowflakeToTimeStamp(this.id);
	}
	/**
	 * The time this message was sent
	 */
	get createdAt(): Date {
		return new Date(this.createdTimestamp);
	}
	/**
	 * The time this message was sent as per the api
	 */
	get timeStampAt() {
		return new Date(this.timestamp);
	}
	/**
	 * If this message was edited, when
	 */
	get editedAt() {
		return this.editedTimestamp ? new Date(this.editedTimestamp) : undefined;
	}
	/**
	 * Weather this message has been edited
	 */
	get edited() {
		return this.editedTimestamp ? true : false;
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
	 * Internal method to resolve data for message Create
	 * @private
	 */
	static resolveMessageParams(params: CreateMessageParams): {
		body: APIMessage;
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
			body: msg,
			files,
		};
	}
}
