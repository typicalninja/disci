import {
	APIGuild,
	CDNRoutes,
	GuildFeature,
	GuildIconFormat,
	ImageFormat,
	Routes,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import { PartialUser } from "./User";
import { convertSnowflakeToTimeStamp } from "../../utils/helpers";
import { DiscordImageSize, URLS } from "../../utils/constants";
export class PartialGuild implements IBase {
	handler!: InteractionHandler;
	/**
	 * Id of this guild
	 */
	id: string;
	constructor(handler: InteractionHandler, { id }: { id: string }) {
		Object.defineProperty(this, "handler", { value: handler });
		this.id = id;
	}
	/**
	 * Fetch the guild this partial belongs to
	 * @param opts.witCounts when true, will return approximate member and presence counts for the guild
	 */
	async fetch({ withCounts }: { withCounts?: boolean } = {}) {
		const guild = await this.handler.api.get<APIGuild>(Routes.guild(this.id), {
			query: withCounts
				? {
						with_counts: "true",
				  }
				: {},
		});
		return new Guild(this.handler, guild);
	}
}

/**
 * Represents a discord guild
 */
export default class Guild extends PartialGuild {
	/**
	 * Owner of this Guild as a partial
	 */
	owner: PartialUser;
	/**
	 * Name of this guild
	 */
	name: string;
	/**
	 * Approximate Member count not always present (use Guild.fetch() with "withCounts" enabled)
	 */
	approximateMemberCount?: number;
	/**
	 * Approximate Presence count not always present (use Guild.fetch() with "withCounts" enabled)
	 */
	approximatePresenceCount?: number;
	/**
	 * The description for the guild
	 */
	description: string | null;
	/**
	 * Enabled guild features (animated banner, news, auto moderation, etc).
	 * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-features
	 */
	features: GuildFeature[];
	/**
	 * Icon hash for this guild's Icon
	 * @link https://discord.com/developers/docs/reference#image-formatting
	 */
	iconHash: string | null;
	constructor(handler: InteractionHandler, apiData: APIGuild) {
		super(handler, { id: apiData.id });
		this.owner = new PartialUser(handler, { id: apiData.owner_id });
		this.name = apiData.name;
		this.description = apiData.description;
		this.features = apiData.features;
		this.iconHash = apiData.icon;
		// present only with "with_counts"
		if ("approximate_member_count" in apiData) {
			this.approximateMemberCount = apiData.approximate_member_count;
		}

		if ("approximate_presence_count" in apiData) {
			this.approximatePresenceCount = apiData.approximate_presence_count;
		}
	}
	/**
	 * boolean to indicate if this guild is a verified guild or not
	 */
	get verified() {
		return this.features.includes(GuildFeature.Verified);
	}
	/**
	 * boolean to indicate if this guild is a partnered guild or not
	 */
	get partnered() {
		return this.features.includes(GuildFeature.Partnered);
	}
	/**
	 * TimeStamp of when this guild was created
	 */
	get createdTimestamp(): number {
		return convertSnowflakeToTimeStamp(this.id);
	}
	/**
	 * The time this guild was created as a date
	 */
	get createdAt(): Date {
		return new Date(this.createdTimestamp);
	}
	/**
	 * iconURL gets the current guild icon.
	 * @link https://discord.com/developers/docs/reference#image-formatting
	 */
	iconURL(
		opts: { size?: DiscordImageSize; format?: GuildIconFormat } = { size: 128 },
	) {
		return (
			this.iconHash &&
			`${URLS.DiscordCdn}/${CDNRoutes.guildIcon(
				this.id,
				this.iconHash,
				opts.format ??
					(this.iconHash.startsWith("a_")
						? ImageFormat.JPEG
						: ImageFormat.JPEG),
			)}`
		);
	}
}
