import {
	Routes,
	ChannelType,
	type Snowflake,
	APIChannel,
	APIDMChannel,
	APIThreadChannel,
	APITextChannel,
	ThreadAutoArchiveDuration,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import { convertSnowflakeToTimeStamp } from "../../utils/helpers";
import { ChannelFactory } from "../../utils/Factories";
import { ChannelFlagsBitField } from "../Bitfield";
import { PartialUser } from "./User";
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
	rawThread: APIThreadChannel;
	/**
	 * ID of the Parent channel of this thread
	 */
	parentId: string | null;
	/**
	 * Parent channel of this thread
	 */
	parent?: GenericPartialChannel;
	/**
	 * ID of the thread creator
	 */
	ownerId: string | null;
	/**
	 * The thread creator as a user
	 */
	owner?: PartialUser;
	/**
	 * Number of messages (not including the initial message or deleted messages) in a thread
	 *
	 */
	messageCount: number;
	/**
	 * Total count of messages ever sent in this thread
	 */
	totalSentMessages: number | null;
	/**
	 * Whether the thread is archived
	 */
	archived: boolean;
	/**
	 * Duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
	 */
	autoArchiveDuration: ThreadAutoArchiveDuration;
	/**
	 * Whether the thread is locked; when a thread is locked, only users with `MANAGE_THREADS` can unarchive it
	 */
	locked: boolean;
	/**
	 * Whether non-moderators can add other non-moderators to the thread; only available on private threads
	 */
	invitable: boolean;
	archivedTimeStamp: string;
	constructor(handler: InteractionHandler, apiThread: APIThreadChannel) {
		super(handler, apiThread);
		this.rawThread = apiThread;

		this.parentId = apiThread.parent_id ?? null;
		this.ownerId = apiThread.owner_id ?? null;
		this.messageCount = apiThread.message_count ?? 0;
		this.totalSentMessages = apiThread.total_message_sent ?? null;

		this.archived = apiThread.thread_metadata?.archived ?? false;
		this.autoArchiveDuration =
			apiThread.thread_metadata?.auto_archive_duration ??
			ThreadAutoArchiveDuration.OneDay;
		this.locked = apiThread.thread_metadata?.locked ?? false;
		this.invitable = apiThread.thread_metadata?.invitable ?? false;
		this.archivedTimeStamp =
			apiThread.thread_metadata?.archive_timestamp ?? new Date().toISOString();

		if (this.parentId)
			this.parent = new GenericPartialChannel(handler, { id: this.parentId });

		if (this.ownerId)
			this.owner = new PartialUser(handler, { id: this.ownerId });
	}

	get archivedAt() {
		return new Date(this.archivedTimeStamp);
	}

	override get createdAt() {
		return new Date(this.rawThread.thread_metadata?.create_timestamp ?? 0);
	}
}
