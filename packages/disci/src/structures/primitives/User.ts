import { type APIUser, Routes, type Snowflake } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import { Base } from "../Base";

export class PartialUser extends Base<{ id: Snowflake }> {
	/**
	 * Fetch the user this partial belongs to
	 */
	async fetch(): Promise<User> {
		const user = await this.handler.rest.get<APIUser>(Routes.user(this.raw.id));
		return new User(user, this.handler);
	}
}

export class User extends PartialUser {}
