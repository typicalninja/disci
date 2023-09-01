# Nodejs example with hono

Using DisciJS with a [nodejs server](https://nodejs.org)
**This can be used as a complete discord bot template for disciJS with cloudflare workers**

Uses [hono](https://hono.dev/) for the base server.

> Note: This will always use the local monorepo version, if you plan only using the source make sure to either use the actual version used in the cloned monorepo or use the **npm** version that is compatible with cloned source code

## Features

* Interaction handler
* Interaction Handler types included 
* **Automatic Loading  of SlashCommands, AutoComplete, ContextMenu etc to the interaction handler**
* Powered by hono (Hono can be used with any other runtime with minimal changes to the base code)
* Uses discord-verify for request verification - uses faster webcrypto instead of tweetnacl

## Run the project

1. Install the dependencies

```bash
# Using npm
npm i

# Using pnpm (suggested)
pnpm i

# Using yarn
yarn i
```