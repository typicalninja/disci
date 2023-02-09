import type { URLSearchParams } from "url";


/**
 * Global rest adapter config
 * 
 * similiar to https://discordjs.dev/docs/packages/rest/1.5.0/RequestData:Interface
 */
export interface RestAdapterRequestConfig {
        /**
     * path To request
     */
    path: string;
    /**
     * String of url search params with '?' prefixed
     */
    query?: URLSearchParams;
    /**
     * Body of the request
     */
    body?: Record<string, string>
}
/**
 * Default rest adapter use as a abstraction for api requests
 */
export interface IRestAdapter {
    get: <T>(config: RestAdapterRequestConfig) =>  Promise<T>;
    post:  <T>(config: RestAdapterRequestConfig) =>  Promise<T>;
    patch: <T>(config: RestAdapterRequestConfig) =>  Promise<T>;
    delete:  <T>(config: RestAdapterRequestConfig) =>  Promise<T>;
}

export class DefaultNonImplementedRestAdapter implements IRestAdapter {
    get<T>(..._: any[]): Promise<T> {
        throw new Error(`DefaultRest Adapter cannot do requests`)
    }
    post<T>(..._: any[]): Promise<T> {
        throw new Error(`DefaultRest Adapter cannot do requests`)
    }
    delete<T>(..._: any[]): Promise<T> {
        throw new Error(`DefaultRest Adapter cannot do requests`)
    }
    patch<T>(..._: any[]): Promise<T> {
        throw new Error(`DefaultRest Adapter cannot do requests`)
    }
}