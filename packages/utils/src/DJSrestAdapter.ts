import type { IRestAdapter, IRestAdapterRequestConfig } from 'disci'
import { REST } from '@discordjs/rest'

export class DJSRestAdapter implements IRestAdapter {
    private _rest: REST
    constructor(public token: string) {
        if(typeof token !== 'string') throw new Error(`A Token is required for DJS Adapter`)
        this._rest = new REST().setToken(token)
    }
    get<T>(config: IRestAdapterRequestConfig): Promise<T> {
       return this._rest.get(config.path, {
            ...config
        }) as Promise<T>
    }
    post<T>(config: IRestAdapterRequestConfig): Promise<T> {
        return this._rest.post(config.path, {
             ...config
         }) as Promise<T>
     }
     patch<T>(config: IRestAdapterRequestConfig): Promise<T> {
        return this._rest.patch(config.path, {
             ...config
         }) as Promise<T>
     }
     delete<T>(config: IRestAdapterRequestConfig): Promise<T> {
        return this._rest.delete(config.path, {
             ...config
         }) as Promise<T>
     }
     put<T>(config: IRestAdapterRequestConfig): Promise<T> {
        return this._rest.put(config.path, {
             ...config
         }) as Promise<T>
     }
}