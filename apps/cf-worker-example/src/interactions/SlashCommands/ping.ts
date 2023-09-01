import type { SlashCommand } from "../../types/interactions.js";


export default {
    name: 'ping',
    description: 'Check if the bot is alive',
    async run(interaction) {
        return interaction.reply({
            content: '🏓 Pong!',
        })
    },
} satisfies SlashCommand