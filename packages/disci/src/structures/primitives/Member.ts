import type { APIGuildMember, APIUser } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import User from "./User";

/**
 * Represents a Member of a discord guild
 */
export default class Member implements IBase {
	handler!: InteractionHandler;
	/**
	 * User instance belonging to this member
	 */
	user: User;
	constructor(handler: InteractionHandler, apiMember: APIGuildMember) {
		Reflect.defineProperty(this, "handler", { value: handler });
		this.user = new User(handler, apiMember.user as APIUser);
	}
	toString() {
		return `<@${this.user.id}>`;
	}
}
