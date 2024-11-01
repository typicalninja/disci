import {
	type APIMessage,
	type APIWebhook,
	Routes,
	type Snowflake,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler.js";
import { Base } from "../Base.js";
import { type CreateMessageParams, Message } from "./Message.js";

export class WebhookPartial extends Base<Pick<APIWebhook, "id" | "token">> {
	/**
	 * The id of the webhook
	 */
	id: Snowflake;
	/**
	 * The authorization token of the webhook
	 */
	token?: string;
	constructor(
		raw: { id: string; token?: string },
		handler: InteractionHandler,
	) {
		super(raw, handler);

		// assign base data
		this.id = raw.id;
		this.token = raw.token;
	}

	/**
	 * Gets a message that was sent by this webhook.
	 */
	async fetchMessage(
		messageId: string | "@original",
		{ threadId }: { threadId?: string } = {},
	): Promise<Message> {
		if (!this.token) throw new TypeError("Webhook does not have a token");
		const query: { threadId?: string } = {};
		if (threadId) query.threadId = threadId;
		const message = await this.handler.rest.get<APIMessage>(
			Routes.webhookMessage(this.id, this.token, messageId),
			{
				query,
			},
		);

		return new Message(message, this.handler);
	}

	/**
	 * Edit a message sent with this webhook
	 * @param messageId id of the message to edit
	 * @param newMessage new data to edit
	 */
	async editMessage(messageId: string, newMessage: CreateMessageParams) {
		if (!this.token) throw new Error("This webhook does not contain a Token");
		const resolvedParams = Message.resolveMessageBody(newMessage);
		const edited = await this.handler.rest.patch<APIMessage>(
			Routes.webhookMessage(this.id, this.token, messageId),
			{
				body: resolvedParams.body,
				files: resolvedParams.files,
			},
		);

		return new Message(edited, this.handler);
	}

	/**
	 * Sends a message with this webhook.
	 */
	async sendMessage(messageData: CreateMessageParams, threadId?: Snowflake) {
		if (!this.token) throw new Error("This webhook does not contain a Token");
		const resolvedParams = Message.resolveMessageBody(messageData);
		const createdMessage = await this.handler.rest.post<APIMessage>(
			Routes.webhookMessage(this.id, this.token),
			{
				body: resolvedParams.body,
				files: resolvedParams.files,
				query: {
					wait: true,
					thread_id: threadId,
				},
			},
		);

		return new Message(createdMessage, this.handler);
	}

	async deleteMessage(messageId: string | "@original", threadId?: Snowflake) {
		if (!this.token) throw new Error("This webhook does not contain a Token");
		await this.handler.rest.delete<APIMessage>(
			Routes.webhookMessage(this.id, this.token, messageId),
			{
				query: {
					thread_id: threadId,
				},
				auth: false,
			},
		);
	}
}
