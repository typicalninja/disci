import { verify } from "discord-verify";
import { Hono } from "hono";
import { env } from "hono/adapter";
import handler from "./handler.js";
const app = new Hono();

app.get("/", (c) => c.text("Worker is working 🚀"));

app.post("/interactions", async (c) => {
	// uses hono/adapter for cross platform support
	// you can also use c.env but this way is better for beginners
	// https://hono.dev/helpers/adapter#env
	const { TOKEN, PUBLIC_KEY } = env<{ TOKEN: string; PUBLIC_KEY: string }>(c);

	/** Important: Since we do not have access to env vars we can add the api var here */
	if (handler.api.authToken === "") handler.api.setToken(TOKEN);

	// headers for validation
	const signature = c.req.headers.get("x-signature-ed25519");
	const timestamp = c.req.headers.get("x-signature-timestamp");
	const rawBody = await c.req.json();

	const isValid = await verify(
		JSON.stringify(rawBody),
		signature,
		timestamp,
		PUBLIC_KEY,
		crypto.subtle,
	);

	// check if validation was ok
	if (!isValid) {
		c.status(401);
		return c.json({ error: "Validation failed" });
	}

	try {
		const response = await handler.processRequest(rawBody);
		return c.json(response);
	} catch (err) {
		console.log("error", err);
		c.status(500);
		return c.json({ error: "Server Error " });
	}
});

export default app;
