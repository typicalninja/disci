import { type APIGuild, Routes, type Snowflake, type GuildFeature } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import { Base } from "../Base";

export class PartialGuild<T extends { id: Snowflake } = { id: Snowflake }> extends Base<T> {
	/**
	 * Id of this guild
	 */
	id: string;
	constructor(raw: T, handler: InteractionHandler) {
		super(raw, handler);

		this.id = raw.id;
	}
	/**
	 * Fetch the guild this partial belongs to
	 * @param opts.withCounts when true, will return approximate member and presence counts for the guild
	 */
	async fetch({ withCounts }: { withCounts?: boolean } = {}) {
		const guild = await this.handler.rest.get<APIGuild>(Routes.guild(this.id), {
			query: withCounts
				? {
						with_counts: "true",
				  }
				: {},
		});
		
		return new Guild(guild, this.handler);
	}
}

export class Guild extends PartialGuild<APIGuild> {
    /**
	 * Name of this guild
	 */
	name: string;
    /**
     * Id of the owner of this server
     */
    ownerId: Snowflake;
    /**
	 * Approximate Member count not always present (use Guild.fetch() with "withCounts" enabled)
	 */
	approximateMemberCount?: number;
    /**
	 * Approximate Presence count not always present (use Guild.fetch() with "withCounts" enabled)
	 */
	approximatePresenceCount?: number;
    features: GuildFeature[];
    constructor(raw: APIGuild, handler: InteractionHandler) {
        super(raw, handler);

        this.name = raw.name;
        this.ownerId = raw.owner_id;
        this.approximateMemberCount = raw.approximate_member_count;
        this.approximatePresenceCount = raw.approximate_presence_count;
        this.features = raw.features
    }

}