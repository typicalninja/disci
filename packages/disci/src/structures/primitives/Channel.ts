import type { APIPartialChannel, ChannelType, Snowflake } from "discord-api-types/v10"
import type { InteractionHandler } from "../../InteractionHandler"
import type { IBase } from "../Base"
/**
 * BaseChannel for all other classes
 */
export abstract class BaseChannel implements IBase {
	handler!: InteractionHandler
	/**
	 * Id of this channel
	 */
	id: Snowflake
	/**
	 * Name of this channel
	 */
	name?: string | null
	/**
	 * Type of this channel
	 */
	type: ChannelType
	constructor(handler: InteractionHandler, data: APIPartialChannel) {
		Reflect.defineProperty(this, "handler", { value: handler })
		this.id = data.id
		this.name = data.name
		this.type = data.type
	}
	toString(): string {
		return `<#${this.id}>`
	}
}

export class CatergoryChannel extends BaseChannel {}

export class TextChannel extends BaseChannel {}
