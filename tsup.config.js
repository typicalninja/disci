
import { defineConfig } from 'tsup';

export function createTsupConfig({
	entry = ['src/index.ts'],
	external = [],
	noExternal = [],
	platform = 'node',
	format = ['cjs'],
	target = 'es2022',
	skipNodeModulesBundle = true,
	clean = false,
	shims = false,
	minify = false,
	splitting = false,
	keepNames = true,
	dts = true,
	sourcemap = true,
	esbuildPlugins = [],
	outDir = 'dist',
} = {}) {
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