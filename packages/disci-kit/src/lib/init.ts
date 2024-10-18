import { exec as execSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";
import pc from "picocolors";
import whichpm from "which-pm";
import { type DisckConfig, configSchema } from "./utils/constants";
import { directoryEmpty, directoryExists, logger } from "./utils/helpers";

const exec = util.promisify(execSync);

export async function createConfigFile(
	at: string,
): Promise<DisckConfig | null> {
	try {
		// zod.parse with empty obj will return the default values for the object schema
		const config = await configSchema.parseAsync({});
		await fs.writeFile(at, JSON.stringify(config, null, 4));
		return config;
	} catch (err) {
		logger.error(`Could not create base config at ${pc.red(at)}`);
		logger.details(err);
		return null;
	}
}

export async function createEssentialDirectories(srcDirectory: string) {
	const handler = path.resolve(srcDirectory, "./handlers");
	const libDir = path.resolve(srcDirectory, "./lib");

	const commandHandler = path.resolve(handler, "./commands/");
	const componentHandler = path.resolve(handler, "./components/");

	logger.info("Creating handler directories.");

	try {
		await fs.mkdir(libDir, { recursive: true });
		await fs.mkdir(commandHandler, { recursive: true });
		await fs.mkdir(componentHandler, { recursive: true });
		return true;
	} catch (err) {
		logger.error("Failed to create essential directories");
		logger.details(err);

		return null;
	}
}

export async function createPackageJSON(dir: string) {
	const pkgJSON = {
		name: path.basename(dir),
		version: "1.0.0",
		public: false,
		type: "module",
	};

	try {
		await fs.writeFile(
			path.resolve(dir, "package.json"),
			JSON.stringify(pkgJSON, null, 4),
		);
		return true;
	} catch {
		return null;
	}
}

export async function installRequiredPackages(
	dir: string,
	config: DisckConfig,
	packageManager?: string,
) {
	const pm = packageManager
		? { name: packageManager }
		: (await whichpm(process.cwd())) || "npm";
	logger.info(`Installing packages using ${pm.name}`);
	const args = [];

	// install the adapter
	args.push(`@disci/adapter-${config.adapter}`);
	args.push("disci");

	try {
		const { stdout } = await exec(`${pm.name} install ${args.join(" ")}`, {
			cwd: dir,
		});
		console.log(stdout);
		return true;
	} catch (e) {
		logger.error(`Failed to install packages using ${pm.name}`);
		logger.details(e);
		return null;
	}
}

export async function init(
	directory: string,
	force = false,
	noInstall = false,
	packageManager?: string,
) {
	const destinationDirectory = path.resolve(directory);
	logger.info("Creating project..");
	logger.details(`@ ${pc.green(destinationDirectory)}`);

	if (await directoryExists(destinationDirectory)) {
		if (!(await directoryEmpty(destinationDirectory)) && !force) {
			return logger.error(
				"Destination directory is not empty, delete it or use --force",
			);
		}
		await fs.rm(destinationDirectory, { recursive: true });
	}

	logger.info("Initiating the destination directory....");
	// directory does not exist, create it here
	await fs.mkdir(destinationDirectory, { recursive: true });

	// create & save the default config and returns it
	const config = await createConfigFile(
		path.join(destinationDirectory, "kit.json"),
	);
	if (!config) return;

	const eDirectoryCS = await createEssentialDirectories(
		path.resolve(destinationDirectory, config.srcDir),
	);
	if (!eDirectoryCS) return;

	if (noInstall) {
		logger.warn(
			"Package installation disabled... please install the required packages manually.",
		);
	} else {
		await createPackageJSON(destinationDirectory);
		await installRequiredPackages(destinationDirectory, config, packageManager);
	}
}
