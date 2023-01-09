// utilities to extract common fields from requests

import type { APIInteractionResponse } from "discord-api-types/v10"


export type CommonHttpRequest = { 
    headers?: any,
    // body related
    body?: any,
    rawBody?: string
}

/**
 * Create a Common Request type from given type
 * @private
 */
export class RequestTransformer<RequestType extends CommonHttpRequest> {
   /**
    * Body of the request as a buffer
    * @readonly
    */
    body: Buffer
    /**
     * Headers from the request, for internal use
     * @readonly
     */
    headers: Record<string, string>;
    /**
     * Raw body of the request as it was received, as string
     * @readonly
     */
    rawBody: string
    constructor(public req: RequestType) {
      this.body = this.resolveBody(req.body || req.rawBody)
      this.rawBody =  req.rawBody ? (typeof req.rawBody === 'string' ? req.rawBody : JSON.stringify(req.rawBody)) : (typeof req.body == 'string' ? req.body : JSON.stringify(req.body || '{}'))
      this.headers = Object.freeze(req.headers ?? {})
    }
     /**
     * Resolve a body of various types
     * @private
     */
    private resolveBody(body: string | Record<string, any> | Buffer | undefined): Buffer {
        if(!body) throw new Error(`Expected a String/buffer/Object as body, received ${typeof body}`)
        return typeof body == 'string' ? Buffer.from(body, "utf-8") : 
                    Buffer.isBuffer(body) ? body 
                        : Buffer.from(JSON.stringify(body), "utf-8")
    }
}
/**
 * Data returned by handleRequest
 */
export interface IHandlerResponse {
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