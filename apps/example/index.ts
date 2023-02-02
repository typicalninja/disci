import { InteractionHandler } from "disci";
//import { InteractionResponseType } from "discord-api-types/v10";
//import { InteractionType, ApplicationCommandType, InteractionResponseType } from 'discord-api-types/v10'
import fastify, { FastifyReply, FastifyRequest } from "fastify";
const server = fastify();

const client = new InteractionHandler({
  publicKey: "a0a9e3f5bef2c0426ddfb3ba462491a0281ddc271c3f503ddbe69dfced3e3785",
  token: "ODIzNDQ4ODE0MTg2Mzk3Njk2.GfAtkd.VWeUkALvYs-qF9lVpxO-TBXl-Nn3GujFoD3N24",
});

const start = async () => {
  try {
    server.post(
      "/interactions",
      async (req: FastifyRequest, res: FastifyReply) => {
        // @ts-expect-error
        const d = await client.handleRequest(req);
        if(!d) {
          res.statusCode = 400;
          return {
            'message': 'Unauth'
          }
        }
        console.log(`Returning: ${JSON.stringify(d)}`)
        res.statusCode = d.statusCode || 200;
        return d.responseData;
      });

      client.on('interactionCreate', (interaction) => {
        if (interaction.isCommand()) {
          console.log(
            `Interaction ID: ${interaction.id}, type: Command `,
            interaction.commandType,
            interaction.createdAt,
          );
          /*interaction.respond(InteractionResponseType.ChannelMessageWithSource, {
            content: "test",
          }).catch(() => null);*/
      console.log(`Req: ${d}`)
        }
    })
    await server.listen({ port: 3000 });
    console.log(`Sever is Running`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
