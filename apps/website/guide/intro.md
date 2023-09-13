# Introduction to Disci

## What is Disci?

Disci is a module designed for parsing HTTP webhook data from Discord interactions. It allows you to respond to these interactions using a predefined structure and various utility functions.


## Where can it be used?

Disci can be used anywhere that support creation of public facing web-servers.
The service do not have to be **24/7**, as long as the service offers on-request wake-up capabilities and avoids cold starts (Discord imposes a timeout of 3 seconds), you can confidently deploy and use Disci in that environment.

For example you can easily create a disci app for *free* using services such as,

* [replit](https://replit.com) - Automatically generates a public URL when you initiate a web server.
* [cloudflare workers](https://workers.cloudflare.com/) - By default includes a public facing url

::: tip
**These platforms are not necessarily recommendations but serve as illustrative examples for getting started with Disci. If possible please use paid platforms / plans for better reliability**
:::


## Requirements for usage

The requirements for deploying your disci app depends from platform to platform,
a general non exhaustive list is here,


* If node, must be a version which supports *native* (v18.x.x+) [`experimental fetch api`](https://nodejs.org/en/blog/announcements/v18-release-announce#fetch-experimental) 

* According to platform you use, a request verification library, we suggest [discord-verify](https://github.com/IanMitchell/interaction-kit/tree/main/packages/discord-verify)

* If another run time other than node.js, make sure it supports something similar to the `fetch api` to be able to use the built-in rest client