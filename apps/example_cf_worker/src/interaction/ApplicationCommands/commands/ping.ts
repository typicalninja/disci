import {
	ActionRowBuilder,
	ButtonBuilder,
	EmbedBuilder,
} from "@discordjs/builders";
import { ChatInputInteraction } from "disci";
import { ButtonStyle } from "discord-api-types/v10";

export default {
	execute: async (interaction: ChatInputInteraction) => {
		const embed = new EmbedBuilder()
			.setDescription("Test from cloudflare")
			.setFooter({ text: `Test for` })
			.setAuthor({ name: "Text" })
			.setTimestamp(Date.now())
			.setTitle("title boii")
			.setThumbnail(
				"https://cdn.discordapp.com/avatars/823448814186397696/014a5dc1e4b084e8958ace890690a821.png?size=4096",
			)
			.setImage(
				"https://cdn.discordapp.com/avatars/823448814186397696/014a5dc1e4b084e8958ace890690a821.png?size",
			);

		const actionRow1 = new ActionRowBuilder<ButtonBuilder>();

		const button1 = new ButtonBuilder()
			.setCustomId("button1")
			.setDisabled(true)
			.setStyle(ButtonStyle.Primary)
			.setLabel(`Button 1`);

		const button2 = new ButtonBuilder()
			.setCustomId("button2")
			.setStyle(ButtonStyle.Primary)
			.setLabel(`Button 2`);

		actionRow1.addComponents(button1, button2);
		console.log(JSON.stringify(actionRow1.toJSON()));
		const msg = await interaction.reply({
			content: `Hi from cloudflare`,
			embeds: [embed.toJSON()],
			components: [actionRow1.toJSON()],
			fetchReply: true,
		});

		console.log(msg.embeds);
	},
};
