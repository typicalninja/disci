import { createTsupConfig } from "../../tsup.config";

export default [
	createTsupConfig({
		entry: ["src/lib/index.ts", "src/cli/cli.ts"],
		format: ["esm"],
	}),
];
