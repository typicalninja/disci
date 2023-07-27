import { InteractionHandler } from "disci";
import { IRequest, Router, withContent, json, error } from "itty-router";
import { verify } from "discord-verify";
import { ButtonStyle, ComponentType } from "discord-api-types/v10";
import {
	ActionRowBuilder,
	ButtonBuilder,
	EmbedBuilder,
} from "@discordjs/builders";

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
				const option = interaction.options.getString("auto");

				const embed = new EmbedBuilder()
					.setDescription("Test from cloudflare")
					.setFooter({ text: `Test for ${option}` })
					.setAuthor({ name: "Text" })
					.setTimestamp(Date.now())
					.setTitle("title boii")
					.setThumbnail(
						"https://cdn.discordapp.com/avatars/823448814186397696/014a5dc1e4b084e8958ace890690a821.png?size=4096",
					)
					.setImage(
						"https://cdn.discordapp.com/avatars/823448814186397696/014a5dc1e4b084e8958ace890690a821.png?size",
					);

				const actionRow1 = new ActionRowBuilder<ButtonBuilder>();

				const button1 = new ButtonBuilder()
					.setCustomId("button1")
					.setDisabled(true)
          .setStyle(ButtonStyle.Primary)
					.setLabel(`Button 1`);


				const button2 = new ButtonBuilder()
					.setCustomId("button2")
					.setStyle(ButtonStyle.Primary)
					.setLabel(`Button 2`);

		  		actionRow1.addComponents(button1, button2);
				console.log(JSON.stringify(actionRow1.toJSON()));
				const msg = await interaction.respond({
					content: `Hi from cloudflare`,
					embeds: [embed.toJSON()],
					components: [actionRow1.toJSON()],
					fetchReply: true,
				});

				console.log(msg.embeds);
			}
		} else if (interaction.isAutoComplete()) {
			const focused = interaction.options.getFocused(true);
			console.log(focused);
			interaction.respondWithChoices([
				`Typical ${focused.value ?? "ninja"}`,
				"No typical",
			]);
		} else if (interaction.isComponent()) {
			console.log(`Component interaction`);
      interaction.respond({
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
