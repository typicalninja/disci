import type { APIUser, Snowflake } from 'discord-api-types/v10'
import type { InteractionHandler } from '../../InteractionHandler'
import type { IBase } from '../Base'

/**
 * Represents a Discord user
 * https://discord.com/developers/docs/resources/user#user-object
 */
export default class User implements IBase {
  /**
   * The user's id
   */
  id: Snowflake
  /**
   * The username of this user.Not unique
   */
  username: string
  /**
   * The user's 4-digit discord-tag
   */
  discriminator: string
  /**
   * The handler than initiated this class
   */
  handler!: InteractionHandler
  /**
   * Create a new user from discord data
   * @param apiData - data from discord api
   */
  constructor(handler: InteractionHandler, public apiData: APIUser) {
    // assign the handler
    Object.defineProperty(this, 'handler', { value: handler })

    this.id = apiData.id
    this.discriminator = apiData.discriminator
    this.username = apiData.username
  }
  /**
   * Tag of this user. [username#discriminator]
   */
  get tag() {
    return `${this.username}#${this.discriminator}`
  }

  toString() {
    return `<@${this.id}>`
  }
}
