import isEqual from "lodash.isequal";

export function match(value: any, ...patterns: any[]) {
    return patterns.some(pattern => isEqual(value, pattern));
}

export function tryAndValue<ReturnType> (fn: () => ReturnType) {
    try {
        return fn();
    }
    catch {
        return null;
    }
}

export function createError(errorName: string) {
    return class CustomError extends Error {
        constructor(message: string) {
            // Need to pass `options` as the second parameter to install the "cause" property.
            super(message);
            this.name = `Disci${errorName}`
            Error.captureStackTrace(this, CustomError)
          }
    }
}

export const DisciParseError = createError("ParseError");
export const DisciValidationError = createError("ValidationError");