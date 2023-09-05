import { ThreadAutoArchiveDuration } from "discord-api-types/v10";
import type { SlashCommand } from "../../types/interactions.js";
export default {
    name: 'ping',
    description: 'Check if the bot is alive',
    async run(interaction) {
        
       const msg = await interaction.deferReply({ fetchReply: true })

        console.log(await msg.startThread({
            name: 'Found request data',
            autoArchiveDuration: ThreadAutoArchiveDuration.OneDay
        }))
        interaction.editReply({
            files: [{
                contentType: 'text/plain',
                data: 'Test',
                name: 'text.txt'
            }]
        })
    },
} satisfies SlashCommand