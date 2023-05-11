import { InteractionHandler, NativeVerificationStrategy } from 'disci'
import { IRequest } from 'itty-router'
import { ThrowableRouter, withContent, StatusError, status, error } from 'itty-router-extras'

type RequestWith = {
  content: string[]
  headers: any
} & IRequest

export interface Env {
  TOKEN: string
  PUBLIC_KEY: string
  // These objects are created before first use, then stashed here
  // for future use
  router?: ThrowableRouter
  handler?: InteractionHandler
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
	// only 1 time
    if (env.handler === undefined) {
      env.handler = new InteractionHandler({
       // add in dev: debug: (msg: string) => console.log(msg),
        verificationStrategy: new NativeVerificationStrategy(env.PUBLIC_KEY),
        rest: {
          token: env.TOKEN,
        },
      })
    }

    if (env.router === undefined) {
      env.router = buildRouter(env)
    }

    return env.router.handle(request)
  },
}

function buildRouter(env: Env): ThrowableRouter {
  const router = ThrowableRouter()

  if (env.handler) {
    env.handler.on('interactionCreate', (interaction) => {
      if (interaction.isCommand()) {
        if (interaction.isChatInputInteraction()) {
          interaction.respond({
            content: `Hi from cloudflare`,
          })
        }
      }
    })
  }

  router.get('/', async () => {
    if (!env.handler) return new Response(`No: Handler Offline`)
    return new Response(`Active and ready`)
  })

  router.post('/interactions', withContent, async ({ content, headers }: RequestWith) => {
    //console.log(res)
    if (!env.handler) throw new StatusError(500, 'Server Error')

    const response = await env.handler
      .handleRequest({
        headers: {
          'x-signature-ed25519': headers.get('x-signature-ed25519'),
          'x-signature-timestamp': headers.get('x-signature-timestamp'),
        },
        body: content,
      })
      .catch((err) => console.log(err))
    if (!response) throw new StatusError(500, 'server Error')
    return status(response.status, response.content)
  })

  router.all('*', () => new Response('Not Found.', { status: 404 }))

  return router
}
