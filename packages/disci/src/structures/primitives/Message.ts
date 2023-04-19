import {
  APIEmbed,
  APIInteractionResponseCallbackData,
  APIMessage,
  AllowedMentionsTypes,
  Routes,
  Snowflake,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import { Embed } from "../Embed";
import User from "./User";
import { convertSnowflakeToTimeStamp } from "../../utils/helpers";
import { DisciTypeError, TypeErrorsMessages } from "../../utils/errors";

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
  embeds?: (APIEmbed | Embed)[];
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
   * Typed as unknown to support builders from packages like @discordjs/builders
   */
  components?: unknown;
}

export default class Message implements IBase {
  readonly handler!: InteractionHandler;
  /**
   * Id of this message
   */
  id: Snowflake;
  embeds: Embed[];
  content?: string;
  author?: User;
  timestamp: number;
  editedTimestamp: number | null;
  webhhok?: {
    id: string;
    username: string;
    discriminator: string;
    avatar: string | undefined;
  };
  channelId: string;
  constructor(handler: InteractionHandler, apiData: APIMessage) {
    Object.defineProperty(this, "handler", { value: handler });

    this.id = apiData.id;
    this.embeds = apiData.embeds?.map((apiEmbed) => new Embed(apiEmbed)) ?? [];
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
    } else if (apiData.author.discriminator === "0000") {
      // from webhook
      console.log("webhook:", apiData.author, "id:", apiData.webhook_id);
      this.webhhok = {
        id: apiData.webhook_id,
        username: apiData.author.username,
        discriminator: apiData.author.discriminator,
        avatar: apiData.author.avatar ? apiData.author.avatar : undefined,
      };
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
      Routes.channelMessage(this.channelId, this.id)
    );

    return this;
  }

  async addReaction(emoji: EmojiResolvable) {
    const e = typeof emoji === "string" ? emoji : `${emoji.name}:${emoji.id}`;
    await this.handler.api.put<void>(
      Routes.channelMessageOwnReaction(this.channelId, this.id, e)
    );
  }
  /**
   * Pins this message
   */
  async pin(): Promise<void> {
    await this.handler.api.put<void>(
      Routes.channelPin(this.channelId, this.id)
    );
  }
  /**
   * Unpin this message
   */
  async unpin(): Promise<void> {
    await this.handler.api.delete<void>(
      Routes.channelPin(this.channelId, this.id)
    );
  }

  static resolveMessageParams(params: CreateMessageParams) {
    const msg = {} as APIInteractionResponseCallbackData;

    // if message content is present
    if (params.content) {
      if (typeof params.content !== "string")
        params.content = new String(params.content).toString();
      msg.content = params.content;
    }

    // resolve embeds
    if (params.embeds) {
      if (!Array.isArray(params.embeds))
        throw new DisciTypeError(
          TypeErrorsMessages.ExpectedParameter(
            `message.embeds`,
            "array",
            typeof params.embeds
          )
        );
      // convert embed builders to apiEmbeds
      msg.embeds = params.embeds.map((embed) => {
        if (embed instanceof Embed) {
          return embed.toJSON();
        }
        return embed;
      });
    }

    // resolve components

    return msg;
  }
}
