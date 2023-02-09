/**
 * Default rest adapter use as a abstraction for api requests
 */
export default class RestAdapter {
    get<T>(...args: any[]): Promise<T> { throw new Error(`Adapter.get Not found`) }
    post<T>(...args: any[]): Promise<T> { throw new Error(`Adapter.post Not found`) }
    patch<T>(...args: any[]): Promise<T> { throw new Error(`Adapter.patch Not found`) }
    delete<T>(...args: any[]): Promise<T> { throw new Error(`Adapter.delete Not found`) }
}