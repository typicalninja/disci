import 'dotenv/config'
import { InteractionHandler, VerificationStratergy } from 'disci';

import fastify, { FastifyReply, FastifyRequest } from "fastify";
const server = fastify();

// by default will use .env
const client = new InteractionHandler({
  debug: (msg:string) => console.log(msg),
  verificationStratergy: new VerificationStratergy.NativeVerificationStratergy(process.env.PUBLIC_KEY),
  rest: {
    token: process.env.TOKEN!,
  }
});

// attach a route for /interaction
server.post(
  "/interactions",
  async (req: FastifyRequest, res: FastifyReply) => {
   
    const response = await client.handleRequest(req);
    console.log(`Resolved: ${JSON.stringify(response)}`)
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
    const int = await interaction.respond({
      content: `Hello ${interaction.member} (${interaction.user?.id}) (${interaction.user?.tag}) you used command ${interaction.commandName}`,
      fetchReply: true
    });
    console.log(`${int.id}`)
    await int.pin()

    setTimeout(async () => {
      await int.unpin()
    })
    /*int.fetchReply().then((m) => {
      console.log(`Message ${m?.id} ${m?.content}`);


      setTimeout(async () => {
       await m.addReaction('👍');
       await m.addReaction('👎');
      }, 2000)
    })*/
  }
  else if(interaction.isAutoComplete()) {
    interaction.sendChoices([
      '1choice',
      '2choice'
    ])
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