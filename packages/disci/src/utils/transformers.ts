// utilities to extract common fields from requests

import type { APIInteractionResponse } from "discord-api-types/v10"

export type CommonHttpRequest = { 
    headers?: Record<string, string>,

    // body related
    body?: string | Record<string, any> | Buffer,
    rawBody?: string
}


export class RequestTransformer<RequestType extends CommonHttpRequest> {
    body: Buffer
    headers: Record<string, string>;
    rawBody: string
    constructor(public req: RequestType) {
      this.body = this.resolveBody(req.body ?? req.rawBody)
      this.rawBody = req.rawBody ? (typeof req.rawBody === 'string' ? req.rawBody : JSON.stringify(req.rawBody)) : (typeof req.body == 'string' ? req.body : JSON.stringify(req.body || '{}'))
      this.headers = req.headers ?? {}
    }
    resolveBody(body: string | Record<string, any> | Buffer | undefined): Buffer {
        if(!body) throw new Error(`Expected a String/buffer/Object as body, received ${typeof body}`)
        return typeof body == 'string' ? Buffer.from(body, "utf-8") : 
                    Buffer.isBuffer(body) ? body 
                        : Buffer.from(JSON.stringify(body), "utf-8")
    }
}

export interface HandlerResponse {
   status: number,
   data: APIInteractionResponse | string
}
export class ResponseTransformer<ResponseType> {
    /**
     * Status code of the response
     */
     statusCode: number
     /**
      * Data that should be sent back as a response / error
      */
     responseData?: APIInteractionResponse | string
     constructor(public res: ResponseType) {
        this.statusCode = 200;

     }
     setStatus(code: number) {
        this.statusCode = code;
        return this;
     }
     setData(data: APIInteractionResponse | string) {
        this.responseData = data;
        return this;
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
            data: this.responseData || 'Unknown'
         }
     }
}