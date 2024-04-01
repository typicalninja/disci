import 'dotenv/config'
//import crypto from 'node:crypto';
import { serve } from '@hono/node-server'
import { Hono } from "hono";
import { InteractionHandler } from "disci-beta";


const app = new Hono();
const handler = new InteractionHandler({
    publicKey: process.env.PK,
    cryptoEngine: crypto.subtle
})


app.get("/", (c) => c.text("Server is running 🚀"));

app.post("/interactions", async (c) => {
    console.log("Reqeust was made")
    try {
        const r = await handler.handleRequest({
            body: await c.req.text(),
            headers: {
                "x-signature-ed25519": c.req.headers.get("x-signature-ed25519") ?? '',
                "x-signature-timestamp": c.req.headers.get("x-signature-timestamp") ?? "",
            }
        })
    
        console.log("Request ", r)
        return c.json(r)
    }
     catch(e) {
        console.log("Had a error", e)

         if(e instanceof Error) {
                        if(e.message.includes("Could not verify")) {
                console.log("Validation failed")
                c.status(401)
                return c.json({ error: 'Validation failed' })
            }
         }
         c.status(500)
         return c.json({ e: "Internal error "})
     }
});

serve({
    fetch: app.fetch,
    port: 8787,
});

console.log("Server is running 🚀")