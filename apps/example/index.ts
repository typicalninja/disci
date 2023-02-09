import 'dotenv/config'
import { InteractionHandler } from 'disci';

import fastify, { FastifyReply, FastifyRequest } from "fastify";
const server = fastify();

// by default will use .env
const client = new InteractionHandler({
  debug: (msg:string) => console.log(msg),
});


// attach a route for /interaction
server.post(
  "/interactions",
  async (req: FastifyRequest, res: FastifyReply) => {
    // @ts-expect-error
    const response = await client.handleRequest(req);
    console.log(`Resolved: ${JSON.stringify(response)}`)
    res.statusCode = response.statusCode || 200;
    return response.responseData;
  }
);

client.on('interactionCreate', (interaction) => {
  if (interaction.isCommand() && interaction.isChatInputInteraction()) {
    console.log(
      `Interaction ID: ${interaction.id}, type: Command `,
      interaction.commandType,
      interaction.createdAt,
      interaction.options,
      interaction.options.getString('auto')
    );
    const int = interaction.respond(`Hello ${interaction.member} (${interaction.user?.id}) (${interaction.user?.tag}) you used command ${interaction.commandName}`);
    int.fetchReply().then((m) => console.log(`Message ${m?.id}`))
  }
  else if(interaction.isAutoComplete()) {
    interaction.sendChoices([
      'hello',
      
    ]);
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