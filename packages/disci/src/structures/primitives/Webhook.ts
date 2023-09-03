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

export class WebhookPartial implements IBase {
	/**
	 * The handler than initiated this class
	 */
	handler: InteractionHandler;
	/**
	 * The id of the webhook
	 */
	id: Snowflake;
	/**
	 * The secure token of the webhook
	 */
	token?: string;
	constructor(
		handler: InteractionHandler,
		data: { id: string; token?: string },
	) {
		// assign the handler
		this.handler = handler;

		// assign base data
		this.id = data.id;
		this.token = data.token;
	}
	/**
	 * Fetch the webhook this id belongs to
	 */
	async fetch(): Promise<Webhook> {
		const webhook = await this.handler.api.get<APIWebhook>(
			// * takes token of undefined as optional parameter
			Routes.webhook(this.id, this.token),
		);
		return new Webhook(this.handler, webhook);
	}
}

export class Webhook extends WebhookPartial {
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
	constructor(handler: InteractionHandler, data: APIWebhook) {
		super(handler, { id: data.id, token: data.token });
		this.type = data.type;

		this.owner = data.user ? new User(this.handler, data.user) : null;
		this.applicationId = data.application_id;
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
				body: resolvedParams.body,
				files: resolvedParams.files,
			},
		);

		return new Message(this.handler, edited);
	}
	/**
	 * Sends a message with this webhook.
	 */
	async send(
		messageData: CreateMessageParams,
		{ threadId }: { threadId?: string } = {},
	) {
		if (!this.token) throw new Error(`This webhook does not contain a Token`);
		const resolvedParams = Message.resolveMessageParams(messageData);
		const createdMessage = await this.handler.api.post<APIMessage>(
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

		return new Message(this.handler, createdMessage);
	}
}
