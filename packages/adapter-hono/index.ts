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
 * app.post("/interactions", async (c) => handler.handleRequest(await toGenericRequest(c)));
 * ```
 * @param c - The Hono context
 * @returns
 */
export async function toGenericRequest(c: Context): Promise<GenericRequest> {
	const signature = c.req.header(DiscordVerifyHeaders.signature) ?? "";

	const timestamp = c.req.header(DiscordVerifyHeaders.timestamp) ?? "";

	return {
		body: await c.req.text(),

		headers: {
			[DiscordVerifyHeaders.signature]: signature,

			[DiscordVerifyHeaders.timestamp]: timestamp,
		},
	};
}

export function createRequestHandler(handler: InteractionHandler) {
	const factory = createFactory();

	return factory.createHandlers(async (c) => {
		const signature = c.req.header(DiscordVerifyHeaders.signature) ?? "";
		const timestamp = c.req.header(DiscordVerifyHeaders.timestamp) ?? "";

		// verify these headers exist
		if (!signature || !timestamp) {
			c.status(400);
			return c.json({
				error:
					'Missing required headers ("x-signature-ed25519", "x-signature-timestamp")',
			});
		}

		try {
			const r = await handler.handleRequest({
				body: await c.req.json(),
				headers: {
					[DiscordVerifyHeaders.signature]: signature,
					[DiscordVerifyHeaders.timestamp]: timestamp,
				},
			});

			c.status(200);
			// needs to type as unknown to prevent typescript from
			// getting types from discord-api-types which is not part of this package
			return c.json(r as unknown);
		} catch (e) {
			// handler could not verify the request
			if (e instanceof Error && e.message.includes("Could not verify")) {
				c.status(401);
				return c.json({ error: "Could not validate request headers" });
			}
			c.status(500);
			return c.json({ e: "Internal server error occurred" });
		}
	})[0]; // the user will be able to do: createRequestHandler(handler) instead of ...createRequestHandler(handler); // return the first handler
}
