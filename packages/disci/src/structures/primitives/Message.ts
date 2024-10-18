import type {
	APIActionRowComponent,
	APIEmbed,
	APIMessage,
	APIMessageActionRowComponent,
	AllowedMentionsTypes,
	MessageFlags,
	Snowflake,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { RESTFile } from "../../utils/REST";
import { Base } from "../Base";
import { type BitFieldResolvable, MessageFlagsBitField } from "../Bitfield";

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

export class MessagePartial extends Base<{ id: Snowflake }> {
	id: Snowflake;
	constructor(raw: { id: Snowflake }, handler: InteractionHandler) {
		super(raw, handler);
		this.id = raw.id;
	}

	/**
	 * Internal method to resolve data for message Create
	 * @private
	 */
	static resolveMessageBody<T extends Record<string, unknown>>(
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
				throw new TypeError("Expected a string for message content");
			msg.content = params.content;
		}

		// resolve embeds
		if (params.embeds) {
			if (!Array.isArray(params.embeds))
				throw new TypeError("Expected an array for embeds");
			msg.embeds = params.embeds;
		}

		// resolve components
		if (params.components) {
			if (!Array.isArray(params.components))
				throw new TypeError("Expected an array for Component Action rows");
			msg.components = params.components;
		}

		if (params.files) {
			if (!Array.isArray(params.files))
				throw new TypeError("Expected an array for Files");
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

export class Message extends MessagePartial {}
