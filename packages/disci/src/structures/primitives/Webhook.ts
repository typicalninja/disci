import type { Snowflake } from 'discord-api-types/globals'
import { APIMessage, APIWebhook, Routes, WebhookType } from 'discord-api-types/v10'
import type { InteractionHandler } from '../../InteractionHandler'
import { DisciTypeError } from '../../utils/errors'
import type { IBase } from '../Base'
import Message from './Message'
import User from './User'

/**
 * Partial Class for accessing Discord Api with minimal data
 */
export class PartialWebhook implements IBase {
  handler!: InteractionHandler
  /**
   * Id of a webhook if accessing data about particular webhook
   */
  readonly id: string
  constructor(handler: InteractionHandler, data: { id: string }) {
    Object.defineProperty(this, 'handler', { value: handler })
    this.id = data.id
  }
  /**
   * Fetch the webhook this id belongs to
   */
  async fetch(): Promise<Webhook> {
    const webhook = await this.handler.api.get<APIWebhook>(Routes.webhook(this.id))
    return new Webhook(this.handler, webhook)
  }
  /* createWebhook({ reason, channelId }: { reason?: string; channelId: string }) {
       // const createdWebhook = this.handler.api.post(Routes.channelWebhooks(channelId))
    }*/
}

export default class Webhook extends PartialWebhook {
  /**
   * The id of the webhook
   */
  override readonly id: Snowflake
  /**
   * The secure token of the webhook
   */
  token: string | null
  /**
   *The type of the webhook
   *
   *See https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
   */
  type: WebhookType

  /**
   * Owner of this webhook
   */
  owner: User | null
  /**
   *  The application that created this webhook
   */
  applicationId: string | null
  constructor(handler: InteractionHandler, data: APIWebhook) {
    super(handler, { id: data.id })

    Object.defineProperty(this, 'handler', { value: handler })

    this.id = data.id
    this.token = data.token ?? null
    this.type = data.type

    this.owner = data.user ? new User(this.handler, data.user) : null

    this.applicationId = data.application_id ?? null
  }

  /**
   * Gets a message that was sent by this webhook.
   */
  async fetchMessage(messageId: string | '@original', { threadId }: { threadId?: string } = {}): Promise<Message> {
    if (!this.token) throw new DisciTypeError(`This webook does not contain a Token`)
    const query: { threadId?: string } = {}
    if (threadId) query.threadId = threadId
    const message = await this.handler.api.get<APIMessage>(Routes.webhookMessage(this.id, this.token, messageId), {
      query,
    })

    return new Message(this.handler, message)
  }
}
