// utilities to extract common fields from requests

import type { APIInteractionResponse } from "discord-api-types/v10"

type CommonHttpRequest = { 
    headers?: Record<string, string>,

    // body related
    body?: string | Record<string, any> | Buffer,
    rawBody?: string
}


export class RequestTransformer<RequestType extends CommonHttpRequest> {
    body: Buffer
    headers: Record<string, string>
    constructor(public req: RequestType) {
      this.body = this.resolveBody(req.body ?? req.rawBody)
      this.headers = req.headers ?? {}
    }
    resolveBody(body: string | Record<string, any> | Buffer | undefined): Buffer {
        if(!body) throw new Error(`Expected a String/buffer/Object as body, received ${typeof body}`)
        return typeof body == 'string' ? Buffer.from(body, "utf-8") : 
                    Buffer.isBuffer(body) ? body 
                        : Buffer.from(JSON.stringify(body), "utf-8")
    }
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
     reply(data: APIInteractionResponse | string) {
        this.responseData = data;
        return this;
     }
     /**
      * Convert class Data to a object
      */
     toRaw(): {
        status: number,
        data: APIInteractionResponse | string
     } {
        return {
            status: this.statusCode,
            data: this.responseData || 'Unknown'
         }
     }
}