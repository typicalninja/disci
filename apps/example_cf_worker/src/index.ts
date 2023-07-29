import { InteractionHandler } from "disci";
import { IRequest, Router, withContent, json, error } from "itty-router";
import { verify } from "discord-verify";
import { MessageFlags } from "discord-api-types/v10";
import { InteractionCommandMap } from "./interaction/mapper";

type RequestWith = {
	content: Record<string, unknown>;
} & IRequest;

const router = Router();
const handler = new InteractionHandler();
// public key will be obtained from the env
let publicKey = "";

export interface Env {
	TOKEN: string;
	PUBLIC_KEY: string;
}

handler.on("interactionCreate", async (interaction) => {
		if (interaction.isCommand()) {
			if (interaction.isChatInputInteraction()) {
				const command = InteractionCommandMap[interaction.commandName]
				if(!command) return interaction.reply({ content: `Uh oh! Slash command ${interaction.commandName} does not exist (Did you forgot to add it to the command map)`, flags: MessageFlags.Crossposted | MessageFlags.Ephemeral  })
				return command(interaction);
			}
		} else if (interaction.isAutoComplete()) {
			const focused = interaction.options.getFocused(true);
			console.log(focused);
			interaction.respond([
				`Typical ${focused.value ?? "ninja"}`,
				"No typical",
			]);
		} else if (interaction.isComponent()) {
			console.log(`Component interaction`);
			interaction.reply({
				content: 'hey'
			})
		}
});

/* Router Handling */

router.get("/", async () => {
	if (publicKey === "") return new Response(`Public key is invalid 👎`);
	return new Response(`Worker is working 🚀`);
});

router.post<RequestWith>(
	"/interactions",
	withContent,
	async ({ content, headers }) => {
		const signature = headers.get("x-signature-ed25519");
		const timestamp = headers.get("x-signature-timestamp");
		const rawBody = JSON.stringify(content);

		const isValid = await verify(
			rawBody,
			signature,
			timestamp,
			publicKey,
			crypto.subtle,
		);
		console.log("isValid", isValid);
		if (!isValid) {
			return new Response("Invalid Headers", { status: 401 });
		}

		const timeOutAbort = new AbortController();

		const timeout = setTimeout(() => {
			timeOutAbort.abort("Time out");
		}, 3000);

		try {
			const response = await handler.processRequest(
				content,
				timeOutAbort.signal,
			);
			clearTimeout(timeout);
			return json(response);
		} catch (err) {
			console.log("error", err);
			return error(500, "Internal Server error");
		}
	},
);

router.all("*", () => new Response("Not Found 😕", { status: 404 }));

export default {
	fetch: async (req: Request, env: Env, ctx: ExecutionContext) => {
		if (publicKey === "") {
			publicKey = env.PUBLIC_KEY;
			// most likely the token was also not set
			handler.api.setToken(env.TOKEN);
		}

		return router.handle(req, env, ctx).then(json).catch(error);
	},
};
