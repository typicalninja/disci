import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { InteractionHandler, EventNames } from "disci";
import { createRequestHandler } from "@disci/adapter-hono";
import {
	ButtonStyle,
	ComponentType,
	InteractionType,
} from "discord-api-types/v10";

// create a hono webserver
const app = new Hono();
const handler = new InteractionHandler({
	publicKey: process.env.PK,
	cryptoEngine: crypto.subtle,
});

handler.on(EventNames.interactionCreate, (i) => {
	console.log(`Event: InteractionCreate, InteractionId: ${i.id}, guildId: ${i.raw.guild_id}`);

	// autocomplete interactions must be handled sperately 
	// they are not detected by i.repliable()
	if (i.isAutoCompleteInteraction()) {
		i.respond([
			{ name: "Hello", value: "hello" },
			{ name: "World", value: "world" },
		]);
	// handle regular commands (slash/context menus etc)
	} else if (i.isCommandInteraction()) {
		// just a generic response
		i.reply({
			content: "Hey",
			components: [
				// add some components so we can test too
				{
					// type: 1 represent a action row
					type: 1,
					components: [
						{
							type: ComponentType.RoleSelect,
							placeholder: "Select role",
							custom_id: "select_menu",
						},
					],
				},
				{
					type: 1,
					components: [
						{
							type: ComponentType.Button,
							custom_id: "button",
							style: ButtonStyle.Primary,
							label: "HELLO",
						},
					],
				},
			],
		});
	} else if (i.isComponentInteraction()) {
		i.reply({ content: "Component interaction received" });
	}
});

// a get route to verify the server is online
app.get("/", (c) => c.text("Server is running 🚀"));

// use the adapter to create a request handler
// we are adding it to /interactions path instead of root
// ensure that when you enter the url into discord dev portal
// to append "/interactions" to the url
app.post("/interactions", createRequestHandler(handler));

serve({
	fetch: app.fetch,
	port: 8787,
});

console.log("Server is running 🚀");
