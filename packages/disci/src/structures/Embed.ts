import type { APIEmbed } from "discord-api-types/v10";
import { DisciTypeError } from "../utils/errors";

/**
 * Interface for a Embed footer
 */
export interface IEmbedFooter {
    /**
     * Text of the footer
     */
    text: string;
    iconURL: string;
}

/**
 * Interface for a Embed field
 */
export interface IEmbedField {
    /**
     * Name/title of this field
     */
    name: string;
    /**
     * Value of the Field
     */
    value: string;
    inline?: boolean;
}

/**
 * Utility to create a Embed and manipulate already existing embeds
 */
export class Embed {
    constructor(public baseEmbed: APIEmbed = {}) {
       
    }
    /**
     * Add a field to the Embed
     * @param name - name of the field
     * @param value 
     * @param inline 
     * @returns 
     */
    addField(name: string, value: string, inline?: boolean): Embed {
        if(!this.baseEmbed.fields) this.baseEmbed.fields = []
        if(this.baseEmbed.fields.length > 25) throw new DisciTypeError(`Total EmbedFields length must be below or equal to 25.`)
        this.baseEmbed.fields.push({
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
        if((fields.length + (this.baseEmbed.fields?.length || 0)) > 25) throw new DisciTypeError(`Total EmbedFields length must be below or equal to 25. Received ${fields.length} Fields with ${this.baseEmbed.fields?.length || 0} already Added`)
        for(const field of fields) {
            this.addField(field.name, field.value, field.inline)
        }
        return this;
    }
    /**
     * Removes one or more fields from the embed
     * @param name 
     * @returns 
     */
    removeFields(name: string | string[]): Embed {
        const removed: string[] = []
        if(!Array.isArray(name)) removed.push(name)
        else removed.concat(name)

        this.baseEmbed.fields = this.baseEmbed.fields?.filter((e) => !removed.includes(e.name));
        return this;
    }
    /**
     * Set a Description for this embed
     * @param description - Description to set, null to remove
     * @returns 
     */
    setDescription(description: string | null): Embed {
        if(typeof description !== 'string' && description !== null) throw new DisciTypeError(`Description must be a string. Received ${typeof description}`);
        this.baseEmbed.description = description ?? undefined;
        return this;
    }
    setFooter(footerOpts: Partial<IEmbedFooter>) {
        if(!footerOpts.text || typeof footerOpts.text !== 'string') throw new DisciTypeError(`Footer Text must be a string.`)
        this.baseEmbed.footer = {
            text: footerOpts.text,
            icon_url: footerOpts.iconURL
        }
    }
    /**
     * Convert a Embed into APIEmbed
     */
    toJSON(): APIEmbed {
        return {
            ...this.baseEmbed
        };
    }
}