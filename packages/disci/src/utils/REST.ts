import { fetch } from 'undici'

export interface RestClient {
    makeRequest: <T>() => Promise<T>;
    resolveHeaders: (headers: Record<string, string>) => Record<string, string>,
    authToken: string;
    rootUrl: string;
}

export interface RESTClientOptions {
    token: string;
    authPrefix?: 'bot';
    baseUrl?: string;
}

export type RouteLike<> = `/${string}`
export interface RESTCommonOptions {
    path: RouteLike;
    timeout?: number;
    headers?: Record<string, string>;
    authHeader?: boolean;
}

/**
 * Default rest handler, built for serverLess Environments without any ratelimit checks
 */
export class Rest implements RestClient {
    authPrefix: string;
    authToken: string;
    constructor(_opts: RESTClientOptions) {
        this.authPrefix = _opts.authPrefix || 'bot';
        this.authToken = _opts.token;
    }
    makeRequest<T>(method: string, path: string, op): Promise<T> {

    }
    async get<T>(opts: RESTCommonOptions): Promise<T> {
        const request = await fetch(opts.path)
    }
    private resolveHeaders(givenOpts: RESTCommonOptions) {
        const finalHeaders: Record<string, string> = {};
        if(givenOpts.authHeader && givenOpts.authHeader === true) {
            Object.defineProperty(finalHeaders, 'Authorization', { value: this.authheader, enumerable: true, writable: false })
        }

        return finalHeaders;
    }
    get authheader() {
        return `${this.authPrefix} ${this.authToken}`
    }
}


const r = new Rest('')

r.get({
    path: '/test'
})