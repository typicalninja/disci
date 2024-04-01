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

/**
 * Removes null and undefined values from a object and return the result
 * @param obj
 * @returns
 */
export const serializeObject = <T extends Record<string, unknown>>(
	obj: T,
): T => {
	const newObj = {} as T;
	for (const [key, value] of Object.entries(obj)) {
		if (key === null || key === undefined) continue;
		if (value === null || value === undefined) continue;
		Object.defineProperty(newObj, key, { value, enumerable: true });
	}

	return newObj;
};

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
