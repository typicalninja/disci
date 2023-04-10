import { APIMessage, Routes, Snowflake } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import { Embed } from "../Embed";
import User from "./User";
import { convertSnowflakeToTimeStamp } from "../../utils/helpers";

export type EmojiResolvable = string | { name: string, id: string }

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
    webhhok?: { id: string; username: string; discriminator: string; avatar: string | undefined; };
    channelId: string;
    constructor(handler: InteractionHandler, apiData: APIMessage) {
        Object.defineProperty(this, 'handler', { value: handler });

        this.id = apiData.id;
        this.embeds = apiData.embeds?.map((apiEmbed) => new Embed(apiEmbed)) ?? [];
        this.timestamp = Date.parse(apiData.timestamp)
        this.editedTimestamp = apiData.edited_timestamp ? Date.parse(apiData.edited_timestamp) : null;
        this.channelId = apiData.channel_id;

        if(apiData.content) {
            this.content = apiData.content;
        }

        // if the message is not from a webhook, its has a author
        if(!apiData.webhook_id) {
            this.author = new User(this.handler, apiData.author)
        }
        else if(apiData.author.discriminator === '0000') {
            // from webhook
           this.webhhok = {
                id: apiData.webhook_id!,
				username: apiData.author.username,
				discriminator: apiData.author.discriminator,
				avatar: apiData.author.avatar ? apiData.author.avatar : undefined,
           }
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
        return new Date(this.timestamp)
    }
    /**
     * If this message was edited, when
     */
    get editedAt() {
        return this.editedTimestamp
        ? new Date(this.editedTimestamp)
        : undefined;
    }
    /**
     * Weather this message has been edited
     */
    get edited() {
        return this.editedTimestamp ? true : false
    }

    /**
     * Delete this Message
     */
    async delete() {
        await this.handler.api.delete(Routes.channelMessage(this.channelId, this.id));

        return this;
    }

    async addReaction(emoji: EmojiResolvable) {
        const e = typeof emoji === 'string' ? emoji : `${emoji.name}:${emoji.id}`;
        await this.handler.api.put<void>(Routes.channelMessageOwnReaction(this.channelId, this.id, e))
    }
}