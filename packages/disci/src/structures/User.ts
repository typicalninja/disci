import type { APIUser, Snowflake } from "discord-api-types/v10";

/**
 * https://discord.com/developers/docs/resources/user#user-object
 */
export default class User {
    /**
     * The user's id
     */
    id: Snowflake;
    /**
     * The username of this user.Not unique
     */
    username: string;
    /**
     * The user's 4-digit discord-tag
     */
    discriminator: string;

    /**
     * Create a new user from discord data
     * @param apiData - data from discord api
     */
    constructor(public apiData: APIUser) {
        this.id = apiData.id;
        this.discriminator = apiData.discriminator;
        this.username = apiData.username;
    }
    /**
     * Tag of this user. [username#discriminator]
     */
    get tag() {
        return `${this.username}#${this.discriminator}`
    }
    
    get [Symbol.toStringTag] () {
        return `<@${this.id}>`
    }
}