# Getting Started
[![](https://badgen.net/npm/v/disci)](https://npmjs.org/package/disci)
[![](https://badgen.net/npm/v/disci/dev)](https://npmjs.org/package/disci)
[![](https://badgen.net/npm/dw/disci)](https://npmjs.org/package/disci)
[![](https://badgen.net/npm/dw/disci)](https://npmjs.org/package/disci)
[![Netlify Status](https://api.netlify.com/api/v1/badges/75048bba-9a49-4e42-8b97-523c5a32303c/deploy-status?branch=dev)](https://app.netlify.com/sites/disci/deploys)

A simple and easy to use module for creating discord bots.This packages uses discord's [Http interactions](https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction) instead of the normal Discord Gateway.

### Advantages

* Support Serverless - You can run these bots on serverless platforms, which are cheaper than usual hosting methods.Many services also includes generous free tiers.

* No Sharding - No sharding is required for http interaction bots.Load balancing as for a Normal webserver is possible (not tested) but not needed.Specially for serverless platforms

* Documented

### Disadvantages

* No realtime events - Since the bot only receive's data based on your application, no realtime event is possible without a gateway.

* Serverless platform limitations


> Many more `Advantages` and `Disadvantages`

## Requirements/supported

* Node.js Backend - Tested using a fastify webserver
* Serverless platflorm (not tested throughly/old tests for now)


## Before you begin...

To create a bot You must have a decent grasp in concepts of javascript and node.js.
If you dont know JS (or Node.js) but would like to learn it, Below links will help you get started.

#### Javascript resources
* [MDN's JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JavaScript.info, Modern Javascript tutorial](https://javascript.info/)
* [Codecademy's Javascript course](https://www.codecademy.com/learn/introduction-to-javascript)
#### Nodej.js Resources
* [NodeSchool's Guide for Node.js and Javascript](https://nodeschool.io/)

Take your pick.Once you are confident with the language come back here and build a **AWESOME BOT** : )