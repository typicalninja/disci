# Cloudflare example with hono

Using DisciJS with a [cloudflare worker](https://developers.cloudflare.com/workers/)
**This can be used as a complete discord bot template for disciJS with cloudflare workers**

Uses [hono](https://hono.dev/) for the base server.

This Directory was generated with [wrangler](https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler) using `wrangler init ...`


> Note: This will always use the local monorepo version, if you plan only using the source make sure to either use the actual version used in the cloned monorepo or use the **npm** version that is compatible with cloned source code

## Features

* Interaction handler
* Interaction Handler types included
* Powered by hono (Hono can be used with any other runtime with minimal changes to the base code)
* Uses discord-verify for request verification - uses faster webcrypto instead of tweetnacl

## Included

This example includes how to create a discord application with disci for cloudflare workers.
It also includes a example command handler suitable for sever less applications.

## Interaction files

> Interaction files **cannot** be auto loaded as you would normally do in a server environment since the all files must be bundled to single file with base code to be deployed

# Links

* [Documentation & Guide](https://disci.typical.gq)
* [Npm](https://www.npmjs.com/package/disci)
* [Github](https://github.com/typicalninja493/disci)
* [Discord Server](https://discord.gg/9s52pz6nWX)
