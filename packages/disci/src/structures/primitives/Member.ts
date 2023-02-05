import type { APIGuildMember } from 'discord-api-types/v10'
import User from './User'

/**
 * Represents a Member of a discord guild
 */
export default class Member {
    /**
     * User instance belonging to this member
     */
    user: User
    constructor(apiMember: APIGuildMember) {
        this.user = new User(apiMember.user!)
    }
    toString() {
        return `<@${this.user.id}>`
    }
}