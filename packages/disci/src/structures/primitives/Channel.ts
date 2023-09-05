import {
	Routes,
	ChannelType,
	type Snowflake,
	APIChannel,
	APIDMChannel,
	APIThreadChannel,
	APITextChannel,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import { convertSnowflakeToTimeStamp } from "../../utils/helpers";
import { ChannelFactory } from "../../utils/Factories";
import { ChannelFlagsBitField } from "../Bitfield";
/**
 * BaseChannel for all other classes
 */
export class GenericPartialChannel implements IBase {
	handler: InteractionHandler;
	/**
	 * Id of this channel
	 */
	id: Snowflake;
	constructor(handler: InteractionHandler, data: { id: string }) {
		this.handler = handler;
		this.id = data.id;
	}
	toString(): string {
		return `<#${this.id}>`;
	}
	/**
	 * TimeStamp of when this channel was created
	 */
	get createdTimestamp(): number {
		return convertSnowflakeToTimeStamp(this.id);
	}
	/**
	 * The time the channel was created
	 */
	get createdAt(): Date {
		return new Date(this.createdTimestamp);
	}
	/**
	 * Fetch the channel represented by the partial
	 */
	async fetch() {
		const apiChannel = await this.handler.api.get<APIChannel>(
			Routes.channel(this.id),
		);
		return ChannelFactory.from(this.handler, apiChannel);
	}
}

export class BaseChannel extends GenericPartialChannel {
	/**
	 * Type of this channel
	 */
	type: ChannelType;
	/**
	 * Name of this channel
	 */
	name?: string | null;
	flags: ChannelFlagsBitField;
	/**
	 *
	 * @param handler
	 * @param apiChannel
	 */
	constructor(handler: InteractionHandler, apiChannel: APIChannel) {
		super(handler, apiChannel);
		this.type = apiChannel.type;
		this.name = apiChannel.name;
		this.flags = new ChannelFlagsBitField(apiChannel.flags);
	}
	isGuildChannel(): this is GuildTextChannel {
		return "guildId" in this;
	}
	isTextBased(): this is BaseTextChannel {
		return [ChannelType.GuildText, ChannelType.DM].includes(this.type);
	}
	isThreadChannel(): this is ThreadChannel {
		return [
			ChannelType.PrivateThread,
			ChannelType.PublicThread,
			ChannelType.AnnouncementThread,
		].includes(this.type);
	}
}

export class CategoryChannel extends BaseChannel {}

/**
 * Base for all text channels
 */
export class BaseTextChannel extends BaseChannel {
	constructor(
		handler: InteractionHandler,
		apiChannel: APITextChannel | APIDMChannel,
	) {
		super(handler, apiChannel);
	}
}

export class GuildTextChannel extends BaseTextChannel {
	override type = ChannelType.GuildText;
	guildId: string;
	nsfw: boolean;
	constructor(handler: InteractionHandler, apiChannel: APITextChannel) {
		super(handler, apiChannel);
		// guildId (typed as nullable in d api types, however should always be present here)
		this.guildId = apiChannel.guild_id as string;
		this.nsfw = Boolean(apiChannel.nsfw);
	}
}

export class DMTextChannel extends BaseTextChannel {
	override type = ChannelType.DM;
	constructor(handler: InteractionHandler, apiChannel: APIDMChannel) {
		super(handler, apiChannel);
	}
}

export class ThreadChannel extends BaseChannel {
	parentId: string | null;
	parent?: GenericPartialChannel;
	constructor(handler: InteractionHandler, apiThread: APIThreadChannel) {
		super(handler, apiThread);
		this.type = apiThread.type;
		this.id = apiThread.id;
		this.name = apiThread.name;
		this.parentId = apiThread.parent_id ?? null;

		if (this.parentId)
			this.parent = new GenericPartialChannel(handler, { id: this.parentId });
	}
}
