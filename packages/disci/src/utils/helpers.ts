import type { Snowflake } from "discord-api-types/globals";
import type { IResponse } from "./request";

export const DiscordEpoch = 14200704e5;
/**
 * Converts a discord id to a timestamp
 * @param id - SnowFlake id
 * @returns 
 */
export const convertSnowflakeToTimeStamp = (id: Snowflake): number => {
    // just a little hack, since ids are too large 
    const milliseconds = BigInt(id) >> 22n
    return Number(milliseconds) + DiscordEpoch
}

/** encapsulates a fn in try catch block and return value/null */
export function tryAndValue<ReturnType> (fn: () => ReturnType) {
    try {
        return fn();
    }
    catch {
        return null;
    }
}
