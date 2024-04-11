import 'dotenv/config'
//import crypto from 'node:crypto';
import { serve } from '@hono/node-server'
import { Hono } from "hono";
import { InteractionHandler, EventNames } from "disci-beta";
import { createRequestHandler } from '@disci/adapter-hono';
import { ButtonStyle, ComponentType, InteractionType } from 'discord-api-types/v10';

const app = new Hono();
const handler = new InteractionHandler({
    publicKey: process.env.PK,
    cryptoEngine: crypto.subtle,
})

handler.on(EventNames.interactionCreate, (i) => {
    console.log("InteractionCreate", i.id, i.type, i.isRepliable())
    
    if(i.isAutoCompleteInteraction()) {
        i.respond([])
    }
    else if(i.isRepliable() && i.type !== InteractionType.MessageComponent) {
        console.log("Non componet")
        
        i.reply({
            content: 'Hey',
            components: [{
                type: 1,
                components: [
                    {
                        type: ComponentType.RoleSelect,
                        placeholder: 'Select role',
                        custom_id: 'select_menu'
                    },
                ]
            },
            {
                type: 1,
                components: [
                    {
                        type: ComponentType.Button,
                        custom_id: 'button',
                        style: ButtonStyle.Danger,
                        label: 'DAAN'
                    }
                ]
            }]
        })
    }
    else if(i.isRepliable()) {
        console.log("Component")
        i.reply({ content: 'received',  })
    }
})


app.get("/", (c) => c.text("Server is running 🚀"));

app.post("/interactions", createRequestHandler(handler));

serve({
    fetch: app.fetch,
    port: 8787,
});

console.log("Server is running 🚀")