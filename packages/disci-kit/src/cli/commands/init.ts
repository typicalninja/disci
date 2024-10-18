import path from "node:path";
import { cwd } from "node:process";
import * as p from "@clack/prompts";
import pc from "picocolors";
import whichpm from "which-pm";
import { directoryEmpty, ignoreUndefined } from "../../lib/utils/helpers";

export interface InitCommandOptions {
	force?: boolean;
	directory: string;
}

const adaptersAndPackagesToInstall = {
	"hono-node": ["@disci/adapter-hono"],
};

function installPackages(pm: string, directory: string, adapter) {}

export async function runInitCommand(options: InitCommandOptions) {
	p.intro("disci-kit-init");
	const packageManager = (await whichpm(cwd())) || { name: "npm" };
	const initialQuestions = await p.group(
		{
			directory: () =>
				p.text({
					message: "Where should we create the new project?",
					initialValue: options.directory,
					validate(value) {
						if (value.length === 0) return "Directory is required!";
						return;
					},
				}),
			language: () =>
				p.select<{ value: string; label: string }[], unknown>({
					message: "Pick the project language.",
					options: [
						{ value: "ts", label: "TypeScript" },
						{ value: "js", label: "JavaScript" },
					],
				}),
			adapter: () =>
				p.select<{ value: string; label: string; hint?: string }[], unknown>({
					message: "Pick the adapter (webserver)",
					options: [
						{
							value: "hono",
							label: `Hono (${pc.cyan("https://hono.dev/")})`,
							hint: "recommended",
						},
						{
							value: "itty",
							label: `Itty router (${pc.cyan("https://itty.dev/")})`,
						},
						{
							value: "express",
							label: `express (${pc.cyan("https://expressjs.com/")})`,
						},
					],
				}),
			platform: ({ results }) =>
				p.select<{ value: string; label: string }[], unknown>({
					message: "Pick the platform to deploy this in.",
					options: ignoreUndefined<{ value: string; label: string }>([
						{
							value: "node",
							label: `Node (${pc.cyan("https://nodejs.org/")})`,
						},
						results.adapter !== "express" && {
							value: "workers",
							label: `Workers (${pc.cyan("https://workers.cloudflare.com/")})`,
						},
					]),
				}),
			installPackages: () =>
				p.confirm({
					message: `Do you want to install required packages via ${packageManager.name}`,
				}),
		},
		{
			// On Cancel callback that wraps the group
			// So if the user cancels one of the prompts in the group this function will be called
			onCancel: () => {
				p.cancel("Operation cancelled.");
				process.exit(0);
			},
		},
	);

	const resolvedDirectory = path.resolve(initialQuestions.directory);
	// check if the directory is empty or not
	// if it is not empty and force is not enabled, print a continue or not prompt
	if (!(await directoryEmpty(resolvedDirectory)) && !options.force) {
		const shouldContinue = await p.confirm({
			message: "Destionation directory is not empty, do you want to continue?",
		});
		if (!shouldContinue || p.isCancel(shouldContinue))
			return p.cancel("Operation cancelled.");
	}

	console.log(initialQuestions);
}
