---
id: "index"
title: "disci"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# 🎨 DisciJs

Easy to use library for creating discord applications via interaction webhooks.

# 🚀 Install

Use any of the following commands

```bash
npm install disci

# yarn

yarn add disci

# pnpm

pnpm add disci

```

# Overview

DisciJs contains the minimum code to create a discord application with the new (relatively) interaction webhook system. DisciJs does not itself include validation of received interactions, we expect the **user** to handle that before passing us the data.

You can use [discord-interactions-js](https://github.com/discord/discord-interactions-js) for validation of received requests

This package expects you to have **prior knowledge of javascript / typescript** and **prior knowledge with interacting with the discord api** via either,

1. The raw api
2. or other discord libraries (like discord.js)

The library will only error out on certain occasions and for other occasions user is expected to handle the error via api errors received

> Guides and more can be found [here](https://dev--disci.netlify.app/)

# Nodejs version

This only apply if you plan to use disci in a server environment.
Disci uses the api for its built in rest module which is **Already** available in
serverless environments (such as cloudflare workers).
However Native fetch api for node.js is implemented in node.js v18+
as such this Module requires node.js version 18+ to be used

# Links

* [Documentation & Guide](https://dev--disci.netlify.app/)
* [Npm](https://www.npmjs.com/package/disci)
* [Github](https://github.com/typicalninja493/disci)
* [Discord Server](https://discord.gg/9s52pz6nWX)

# License

This repository and the code inside it is licensed under the Apache-2.0 License. Read [LICENSE](https://github.com/typicalninja493/disci/blob/master/LICENSE) for more information.
