import { BaseReplyInteraction } from "./BaseInteraction";
import type { IBase } from "./Base";
import {
	APIMessageComponentInteraction,
	InteractionType,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";

export class ComponentInteraction extends BaseReplyInteraction implements IBase {
	override type = InteractionType.MessageComponent;
	customId: string;
	constructor(
		handler: InteractionHandler,
		apiData: APIMessageComponentInteraction,
	) {
		super(handler, apiData);
		const data = apiData.data;

		this.customId = data.custom_id;
	}
}
