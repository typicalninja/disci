import type { SlashCommand } from "../../types/interactions.js";

export default {
    name: 'ping',
    description: 'Check if the bot is alive',
    run(interaction) {
        interaction.reply({
            content: '🏓 Pong'
        })
    },
} satisfies SlashCommand