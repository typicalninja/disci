import { InteractionClient } from '../index';
import fastify from 'fastify';
import { InteractionType } from 'discord-api-types/v10';
const server = fastify()
const client = new InteractionClient({
  publicKey: 'a0a9e3f5bef2c0426ddfb3ba462491a0281ddc271c3f503ddbe69dfced3e3785'
})



const start = async () => {
    try {
      await server.register(import("fastify-raw-body"), {
        field: "body",
        global: false,
        runFirst: true,
      });
      server.post('/interactions', client.handleRequest.bind(client));
      await server.listen({ port: 3000 })
      console.log('created')
      client.on('interactionCreate', (interaction) => {
        if(interaction.type === InteractionType.ApplicationCommand) {
          console.log('app command', interaction.type, interaction.token)
        }
      })
    } catch (err) {
        console.error(err)
      process.exit(1)
    }
}
start()

/*

  async attach(
    { path = "", publicKey = this.options.publicKey },
    server: FastifyInstance
  ) {
    if (this.attached)
      throw new Error(`Client is already attached to a server`);
    // check if publicKey is present
    if (typeof publicKey !== "string")
      throw new Error(
        `Expected publicKey to be a string received ${typeof publicKey}`
      );
    if (publicKey && !this.options.publicKey)
      this.options.publicKey = publicKey;
    // attach a fastify plugin
    await server.register(import("fastify-raw-body"), {
      field: "rawBody",
      global: false,
      runFirst: true,
    });
    // create a path for the post request
    server.post(
      path,
      {
        config: {
          rawBody: true,
        },
      },
      this.handleRequest.bind(this)
    );

    server.get(path, async () => ({
      message: "Only Post Requests with valid auth headers accepted",
    }));

    return this;
  }
 */