import type { APIEmbed } from "discord-api-types/v10";




export class Embed {
    constructor(public baseEmbed: APIEmbed) {
       
    }
    /**
     * Add a field to the Embed
     * @param name 
     * @param value 
     * @param inline 
     * @returns 
     */
    addField(name: string, value: string, inline?: boolean): Embed {
        if(!this.baseEmbed.fields) this.baseEmbed.fields = []
        this.baseEmbed.fields?.push({
            name,
            value,
            inline
        })
        return this;
    }
    /**
     * Add several fields to the Embed
     * @param fields 
     * @returns 
     */
    addFields(fields: { name: string, value: string, inline?: boolean }[]): Embed {
        for(const field of fields) {
            this.addField(field.name, field.value, field.inline)
        }
        return this;
    }
}