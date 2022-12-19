import type { APIInteraction } from "discord-api-types/v10";
import type { EventEmitter } from "events";
import type BaseInteractionContext from "../structures/context/BaseInteractionContext";
import type { RequestTransformer, ResponseTransformer } from "./transformers";

export enum RequestEvents {
    /**
     * Fired when a new Request comes through (unverified)
     */
    requestCreate = 'requestCreate',
    /**
     * When a request is succefully verified as a Interaction orginating from discord (raw data)
     */
    rawInteractionCreate = 'rawInteractionCreate',
    /**
     * When a request is succefully identified as a Interaction and context is created
     */
    interactionCreate ='interactionCreate'
}
export interface ClientEvents {
    'requestCreate': (
      requestData: { request: RequestTransformer<any>; reply: ResponseTransformer<any> },
      verified: boolean
    ) => void;
    'rawInteractionCreate': (
      requestData: { request: RequestTransformer<any>; reply: ResponseTransformer<any> },
    ) => void;
    'interactionCreate': (InteractionContext: BaseInteractionContext) => void;
}

export function AfterEvent(emitter: EventEmitter, eventName: string, timeout:number = 6000) {
    return new Promise((resolve, reject) => {
        emitter.once(eventName, resolve)
       if(timeout) setTimeout(reject, timeout)
    });
}