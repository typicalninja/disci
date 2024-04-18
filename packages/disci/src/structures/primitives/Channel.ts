import { Routes, type APIChannel, type Snowflake } from "discord-api-types/v10";
import { Base } from "../Base";
import type { InteractionHandler } from "../../InteractionHandler";

export class GenericPartialChannel<T extends { id: Snowflake}> extends Base<T> {
    /**
	 * Fetch the channel represented by the partial
	 */
	async fetch() {
		const apiChannel = await this.handler.rest.get<APIChannel>(
			Routes.channel(this.raw.id),
		);
		return new GenericChannel(apiChannel, this.handler);
	}
}


export class GenericChannel extends GenericPartialChannel<APIChannel> {
    constructor(raw: APIChannel, handler: InteractionHandler) {
        super(raw, handler);
    }
}