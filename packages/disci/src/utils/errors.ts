export const ErrorCodes = {
    1001: `Error occurred when trying to parse a request`,
    4000: `Could not Retrieve Error type`,
}

// utility to create custom errorClasses
function createError(errorName: string) {
    return class CustomError extends Error {
        constructor(errorCode: keyof typeof ErrorCodes, data?: Record<string, unknown>) {
            // Need to pass `options` as the second parameter to install the "cause" property.
            super(ErrorCodes[errorCode]);
            this.name = `[Disci${errorName}#${errorCode}]`
            if(data) {
                Object.keys(data).forEach((errKey) => {
                    Reflect.defineProperty(this, errKey, { value: data[errKey], enumerable: true, writable: true })
                })
            }
            Error.captureStackTrace(this, CustomError)
          }
    }
}

export const DisciError = createError(`Error`)