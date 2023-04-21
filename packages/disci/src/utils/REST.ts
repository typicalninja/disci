import fetch from 'cross-fetch'
import { URLS } from './constants'
//import { URLSearchParams } from 'node:url'
import { DisciRestError } from './errors'

// userAgent used in requests
const UserAgent = `DiscordBot (https://github.com/typicalninja493/disci, 0.0.1)`.trim()

export interface RestClient {
  makeRequest: <T>(method: string, path: string, opts: RESTCommonOptions) => Promise<T>
  authToken: string
  rootUrl: string
}

export interface RESTClientOptions {
  token: string
  authPrefix?: 'bot'
  rootUrl?: string
}
export interface RESTCommonOptions {
  headers?: Record<string, string>
  body?: Record<string, string>
  query?: Record<string, string>
}

/**
 * Default rest handler, built for serverLess Environments without any ratelimit checks
 */
export class Rest implements RestClient {
  authPrefix: string
  authToken: string
  rootUrl: string
  /**
   * for support of serverless and other platforms
   */
  //private urlsearchParams: URLSearchParams
  constructor(_opts: RESTClientOptions) {
    this.authPrefix = _opts.authPrefix || 'Bot'
    this.authToken = _opts.token
    this.rootUrl = _opts.rootUrl
      ? _opts.rootUrl.endsWith('/')
        ? _opts.rootUrl.slice(0, _opts.rootUrl.length - 1)
        : _opts.rootUrl
      : URLS.DiscordApi
  }
  async makeRequest<T>(method: string, path: string, opts?: RESTCommonOptions): Promise<T> {
    const req = await fetch(this.getUrl(path, opts?.query), {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.authheader,
        'User-Agent': UserAgent,
        ...opts?.headers,
      },
      body: JSON.stringify(opts?.body),
    })

    if (req.status >= 400) {
      const errors = await req.json()
      throw new DisciRestError(`Request to [${method}:${path}] returned ${req.status} [${req.statusText}]`, {
        cause: errors,
      })
    }
    // get the returned content type
    const contentType = req.headers.get('content-type')
    // if a json response returned
    if (contentType && contentType.includes('application/json')) return (await req.json()) as T
    else return (await req.arrayBuffer()) as T
  }
  get<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
    return this.makeRequest<T>('GET', path, opts)
  }
  post<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
    return this.makeRequest<T>('GET', path, opts)
  }
  put<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
    return this.makeRequest<T>('put', path, opts)
  }
  patch<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
    return this.makeRequest<T>('GET', path, opts)
  }
  delete<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
    return this.makeRequest<T>('DELETE', path, opts)
  }
  private getUrl(path: string, queryParams?: Record<string, string>) {
    let url: string
    if (path.startsWith('/')) {
      url = `${this.rootUrl}${path}`
    } else if (path.startsWith('https://') || path.startsWith('http://')) {
      // its a regular url
      url = path
    } else {
      url = `${this.rootUrl}/${path}`
    }

    if (queryParams) {
      url = `${url}?${new URLSearchParams(queryParams).toString()}`
    }
    return url
  }
  get authheader() {
    return `${this.authPrefix} ${this.authToken}`
  }
}
