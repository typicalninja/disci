// utilities to extract common fields from requests

import type { APIInteractionResponse } from "discord-api-types/v10"

/**
 * Common Request type containing required parts for our scripts
 */
export interface IRequest {
    /**
     * Body of the Request
     */
    body: string;
    /**
     * Headers of the Request
     * Used for validation
     * @readonly
     */
    headers: Record<string, string>;
}

export function ToIRequest(rawRequest: Record<string, any>): IRequest {
    return {
        body: rawRequest.body ?? rawRequest.rawBody,
        headers: rawRequest.headers ?? {}
    }
}
  

/**
 * Data returned by handleRequest
 */
export interface IResponse {
   /**
    * Status code for this response
    */
   statusCode: number;
   /**
    * Response to the request
    */
   responseData: APIInteractionResponse | { data: string };
   /**
    * Response headers set according to the data 
    */
   responseHeaders?: Record<string, string>
}

export function toResponse(data: string | APIInteractionResponse, status: number = 200): IResponse {
    return {
        responseData:  typeof data === 'string' ? { data } : data,
        statusCode: status,
        responseHeaders: {
            'content-type': 'application/json'
        }
    }
}