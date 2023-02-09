import { makeURLSearchParams } from "@discordjs/rest";
import type { Snowflake } from "discord-api-types/globals";
import { APIMessage, APIWebhook, Routes, WebhookType } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import { DisciTypeError } from "../../utils/helpers";
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
        const message = await this.handler.rest.get(Routes.webhookMessage(this.id, this.token, messageId), {
            auth: false,
            query: threadId ? makeURLSearchParams({ thread_id: threadId }) : undefined
        });
        
        return message ? new Message(this.handler, message as APIMessage) : null;
    }
}