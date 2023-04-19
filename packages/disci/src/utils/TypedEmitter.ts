// typed emitter
export interface TypedEmitter<Events> {
  /** @hidden */
  addListener<E extends keyof Events>(event: E, listener: Events[E]): this
  /** @hidden */
  on<E extends keyof Events>(event: E, listener: Events[E]): this
  /** @hidden */
  once<E extends keyof Events>(event: E, listener: Events[E]): this
  /** @hidden */
  prependListener<E extends keyof Events>(event: E, listener: Events[E]): this
  /** @hidden */
  prependOnceListener<E extends keyof Events>(event: E, listener: Events[E]): this

  /** @hidden */
  off<E extends keyof Events>(event: E, listener: Events[E]): this
  /** @hidden */
  removeAllListeners<E extends keyof Events>(event?: E): this
  /** @hidden */
  removeListener<E extends keyof Events>(event: E, listener: Events[E]): this

  /** @hidden */
  emit<E extends keyof Events>(event: E, ...args: Arguments<Events[E]>): boolean
  /** @hidden */
  eventNames(): (keyof Events | string | symbol)[]
  /** @hidden */
  rawListeners<E extends keyof Events>(event: E): (() => void)[]
  /** @hidden */
  listeners<E extends keyof Events>(event: E): (() => void)[]
  /** @hidden */
  listenerCount<E extends keyof Events>(event: E): number

  /** @hidden */
  getMaxListeners(): number
  /** @hidden */
  setMaxListeners(maxListeners: number): this
}

/** @hidden */
export type Arguments<T> = [T] extends [(...args: infer U) => unknown] ? U : [T] extends [void] ? [] : [T]
