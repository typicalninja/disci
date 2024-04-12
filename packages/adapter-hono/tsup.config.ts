import { createTsupConfig } from "../../tsup.config";

export default [
	createTsupConfig({
		entry: ["index.ts"],
		format: ['esm']
	}),
];
