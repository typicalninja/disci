import { InteractionHandler } from "disci";
import { MessageFlags } from "discord-api-types/v10";
import { SlashCommands } from "./interactions/interactions.js";

const handler = new InteractionHandler();


handler.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
        if (interaction.isChatInputInteraction()) {
            const command = SlashCommands.get(interaction.commandName);
            if(!command) return interaction.reply({ content: `\`\`\`diff\n- Uh oh! Slash command ${interaction.commandName} does not exist (Did you forgot to add it to the command map?)\`\`\``, flags: MessageFlags.Ephemeral  })
            return await command.run(interaction);
        }
    }
    else if(interaction.isAutoComplete()) {
        const autoCompleteCommand = SlashCommands.get(interaction.commandName);
        if(!autoCompleteCommand || !autoCompleteCommand.autoComplete) return interaction.respond([]);
        await autoCompleteCommand.autoComplete(interaction)
    }

    return null;
});




export default handler;