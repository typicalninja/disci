#!/usr/bin/env node
import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { runInitCommand } from "./commands/init";

yargs(hideBin(process.argv))
	.scriptName("discik")
	// handles creation of new discik projects
	.command(
		"init [directory]",
		"Creates a starter discik project",
		(yargs) => {
			return yargs
				.option("force", {
					alias: "f",
					type: "boolean",
				})
				.option("noInstall", {
					alias: "ni",
					type: "boolean",
					describe:
						"Skip installing required packages and adapters. (Will have to manually install)",
				})
				.positional("directory", {
					default: ".",
				});
		},
		(argv) => runInitCommand(argv),
	)
	.help()
	.parse();
