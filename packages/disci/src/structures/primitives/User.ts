import { type APIUser, type Snowflake, Routes } from 'discord-api-types/v10'
import type { InteractionHandler } from '../../InteractionHandler'
import type { IBase } from '../Base'

/**
 * Partial Class for accessing Discord Api with minimal data
 */
export class PartialUser implements IBase {
  /**
   * The handler than initiated this class
   */
  handler!: InteractionHandler
  /**
   * The user's id
   */
  id: Snowflake
  constructor(handler: InteractionHandler, data: { id: string }) {
    // assign the handler
    Object.defineProperty(this, 'handler', { value: handler })
    this.id = data.id
  }
  /**
   * Fetch the user this partial belongs to
   */
  async fetch(): Promise<User> {
    const user = await this.handler.api.get<APIUser>(Routes.user(this.id))
    return new User(this.handler, user)
  }
  toString() {
    return `<@${this.id}>`
  }
}

/**
 * Represents a Discord user
 * https://discord.com/developers/docs/resources/user#user-object
 */
export default class User extends PartialUser {
  /**
   * The username of this user.Not unique
   */
  username: string
  /**
   * The user's 4-digit discord-tag
   */
  discriminator: string
  /**
   * Create a new user from discord data
   * @param apiData - data from discord api
   */
  constructor(handler: InteractionHandler, public apiData: APIUser) {
    super(handler, { id: apiData.id })
    this.discriminator = apiData.discriminator
    this.username = apiData.username
  }
  /**
   * Tag of this user. [username#discriminator]
   */
  get tag() {
    return `${this.username}#${this.discriminator}`
  }
}
