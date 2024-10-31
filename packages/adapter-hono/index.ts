import {
	DiscordVerifyHeaders,
	type GenericRequest,
	type InteractionHandler,
} from "disci";
import { createFactory } from "hono/factory";

// Custom type instead of Hono context to extract the info we need
// its impossible (currently) to properly type the Hono context, this is the best we can do
type Ctx = {
	req: {
		header: (
			key: (typeof DiscordVerifyHeaders)["signature" | "timestamp"],
		) => string | undefined;
		text: () => Promise<string>;
	};
};

/**
 * Converts a Hono context to a generic request object
 * @example
 * ```ts
 * const handler = new InteractionHandler(...);
 * app.post("/interactions", async (c) =>
 * 	c.json(await handler.handleRequest(await toGenericRequest(c)))
 * );
 * ```
 * @param context - The Hono context
 */
export async function toGenericRequest<C extends Ctx>(
	c: C,
): Promise<GenericRequest> {
	// For some reason its hard to properly type Hono.Context
	const signature = c.req.header(DiscordVerifyHeaders.signature);
	const timestamp = c.req.header(DiscordVerifyHeaders.timestamp);

	if (!signature || !timestamp)
		throw new Error("Could not verify request headers");

	return {
		body: await c.req.text(),
		headers: {
			[DiscordVerifyHeaders.signature]: signature,
			[DiscordVerifyHeaders.timestamp]: timestamp,
		},
	};
}

/**
 * Create a request handler for a HTTPInteractionHandler instance
 * Used to handle incoming requests from hono server
 * @example
 * ```ts
 * const handler = new InteractionHandler(...);
 * app.post("/interactions", ...createInteractionRequestHandler(handler));
 * ```
 * @param handler - The disci interaction handler
 */
export function createInteractionRequestHandler(handler: InteractionHandler) {
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
