import { URLS } from "./constants";
import { isBufferLike, serializeObject, tryAndValue } from "./common";

// userAgent used in requests
const UserAgent =
	`DiscordBot (https://github.com/typicalninja/disci, 0.0.1)`.trim();

export interface RestClient {
	makeRequest: <T>(
		method: string,
		path: string,
		opts: RESTCommonOptions,
	) => Promise<T>;
	authToken: string | null;
	rootUrl: string;
}

export interface RESTClientOptions {
	/**
	 * Client token, alternatively provide it with \<rest\>.setToken
	 */
	token?: string;
	authPrefix?: "bot";
	rootUrl?: string;
}

export interface RESTFile {
	/**
	 * Content-Type of the file
	 */
	contentType?: string;
	/**
	 * The actual data for the file
	 */
	data: Buffer | Uint8Array | boolean | number | string;
	/**
	 * An explicit key to use for key of the formdata field for this file.
	 * When not provided, the index of the file in the files array is used in the form `files[${index}]`.
	 * If you wish to alter the placeholder snowflake, you must provide this property in the same form (`files[${placeholder}]`)
	 */
	key?: string;
	/**
	 * The name of the file
	 */
	name: string;
}

export interface RESTCommonOptions {
	headers?: Record<string, string>;
	body?: Record<string, unknown>;
	query?: Record<string, unknown> | URLSearchParams;
	/**
	 * Files to be attached to this request
	 */
	files?: RESTFile[];
	/**
	 * Whether to append JSON data to form data instead of `payload_json` when sending files
	 */
	appendBodyToForm?: boolean;
	/**
	 * If this request needs the `Authorization` header
	 */
	auth?: boolean;
	/**
	 * Reason to show in the audit logs
	 *
	 */
	reason?: string;
}

/**
 * Default rest handler, built for serverLess Environments without any rate limit checks
 */
export class Rest implements RestClient {
	authPrefix: string;
	authToken: string | null;
	rootUrl: string;
	/**
	 * for support of serverless and other platforms
	 */
	constructor(opts?: RESTClientOptions) {
		this.authPrefix = opts?.authPrefix || "Bot";
		this.authToken = opts?.token || null;
		this.rootUrl = opts?.rootUrl
			? opts.rootUrl.endsWith("/")
				? opts.rootUrl.slice(0, opts.rootUrl.length - 1)
				: opts.rootUrl
			: URLS.DiscordApi;
	}
	/**
	 * Set the current active token, request may fail if this is not set
	 * @param token
	 * @returns
	 */
	setToken(token: string) {
		if (typeof token !== "string" || token === "")
			throw new TypeError(
				`Token must be a valid string, received ${typeof token}`,
			);
		this.authToken = token;
		return this;
	}

	async makeRequest<T>(
		method: string,
		path: string,
		opts?: RESTCommonOptions,
	): Promise<T> {
		const request = this.getRequest(path, method, opts);

		const req = await fetch(this.getUrl(path, opts?.query), request.init);

		if (!req.ok) {
			const errors = await tryAndValue(() => req.json());
			throw new Error(
				`Request to [${method}:${path}] returned ${req.status} [${req.statusText}]`,
				{
					cause: errors,
				},
			);
		}
		// get the returned content type
		const contentType = req.headers.get("content-type");
		// if a json response returned
		if (contentType && contentType.includes("application/json"))
			return (await req.json()) as T;
		else return (await req.arrayBuffer()) as T;
	}
	get<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
		return this.makeRequest<T>("GET", path, opts);
	}
	post<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
		return this.makeRequest<T>("POST", path, opts);
	}
	put<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
		return this.makeRequest<T>("PUT", path, opts);
	}
	patch<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
		return this.makeRequest<T>("PATCH", path, opts);
	}
	delete<T>(path: string, opts?: RESTCommonOptions): Promise<T> {
		return this.makeRequest<T>("DELETE", path, opts);
	}
	private getUrl(
		path: string,
		queryParams?: Record<string, unknown> | URLSearchParams,
	) {
		let url: string;
		if (path.startsWith("/")) {
			url = `${this.rootUrl}${path}`;
		} else if (path.startsWith("https://") || path.startsWith("http://")) {
			// its a regular url
			url = path;
		} else {
			url = `${this.rootUrl}/${path}`;
		}

		if (queryParams) {
			url = `${url}?${new URLSearchParams(
				queryParams as Record<string, string>,
			).toString()}`;
		}
		return url;
	}
	get authHeader() {
		return `${this.authPrefix} ${this.authToken}`;
	}

	getRequest(
		path: string,
		method: string,
		options?: RESTCommonOptions,
	): { init: RequestInit; url: string } {
		const baseHeaders = {
			"User-Agent": UserAgent,
		} as Record<string, string>;

		// check if adding the auth header is necessary for this request
		if (options?.auth !== false) {
			if (!this.authToken)
				throw new Error(`Auth token was expected for request but was not set`);
			baseHeaders.Authorization = this.authHeader;
		}

		// if reason is present, attach the header
		if (options?.reason && options.reason.length) {
			baseHeaders["X-Audit-Log-Reason"] = encodeURIComponent(options.reason);
		}

		if (options?.headers) {
			Object.assign(baseHeaders, options.headers);
		}

		let fBody: RequestInit["body"];

		//! impl: from d.js
		if (options?.files?.length) {
			const formData = new FormData();

			// add files to formData
			for (const [index, file] of options.files.entries()) {
				const fileKey = file.key ?? `files[${index}]`;
				if (isBufferLike(file.data)) {
					const contentType = file.contentType;
					if (!contentType)
						throw new Error(
							`Expected content type for file (${fileKey}) to be a string`,
						);
					formData.append(
						fileKey,
						new Blob([file.data], { type: contentType }),
						file.name,
					);
				} else
					formData.append(
						fileKey,
						new Blob([`${file.data}`], { type: file.contentType }),
						file.name,
					);
			}

			// if body is available with files
			if (options.body) {
				options.body = serializeObject(options.body);
				// if should append directly to formData
				if (options.appendBodyToForm) {
					for (const [key, value] of Object.entries(
						options.body as Record<string, string>,
					)) {
						formData.append(key, value);
					}
				}
				// else append a stringified body to payload_json key
				else formData.append("payload_json", JSON.stringify(options.body));
			}

			fBody = formData;
		}
		// if body is present but files are not present
		else if (options?.body) {
			fBody = JSON.stringify(serializeObject(options.body));
			baseHeaders["Content-Type"] = "application/json";
		}

		const request: RequestInit = {
			method: method.toUpperCase(),
			headers: baseHeaders,
			body: fBody,
		};

		return {
			init: request,
			url: this.getUrl(path, options?.query),
		};
	}
}
