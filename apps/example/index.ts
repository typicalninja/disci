import 'dotenv/config'
import { InteractionHandler, NativeVerificationStratergy, } from 'disci';
import { ButtonStyle } from 'discord-api-types/v10'
import fastify, { FastifyReply, FastifyRequest } from "fastify";
const server = fastify();
import { ActionRowBuilder, ButtonBuilder } from '@discordjs/builders'
if(typeof process.env.TOKEN !== 'string' || typeof process.env.PUBLIC_KEY !== 'string') throw new Error(`Credentials not set`)
// by default will use .env
const client = new InteractionHandler({
  debug: (msg:string) => console.log(msg),
  verificationStratergy: new NativeVerificationStratergy(process.env.PUBLIC_KEY),
  rest: {
    token: process.env.TOKEN,
  }
});

// attach a route for /interaction
server.post(
  "/interactions",
  async (req: FastifyRequest, res: FastifyReply) => {
    const response = await client.handleRequest(req);
    res.statusCode = response.statusCode || 200;
    return response.responseData;
  }
);

client.on('error', (e) => console.log(`Err:`, e))

client.on('interactionCreate', async (interaction) => {
  if (interaction.isCommand() && interaction.isChatInputInteraction()) {
    console.log(
      `Interaction ID: ${interaction.id}, type: Command `,
      interaction.commandType,
      interaction.createdAt,
      interaction.options,
      interaction.options.getString('auto')
    );

    	const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Confirm Ban')
			.setStyle(ButtonStyle.Danger);

		const cancel = new ButtonBuilder()
			.setCustomId('cancel')
			.setLabel('Cancel')
			.setStyle(ButtonStyle.Secondary);

    const components = new ActionRowBuilder<ButtonBuilder>().addComponents(cancel, confirm);
    await interaction.respond({
      content: `Hello ${interaction.member} (${interaction.user?.id}) (${interaction.user?.tag}) you used command ${interaction.commandName}`,
      fetchReply: false,
      components: components
    });
   
  }
  else if(interaction.isAutoComplete()) {
    interaction.respondWithChoices([
      '1choice',
      '2choice'
    ])
  }
  else if(interaction.isComponent()) {
    console.log(`Received ComponentInteraction`, interaction)
    await interaction.respond({
      content: `Responded to button ${interaction.customId}`
    })
  }
});

(async () => {
  try {
    await server.listen({ port: 4000 });
    console.log(`Sever is Running at http://localhost:4000`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})()