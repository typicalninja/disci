/**
 * Type errors
 */
export const TypeErrorsMessages = {
  ExpectedParameter: (value: string, expected: string, received?: string) =>
    `Expected ${value} as ${expected} ${received ? `but received ${received}` : ''}`,
  ParameterRequired: (parameter: string) => `Parameter ${parameter} is required and must not be null/undefined`,
  PropertyNotFound: (prop: string) => `No ${prop} Found`,
}

// utility to create custom errorClasses
function createError(errorName: string) {
  return class CustomError extends Error {
    constructor(errorMessage: string, data?: ErrorOptions) {
      // Need to pass `options` as the second parameter to install the "cause" property.
      super(errorMessage, data)
      this.name = `[Disci${errorName}]`
      Error.captureStackTrace(this, CustomError)
    }
  }
}

export const DisciError = createError(`Error`)
export const DisciTypeError = createError('TypeError')
export const DisciRestError = createError(`RestError`)
