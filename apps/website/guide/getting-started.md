# Getting started

## Before you begin

To create a bot, it's essential to have a solid understanding of JavaScript and Node.js concepts. If you're new to JavaScript but eager to learn, the following links will provide a great starting point.

#### Javascript resources
* [MDN's JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JavaScript.info, Modern Javascript tutorial](https://javascript.info/)
* [Codecademy's Javascript course](https://www.codecademy.com/learn/introduction-to-javascript)
#### Node.js Resources
* [NodeSchool's Guide for Node.js and Javascript](https://nodeschool.io/)

Choose the resource that suits your learning style. Once you've gained confidence in the language, return here and embark on the journey to build an AWESOME BOT : )


## Installation

Install the package and other required tooling using your preferred package manager.

#### 3rd party tools

* [discord-verify](https://github.com/IanMitchell/interaction-kit/tree/main/packages/discord-verify) - verification library for incoming requests
* [hono](https://hono.dev/) - web-server framework supporting **any** js runtime

::: code-group

```sh [npm]
    npm i disci discord-verify hono
```

```sh [pnpm]
    pnpm add disci discord-verify hono
```

```sh [yarn]
    yarn add disci discord-verify hono
```

:::


:::tip

If you are hosting in a node.js based server and is using [`hono`](https://hono.dev/)
Please see the [node.js hono guide](https://hono.dev/getting-started/nodejs)

You can install the extra package as below,

::: code-group

```sh [npm]
    npm i @hono/node-server
```

```sh [pnpm]
    pnpm add @hono/node-server
```

```sh [yarn]
    yarn add @hono/node-server
```

:::


## Choosing a platform

Here this guide will split into 2 groups for guiding you through the hosting process.

We've got you covered with two hosting guides for 2 services covering different environments.

2. [replit](./hosting/replit.md) - nodejs server environment
1. [cloudflare workers](./hosting/workers.md) - server-less environment

If you have already chosen a hosting type, go ahead and click on your preferred type,
if not visit the [**Limitations**](./limits.md) guide to decide.