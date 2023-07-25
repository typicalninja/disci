import type { APIEmbed, APIEmbedField } from "discord-api-types/v10";

/**
 * Interface for a Embed footer (normalized)
 */
export interface IEmbedFooter {
	/**
	 * Text of the footer
	 */
	text: string;
	iconURL?: string;
}

/**
 * Interface for a Embed author (normalized)
 */
export interface IEmbedAuthor {
	name: string;
	iconUrl?: string;
	url?: string;
}

/**
 * Represents a ApiEmbed
 * Used for creating new embeds and representing received embeds
 */
export class Embed {
	/**
	 * Raw api representation of this embed
	 */
	public embed: APIEmbed;
	/**
	 * Creates a new embed from API data.
	 *
	 * @param data The API data to create this embed with
	 */
	constructor(e: APIEmbed = {}) {
		this.embed = e;
		if (e.timestamp) this.embed.timestamp = new Date(e.timestamp).toISOString();
	}
	/**
	 * Set the timestamp in this embed.
	 * @param timestamp timestamp date to set
	 *
	 * @example
	 * ```ts
	 * const embed = new Embed()
	 * embed.setTimestamp(Date.now())
	 * ```
	 */
	setTimestamp(timestamp?: Date | number | string): this {
		this.embed.timestamp = timestamp
			? new Date(timestamp).toISOString()
			: undefined;
		return this;
	}
	/**
	 *
	 * @param title
	 * @returns
	 */
	setTitle(title?: string) {
		this.embed.title = title ?? undefined;
		return this;
	}
	/**
	 * Set the url of this embed
	 *
	 * @param url The url to use
	 */
	setUrl(url?: string) {
		this.embed.url = url ?? undefined;

		return this;
	}
	/**
	 * Sets the image of this embed.
	 * @param url The image url to set to
	 */
	setImage(url?: string) {
		this.embed.image = url ? { url } : undefined;
		return this;
	}
	/**
	 * Sets the thumbnail of this embed.
	 * @param url
	 */
	setThumbnail(url?: string): this {
		this.embed.thumbnail = url ? { url } : undefined;
		return this;
	}
	/**
	 * Sets the author of this embed
	 */
	setAuthor(authorOpts?: IEmbedAuthor) {
		if (!authorOpts) {
			this.embed.author = undefined;
			return this;
		}

		this.embed.author = {
			url: authorOpts.url,
			icon_url: authorOpts.iconUrl,
			name: authorOpts.name,
		};

		return this;
	}
	/**
	 * Add one or more fields to the embed
	 * @param fields new fields to add
	 * @returns
	 */
	addFields(fields: APIEmbedField[]): Embed {
		// validate fields
		if (!Array.isArray(fields))
			throw new TypeError(
				`AddFields Expected a Field Array received ${typeof fields}`,
			);
		if (!this.embed.fields) this.embed.fields = [];
		for (const field of fields) {
			if (typeof field.name !== "string" || field.name === "")
				throw new TypeError(
					`Embed field.name cannot be empty and must be a string received ${typeof field.name}`,
				);
			if (typeof field.value !== "string" || field.value === "")
				throw new TypeError(
					`Embed field.value cannot be empty and must be a string received ${typeof field.value}`,
				);

			this.embed.fields.push({
				name: field.name,
				value: field.value,
				inline: field.inline,
			});
		}
		return this;
	}
	/**
	 * Set the fields of this embed directly, overwriting existing records
	 * @param fields new fields to set
	 * @example
	 * ```ts
	 * const embed = new Embed()
	 * embed.setFields([
	 * 	{
	 * 	value: 'my field value',
	 * 	name: 'my field name'
	 * 	}
	 * ])
	 * ```
	 *
	 * @example
	 * ```ts
	 * const embed = new Embed()
	 * // remove all fields
	 * embed.setFields([])
	 * ```
	 */
	setFields(fields: APIEmbedField[]) {
		if (!Array.isArray(fields))
			throw new TypeError(
				`SetFields Expected a Field Array received ${typeof fields}`,
			);

		this.embed.fields = fields;

		return this;
	}
	/**
	 * Set a Description for this embed
	 * @param description - Description to set
	 * @example
	 * ```ts
	 * const embed = new Embed()
	 * embed.setDescription('My Description')
	 * ```
	 *
	 * @example
	 * ```ts
	 * // remove the description
	 * const embed = new Embed()
	 * embed.setDescription()
	 * ```
	 */
	setDescription(description?: string): Embed {
		if (!description) {
			this.embed.description = undefined;
			return this;
		}
		if (typeof description !== "string")
			throw new TypeError(
				`Embed description must be a string received ${typeof description}`,
			);
		this.embed.description = description ?? undefined;
		return this;
	}
	/**
	 * Set the footer of this embed
	 * @param footerOpts options for footer
	 * @example
	 * ```ts
	 * // footer with text
	 * const embed = new Embed()
	 * .setFooter({ text: 'footer Text' })
	 * ```
	 *
	 * @example
	 * ```ts
	 * // footer with icon
	 * const embed = new Embed()
	 * .setFooter({ text: 'footer Text with icon', iconURL: 'Link to icon' })
	 * ```
	 *
	 * @example
	 * ```ts
	 * // remove the footer
	 * const embed = new Embed()
	 * .setFooter()
	 * ```
	 */
	setFooter(footerOpts?: IEmbedFooter) {
		if (!footerOpts) {
			this.embed.footer = undefined;
			return this;
		}
		if (!footerOpts.text) throw new TypeError(`FooterText is required`);
		this.embed.footer = {
			text: footerOpts.text,
			icon_url: footerOpts.iconURL,
		};

		return this;
	}
	/**
	 * Convert a Embed into APIEmbed
	 */
	toJSON(): APIEmbed {
		return this.embed;
	}
}
