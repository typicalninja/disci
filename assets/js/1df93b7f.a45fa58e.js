"use strict";(self.webpackChunk_discijs_docs=self.webpackChunk_discijs_docs||[]).push([[237],{1650:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(9901),s=n(9072),a=n(6420),i=n(9414),c=n(2628);const l="import { InteractionHandler } from 'disci';\nimport fastify, /*....*/ from \"fastify\";\nconst server = fastify();\nconst client = new InteractionHandler(/*Credentials*/);\nserver.post(/*Path*/, \n  async (req) => \n  await client.handleRequest(req).responseData\n)\n\nserver.listen({ port: /*Server Port*/})\n// replace this when ready\n";function o(){const{siteConfig:e}=(0,a.Z)();return r.createElement("div",{className:"hero min-h-screen bg-base-200"},r.createElement("div",{className:"hero-content flex-row-reverse"},r.createElement(c.Z,{className:"language-ts"},l),r.createElement("div",null,r.createElement("h1",{className:"hero_title"},e.title),r.createElement("p",{className:"text-md"},e.tagline),r.createElement("div",null,r.createElement(s.Z,{className:"btn btn-secondary no-underline",style:{textDecoration:"none"},to:"/docs/intro"},"Start Listening!")))))}function m(){const{siteConfig:e}=(0,a.Z)();return r.createElement(i.Z,{title:`${e.title}`,description:"A collection of librarys for interacting with twitter api"},r.createElement(o,null))}}}]);