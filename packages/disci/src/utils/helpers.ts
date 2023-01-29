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



export type callBackFunction = (data: IResponse) => void;
export const getResponseCallback = (
    resolve: (responseData: IResponse) => void,
    timeout: number,
    timeoutFunction: () => IResponse
    ): callBackFunction => {
        const timer = setTimeout(() => {
            return resolve(timeoutFunction())
        }, timeout);
    return (data: IResponse) => {
        clearTimeout(timer);
        return resolve(data);
    }
}

// utility to create custom errorClasses
function createError(errorName: string) {
    return class CustomError extends Error {
        constructor(message: string, { methodName }: { methodName?: string } = {}) {
            // Need to pass `options` as the second parameter to install the "cause" property.
            super(message);
            this.name = `[Disci${errorName}]`
            if(methodName) this.name += ` ${methodName}()`
            Error.captureStackTrace(this, CustomError)
          }
    }
}




export const DisciParseError = createError("ParseError");
export const DisciValidationError = createError("ValidationError");
export const DisciInteractionError = createError("InteractionError");
export const DisciTypeError = createError('TypeError');
export const DisciError = createError('Error')