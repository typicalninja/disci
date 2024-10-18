import { type Options, defineConfig } from "tsup";

export function createTsupConfig({
	entry = ["src/index.ts"],
	external = [],
	noExternal = [],
	platform = "node",
	format = ["cjs", "esm"],
	target = "esnext",
	skipNodeModulesBundle = true,
	clean = true,
	shims = false,
	minify = false,
	splitting = false,
	keepNames = false,
	dts = true,
	sourcemap = false,
	esbuildPlugins = [],
	outDir = "dist",
}: Options = {}) {
	return defineConfig({
		entry,
		external,
		noExternal,
		platform,
		format,
		skipNodeModulesBundle,
		target,
		clean,
		shims,
		minify,
		splitting,
		keepNames,
		dts,
		sourcemap,
		esbuildPlugins,
		outDir,
	});
}
