import type { URLSearchParams } from "url";


/**
 * Global rest adapter config
 * 
 * similiar to https://discordjs.dev/docs/packages/rest/1.5.0/RequestData:Interface
 */

export type RouteLike = `/${string}`
export interface IRestAdapterRequestConfig {
        /**
     * path To request
     */
    path: RouteLike;
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
    get: <T>(config: IRestAdapterRequestConfig) =>  Promise<T>;
    post:  <T>(config: IRestAdapterRequestConfig) =>  Promise<T>;
    patch: <T>(config: IRestAdapterRequestConfig) =>  Promise<T>;
    delete:  <T>(config: IRestAdapterRequestConfig) =>  Promise<T>;
    put:  <T>(config: IRestAdapterRequestConfig) =>  Promise<T>;
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
    put<T>(..._: any[]): Promise<T> {
        throw new Error(`DefaultRest Adapter cannot do requests`)
    }
}