import type { Context } from "hono";
import { InteractionHandler, DiscordVerifyHeaders } from "disci";

// disable eslint for this line since i have no idea what hono type to use here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createRequestHandler(handler: InteractionHandler): any {
	return async (c: Context) => {
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
				// disci will convert this to json when needed
				body: await c.req.text(),
				headers: {
					[DiscordVerifyHeaders.signature]: signature,
					[DiscordVerifyHeaders.timestamp]: timestamp,
				},
			});

			c.status(200);
			return c.json(r);
		} catch (e) {
			// handle could not verify message with a 401 as discord expects the error code
			if (e instanceof Error && e.message.includes("Could not verify")) {
				c.status(401);
				return c.json({ error: "Could not validate request headers" });
			}
			c.status(500);
			return c.json({ e: "Internal server error occurred" });
		}
	};
}
