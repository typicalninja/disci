import type { APIMessage, Snowflake } from "discord-api-types/v10";
import type { InteractionHandler } from "../../InteractionHandler";
import type { IBase } from "../Base";
import { Embed } from "../Embed";
import User from "./User";

export default class Message implements IBase {
    readonly handler!: InteractionHandler;
    /**
     * Id of this message
     */
    id: Snowflake;
    embeds: Embed[];
    content?: string;
    author: User;
    constructor(handler: InteractionHandler, APIdata: APIMessage) {
        Object.defineProperty(this, 'handler', { value: handler });


        this.id = APIdata.id;
        if(APIdata.content) {
            this.content = APIdata.content;
        }
        this.embeds = APIdata.embeds?.map((apiEmbed) => new Embed(apiEmbed)) ?? [];
        this.author = new User(this.handler, APIdata.author)
    }
}