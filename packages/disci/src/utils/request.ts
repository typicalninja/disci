// utilities to extract common fields from requests

import type { APIInteractionResponse } from "discord-api-types/v10"

/**
 * Commong Request type containing required parts for our scripts
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
  

/**
 * Data returned by handleRequest
 */
export interface IResponse {
   /**
    * Status code for this response
    */
   statusCode?: number;
   /**
    * Response to the request
    */
   responseData: APIInteractionResponse | string;
   /**
    * Response headers set according to the data 
    */
   responseHeaders?: Record<string, string>
}