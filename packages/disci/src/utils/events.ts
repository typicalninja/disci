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
    interactionCreate ='interactionCreate',
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

export const getResponseEvent = (eventId: string) => `reply_${eventId}`;
export const getRepliedEvent = (eventId: string) => `replied_${eventId}`;

export function WaitForEvent(emitter: EventEmitter, eventName: string, timeout:number = 6000): Promise<any> {
    console.log('watching for;', eventName)
    return new Promise((resolve, reject) => {
        // a variable, so we can clear timeout if it does not timeout
        let time: NodeJS.Timeout | undefined;

        // if timeout is specified
        if(timeout) time = setTimeout(() => {
            return reject(`Wait for event: ${eventName} timed out`)
         }, timeout)


        function done(args: any) {
            if(time) clearTimeout(time)
            return resolve(args);
        }
        emitter.once(eventName, done)
    });
}