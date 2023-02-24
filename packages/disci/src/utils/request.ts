// utilities to extract common fields from requests

import type { APIInteractionResponse } from "discord-api-types/v10"
import { DisciTypeError, TypeErrorsMessages } from "./errors";


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

const getBody = (rawRequest: IRequest & { rawBody?: Buffer | string }) => {
    return rawRequest.rawBody ? 
            // if there is a raw body
                    typeof rawRequest.rawBody === 'string' ? rawRequest.rawBody : JSON.stringify(rawRequest.rawBody)
                    :
            rawRequest.body ? 
                    typeof rawRequest.body === 'string' ? rawRequest.body : JSON.stringify(rawRequest.body)
                    : null;
}

export function ToRequest(rawRequest: IRequest): IRequest {
    if(typeof rawRequest !== 'object') throw new DisciTypeError(TypeErrorsMessages.ExpectedParameter('rawRequest', 'object', typeof rawRequest))
    const body = getBody(rawRequest);
    if(!body) throw new DisciTypeError(TypeErrorsMessages.ExpectedParameter(`rawRequest.body`, 'object'))
    return {
        body,
        headers: (rawRequest.headers ?? {})
    }
}
  

// response related

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

export function toResponse(data: string | APIInteractionResponse, status = 200): IResponse {
    return {
        responseData:  typeof data === 'string' ? { data } : data,
        statusCode: status,
        responseHeaders: {
            'content-type': 'application/json'
        }
    }
}