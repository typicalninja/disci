import { createTsupConfig } from "../../tsup.config";

export default [
	createTsupConfig({
		entry: ["src/index.ts"],
		splitting: false,
	}),
];
