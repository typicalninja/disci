import type { APIInteractionResponse } from "discord-api-types/v10";
import type { EventEmitter } from "events";
import type { InteractionContext } from "./constants";
import type { RequestTransformer, ResponseTransformer } from "./transformers";

/**
 * Names of {@link ClientEvents}
 */
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
    'interactionCreate': (InteractionContext: InteractionContext) => void;
}

export const getResponseEvent = (eventId: string) => `reply_${eventId}`;
export type InternalReplyEvent = { type: 'timeout' | 'done'  ; data: APIInteractionResponse | null }

export function WaitForEvent<ReturnType extends InternalReplyEvent>(emitter: EventEmitter, eventName: string, timeout: number = 6000): Promise<ReturnType> {
    return new Promise((resolve, reject) => {
        // a variable, so we can clear timeout if it does not timeout
        let time: NodeJS.Timeout | undefined;
        // if timeout is specified
        if(timeout) time = setTimeout(() => {
            // emit the event with type timeout
            emitter.emit(eventName, {
                type: 'timeout',
                data: null
            } as ReturnType);
            return reject(`Wait for event: ${eventName} timed out`)
         }, timeout)


        function done(args: ReturnType) {
            // if timeout return
            if(args.type === 'timeout') return;
            // clear the timeout
            if(time) clearTimeout(time)
            return resolve(args);
        }

        // attach the event
        emitter.once(eventName, done)
    });
}