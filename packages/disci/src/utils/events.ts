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
