import type { Snowflake } from "discord-api-types/globals";
import { DiscordEpoch } from "./constants";

/**
 * Converts a discord id to a timestamp
 * @param id - SnowFlake id
 * @returns
 */
export const convertSnowflakeToTimeStamp = (id: Snowflake): number => {
	// just a little hack, since ids are too large
	const milliseconds = BigInt(id) >> 22n;
	return Number(milliseconds) + DiscordEpoch;
};

/** encapsulates a fn in try catch block and return value/null */
export function tryAndValue<ReturnType>(
	fn: () => ReturnType,
): ReturnType | null {
	try {
		return fn();
	} catch {
		return null;
	}
}

/**
 * Checks if a value is a object
 */
export const isObject = (value: unknown) =>
	value !== null && typeof value === "object" && !Array.isArray(value);

//! impl: discord.js (https://github.com/discordjs/discord.js/blob/main/packages/rest/src/lib/utils/utils.ts#L140)
/**
 * Verifies that a value is a buffer-like object.
 *
 * @param value - The value to check
 */
export function isBufferLike(
	value: unknown,
): value is ArrayBuffer | Buffer | Uint8Array | Uint8ClampedArray {
	return (
		value instanceof ArrayBuffer ||
		value instanceof Uint8Array ||
		value instanceof Uint8ClampedArray
	);
}
