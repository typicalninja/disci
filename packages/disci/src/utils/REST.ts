import { fetch } from 'undici'
import { URLS } from './constants';
import { URLSearchParams } from 'node:url';

export interface RestClient {
    makeRequest: <T>(method: string, path: string, opts: RESTCommonOptions) => Promise<T>;
    resolveHeaders: (headers: Record<string, string>) => Record<string, string>,
    authToken: string;
    rootUrl: string;
}

export interface RESTClientOptions {
    token: string;
    authPrefix?: 'bot';
    baseUrl?: string;
    rootUrl?: string
}

export type RouteLike<> = `/${string}`
export interface RESTCommonOptions {
  headers?: Record<string, string>;
  body?: Record<string, string>
  query?: Record<string, string>
}

/**
 * Default rest handler, built for serverLess Environments without any ratelimit checks
 */
export class Rest implements RestClient {
    authPrefix: string;
    authToken: string;
    rootUrl: string;
    constructor(_opts: RESTClientOptions) {
        this.authPrefix = _opts.authPrefix || 'bot';
        this.authToken = _opts.token;
        this.rootUrl = _opts.rootUrl || URLS.DiscordApi;
    }
    async makeRequest<T>(method: string, path: string, opts: RESTCommonOptions): Promise<T> {
        const req = await fetch(this.getUrl(path, opts.query), {
            method,
            
        });

        if(!req.ok) throw new Error(`Request [${method}:${path}] Returned ${req.status} [${req.statusText}]`);
        if(req.status === 200) return await req.json() as T
        else return await req.arrayBuffer() as T
    }
    get<T>(path: string, opts: RESTCommonOptions): Promise<T> {
        return this.makeRequest<T>('GET', path, opts)
    }
    post<T>(path: string, opts: RESTCommonOptions): Promise<T> {
        return this.makeRequest<T>('GET', path, opts)
    }
    patch<T>(path: string, opts: RESTCommonOptions): Promise<T> {
        return this.makeRequest<T>('GET', path, opts)
    }
    resolveHeaders(givenOpts: RESTCommonOptions) {
        const finalHeaders: Record<string, string> = {};
        if(givenOpts.authHeader && givenOpts.authHeader === true) {
            Object.defineProperty(finalHeaders, 'Authorization', { value: this.authheader, enumerable: true, writable: false })
        }

        return finalHeaders;
    }
    private getUrl(path: string, queryParams?: Record<string, string>) {
        const formattedPath = path.startsWith('/') ? path.slice(1) : path;
        let url = `${this.rootUrl}${formattedPath}`;
        if(queryParams) {
            url = `${url}?${new URLSearchParams(queryParams).toString()}`
        }
        return url;
    }
    get authheader() {
        return `${this.authPrefix} ${this.authToken}`
    }
}


const r = new Rest('')

r.get({
    path: '/test'
})