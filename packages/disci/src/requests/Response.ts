/**
 * Enum holding possible responseStatus Codes
 */
export enum ResponseStatusCodes {
	OK = 200,
	BadRequest = 400,
	Unauthorized = 401,
	MethodNotAllowed = 405,
	InternalServerError = 500,
}

interface ErrorContent {
	error: string;
}

export interface DisciResponse<T> {
	/**
	 * Stringified json of the content returned as response,
	 *
	 * use {@link DisciResponse.content} for raw data.
	 */
	body: string;
	/**
	 * Raw Content of the returned response
	 */
	content: T | ErrorContent;
	/**
	 * Status Code of the returned Response
	 */
	status: ResponseStatusCodes;
}

export function ProvideResponse<ResponseType>(
	content: ResponseType | ErrorContent,
	status: ResponseStatusCodes = ResponseStatusCodes.OK,
): DisciResponse<ResponseType> {
	return {
		body: JSON.stringify(content),
		content,
		status,
	};
}
