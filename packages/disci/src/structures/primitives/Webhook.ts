import type { Snowflake } from "discord-api-types/globals";
import { APIMessage, APIWebhook, Routes, WebhookType } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import { DisciTypeError } from "../../utils/errors";
import type { IBase } from "../Base";
import Message from "./Message";
import User from "./User";

export default class Webhook implements IBase {
    handler!: InteractionHandler;
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
     *  The application that created this webhook
     */
    applicationId: string | null;
    constructor(handler: InteractionHandler, data: APIWebhook) {
        Object.defineProperty(this, 'handler', { value: handler })

        this.id = data.id;
        this.token = data.token ?? null;
        this.type = data.type;

        this.owner = data.user ? new User(this.handler, data.user) : null

        this.applicationId = data.application_id ?? null
    }

    /**
     * Gets a message that was sent by this webhook.
     */
    async fetchMessage(messageId: string | '@original', { threadId }: { threadId?: string } = {}) {
        if(!this.token) throw new DisciTypeError(`This webook does not contain a Token`)
        let query: { threadId?: string } = {};
        if(threadId) query.threadId = threadId;
        const message = await this.handler.api.get<APIMessage>(Routes.webhookMessage(this.id, this.token, messageId), {
            query
        });
        
        return message ? new Message(this.handler, message) : null;
    }
}