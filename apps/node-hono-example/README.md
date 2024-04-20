# Nodejs (hono) example (WIP)

This example demonstrates how to create a discord application using

* [node.js](https://nodejs.org/en)
* Disci
* [hono](https://hono.dev/)

For more information checkout the disci guide (WIP)


# Installation

This requires npx or equivalent ([pnpm dlx](https://pnpm.io/cli/dlx)) to be available in your system. **(npx is available with a regular node install)**


```shell
# clone this

npx degit github:typicalninja/disci/apps/node-hono-example disci-example

# See more about degit @ https://github.com/Rich-Harris/degit

cd disci-example


# install dependencies
npm i
# or pnpm i
```

# Add authentication credentials

First, rename the included `.env.example` file to `.env`.

Next, navigate to your application on the Discord Developer Portal and copy both the public key and the bot token. Paste them into the renamed `.env` file under the appropriate fields.

# Development life cycle

For the purpose of this guide we are using [ngrok](https://ngrok.com/). However, you're free to use other tunnel tools such as [cloudflared](https://github.com/cloudflare/cloudflared#installing-cloudflared).

If ngrok isn't installed on your system yet, you can easily get it by following the instructions on the [ngrok download page](https://ngrok.com/download).

Once installed, you can start running your bot. Just ensure that you've changed your directory (using "cd" or its equivalent) to the project we cloned earlier in the [#installation](#installation)

```bash
# Start the dev server
npm run dev
# or pnpm run dev

# start the ngrok client
ngrok http 8787
```

![Ngrok tunnel screen](/assets/ngrok-tunnel.png)

The output from ngrok will include a Forwarding URL. This URL is the publicly accessible address we'll use for our Interactions Endpoint URL.

Navigate to the Discord Developer Portal and access your application. Then, on the General Overview page, locate the Interactive Endpoint URL field. Paste the URL you obtained from ngrok, ensuring to append "/interactions" to it.

![Discord portal interaction url field](/assets/interaction-url-discord-portal.png)


```bash
# make sure to attach the /interactions path to the url you get from ngrok

https://random-stuff.ngrok-free.app/interactions
                                    ^^^^^^^^^^^^
```

# Deploying

We won't delve deeply into how to deploy a Discord application here. You can refer to hosting Node.js web server guides for information on that.

To test a production build without manually building the TypeScript, run the following commands in a terminal:

```bash
npm run start
# or pnpm run start


ngrok http 8787
```

and then follow the steps in [Development life cycle](#development-life-cycle) to add the link to discord portal.