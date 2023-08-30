import type { Snowflake } from "discord-api-types/globals";
import {
	APIMessage,
	APIWebhook,
	Routes,
	WebhookType,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import Message, { CreateMessageParams } from "./Message";
import User from "./User";

export default class Webhook implements IBase {
	handler: InteractionHandler;
	/**
	 * The id of the webhook
	 */
	readonly id: Snowflake;
	/**
	 * The secure token of the webhook
	 */
	token: string | null;
	/**
	 *The type of the webhook
	 *
	 *See https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
	 */
	type: WebhookType;

	/**
	 * Owner of this webhook
	 */
	owner: User | null;
	/**
	 *  The application that created this werbhook
	 */
	applicationId: string | null;
	constructor(data: APIWebhook, handler: InteractionHandler) {
		this.handler = handler;

		this.id = data.id;
		this.token = data.token ?? null;
		this.type = data.type;

		this.owner = data.user ? new User(this.handler, data.user) : null;
		this.applicationId = data.application_id ?? null;
	}
	/**
	 * Fetch the webhook this id belongs to
	 */
	async fetch(): Promise<Webhook> {
		const webhook = await this.handler.api.get<APIWebhook>(
			// * takes token of undefined as optional parameter
			Routes.webhook(this.id, this.token || undefined),
		);
		return new Webhook(webhook, this.handler);
	}
	/**
	 * Gets a message that was sent by this webhook.
	 */
	async fetchMessage(
		messageId: string | "@original",
		{ threadId }: { threadId?: string } = {},
	): Promise<Message> {
		if (!this.token)
			throw new TypeError(`This webhook does not contain a Token`);
		const query: { threadId?: string } = {};
		if (threadId) query.threadId = threadId;
		const message = await this.handler.api.get<APIMessage>(
			Routes.webhookMessage(this.id, this.token, messageId),
			{
				query,
			},
		);

		return new Message(this.handler, message);
	}
	/**
	 *
	 * @param messageId id of the message to edit
	 * @param newMessage new data to edit
	 */
	async editReply(messageId: string, newMessage: CreateMessageParams) {
		if (!this.token) throw new Error(`This webhook does not contain a Token`);
		const resolvedParams = Message.resolveMessageParams(newMessage);
		const edited = await this.handler.api.patch<APIMessage>(
			Routes.webhookMessage(this.id, this.token, messageId),
			{
				body: resolvedParams,
			},
		);

		return new Message(this.handler, edited);
	}
}
