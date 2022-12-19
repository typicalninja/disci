import type { EventEmitter } from "stream";

export function AfterEvent(emitter: EventEmitter, eventName: string, timeout:number = 6000) {
    return new Promise((resolve, reject) => {
        emitter.once(eventName, resolve)
       if(timeout) setTimeout(reject, timeout)
    });
}