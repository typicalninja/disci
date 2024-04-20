import type { InteractionHandler } from "../InteractionHandler";

export abstract class Base<T> {
    /**
     * Raw json details as returned from http request/response
     */
    public readonly raw: T
    /**
     * Interaction handler that manages this structure
     */
    public readonly handler: InteractionHandler

    constructor(raw: T, handler: InteractionHandler) {
        // we have to do it this way for docs
        this.raw = raw;
        this.handler = handler;
    }
}