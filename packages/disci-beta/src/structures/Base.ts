import type { InteractionHandler } from "../InteractionHandler";

export abstract class Base<T> {
    constructor(public readonly raw: T, public handler: InteractionHandler) {}
}