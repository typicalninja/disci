import type { Snowflake } from "discord-api-types/globals";
import isEqual from "lodash.isequal";
import type { HandlerResponse } from "./transformers";

export const DiscordEpoch = 14200704e5;
export const convertSnowflakeToTimeStamp = (id: Snowflake): number => {
    // just a little hack, since ids are too large 
    const milliseconds = BigInt(id) >> 22n
    return Number(milliseconds) + DiscordEpoch
}

export function match(value: any, ...patterns: any[]) {
    return patterns.some(pattern => isEqual(value, pattern));
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

const idCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
export function generateRandomId(length: number): string {
    let result = '';
    // result must be at the length
    for (let i = 0; i < length; i++) {
        // until it reaches the length add a char to the result (random)
      result += idCharacters.charAt(Math.floor(Math.random() * idCharacters.length));
    }
    return result;
}

export type callBackFunction = (data: HandlerResponse) => void;
export const getRespondCallback = (resolve: Function, timeout: number, timeoutFunc: Function): callBackFunction => {
  const timer = setTimeout(() => timeoutFunc(resolve), timeout)
  return (data: HandlerResponse) => {
    clearTimeout(timer);
    return void resolve(data);
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