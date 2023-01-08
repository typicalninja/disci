// utilities to extract common fields from requests

import type { APIInteractionResponse } from "discord-api-types/v10"
import { nanoid } from "nanoid";

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

export interface HandlerResponse {
   /**
    * Status code for this response
    */
   status: number;
   /**
    * Response to the request
    */
   responseData: APIInteractionResponse | string;
   /**
    * Response headers set according to the data 
    */
   responseHeaders?: Record<string, string>
}

/**
 * Create a Common Response type from given type
 * @private
 */
export class ResponseTransformer<ResponseType> {
    /**
     * Status code of the response
     */
     statusCode: number;
     /**
      * Data that should be sent back as a response / error
      */
     responseData?: APIInteractionResponse | string;
     /**
      * Random id, used internally to respond to this request
      */
     responseId: string;
     /**
      * Headers used in a response
      */
     responseHeaders: Record<string, string>;
     constructor(public res: ResponseType) {
        this.statusCode = 200;
        this.responseId = nanoid(9);
        this.responseHeaders = {};
     }
     setStatus(code: number) {
        this.statusCode = code;
        return this;
     }
     setData(data: APIInteractionResponse | string) {
        if(typeof data === 'string') this.setHeader('content-type', 'text/plain')
        else this.setHeader('content-type', 'application/json')

        this.responseData = data;
        return this;
     }
     setHeader(headerName: string, value: string) {
        return Object.defineProperty(this.responseHeaders, headerName, { value, enumerable: true, writable: true })
     }
     reply(data: string | APIInteractionResponse, code: number = 200): HandlerResponse {
         this.setData(data);
         this.setStatus(code);
         return this.toRaw();
     }
     /**
      * Convert class Data to a object
      */
     toRaw(): HandlerResponse {
        return {
            status: this.statusCode,
            responseData: this.responseData || 'Unknown',
            responseHeaders: this.responseHeaders
         }
     }
}