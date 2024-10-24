# disci/adapter-hono

Adapter to use [disci](https://github.com/typicalninja/disci) with [hono](https://hono.dev/) framework.

# Installation

```bash
npm install @disci/adapter-hono
# or if you use pnpm, yarn or bun
pnpm add @disci/adapter-hono
yarn add @disci/adapter-hono
bun add @disci/adapter-hono
```

# Usage

```typescript
import { createRequestHandler } from "@disci/adapter-hono";
import { InteractionHandler } from "disci";
import { Hono } from "hono";

const handler = new InteractionHandler({
  // ensure you have the PUBLIC_KEY in your environment
  publicKey: process.env.PUBLIC_KEY,
  cryptoEngine: crypto.subtle,
});

const app = new Hono();

app.post("/interactions", createRequestHandler(handler));

// please refer to hono documentation for your platform
// on how to serve the app
export default app;
```

## Or 

or use `toGenericRequest` to convert a hono [`context`](https://hono.dev/docs/api/context) (request) into a object that can be used by disci.

```typescript
import { toGenericRequest } from "@disci/adapter-hono";
// same imports as above

app.post("/interactions", async (ctx) => {
  const request = await toGenericRequest(ctx);
  const response = await handler.handleRequest(request);
  return ctx.json(response);
});

export default app;
```


# Hono version compatibility

| Adapter version | Hono version | Disci version |
| --------------- | ------------ | ------------- |
| 1.x.x           | 4.x.x        | 1.x.x         |


# License

This repository and the code inside it is licensed under the Apache-2.0 License. Read [LICENSE](https://github.com/typicalninja/disci/blob/main/LICENSE) for more information.