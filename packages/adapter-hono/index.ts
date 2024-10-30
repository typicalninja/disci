import {
	DiscordVerifyHeaders,
	type GenericRequest,
	type InteractionHandler,
} from "disci";
import type { Context } from "hono";
import { createFactory } from "hono/factory";

/**
 * Converts a Hono context to a generic request object
 * @example
 * ```ts
 * const handler = new InteractionHandler(...);
 * const app = new Hono();
 *
 * app.post("/interactions", async (c) => c.json(await handler.handleRequest(await toGenericRequest(c))));
 * ```
 *
 * @param context - The Hono context
 * @returns The generic request object
 */
export async function toGenericRequest<C>(c: C): Promise<GenericRequest> {
	// For some reason its hard to properly type Hono.Context
	const context = c as Context;
	const signature = context.req.header(DiscordVerifyHeaders.signature);
	const timestamp = context.req.header(DiscordVerifyHeaders.timestamp);

	if (!signature || !timestamp)
		throw new Error("Could not verify request headers");

	return {
		body: await context.req.text(),
		headers: {
			[DiscordVerifyHeaders.signature]: signature,
			[DiscordVerifyHeaders.timestamp]: timestamp,
		},
	};
}

/**
 * Create a request handler for Hono using the provided interaction handler
 * @example
 * ```ts
 * const handler = new InteractionHandler(...);
 * const app = new Hono();
 *
 * app.post("/interactions", createRequestHandler(handler));
 * ```
 *
 * @param handler - The disci interaction handler
 * @returns The Hono request handler
 */
export function createRequestHandler(handler: InteractionHandler) {
	const factory = createFactory();

	return factory.createHandlers(async (c) => {
		try {
			const r = await handler.handleRequest(await toGenericRequest(c));

			c.status(200);
			// needs to type as unknown to prevent typescript from
			// getting types from discord-api-types which is not part of this package
			return c.json(JSON.stringify(r));
		} catch (e) {
			// handler/toGenricRequest could not verify the request
			if (e instanceof Error && e.message.includes("Could not verify")) {
				c.status(401);
				return c.json({ error: "Could not validate request headers" });
			}
			c.status(500);
			return c.json({ error: "Internal server error occurred" });
		}
	});
}
