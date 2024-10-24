import { DiscordVerifyHeaders, type InteractionHandler } from "disci";
import { createFactory } from "hono/factory";

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
	})[// the user will be able to do: createRequestHandler(handler) instead of ...createRequestHandler(handler); // return the first handler
	0];
}
