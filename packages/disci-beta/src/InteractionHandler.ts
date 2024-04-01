import EventEmitter from 'events'
import { DefaultConfig, DiscordVerifyHeaders, EventNames, InternalEventNames, type GenericRequest, type HandlerConfig } from './utils/constants';
import { verify } from "discord-verify"
import { InteractionType, type APIInteraction, InteractionResponseType, APIInteractionResponse } from 'discord-api-types/v10';
import { InteractionFactory } from './utils/Factories';
import { Rest } from './utils/REST';

export class InteractionHandler extends EventEmitter {
    readonly config: HandlerConfig
    api: Rest;
    constructor(config: Partial<HandlerConfig>) {
        super();
        this.config = Object.assign({}, DefaultConfig, config);
        this.api = new Rest({ })
    }

    /**
     * Process a verified request into a interaction
     * 
     * Does not verify requests on its own, called by {@link InteractionHandler.handleRequest}
     */
    processInteraction(rawInteraction: APIInteraction): Promise<APIInteractionResponse> {
        return new Promise((resolve, reject) => {
            switch(rawInteraction.type) {
                // handle ping requests
                // these happen from time to time
                case InteractionType.Ping:
                    return resolve({ type: InteractionResponseType.Pong })
                default:
                    const interaction = InteractionFactory.from(rawInteraction, this);
                    // emit the event to the user
                    this.emit(EventNames.interactionCreate, interaction)

                    // we use a event based system to receive and send back a response
                    // TODO: Look into memory/perf issues with this approach
                    // TODO: Use diff method if too huge of a perf impact
                    const responseEvent = InternalEventNames.interactionResponse + interaction.id
                    let responseTimeout: null | NodeJS.Timeout = null

                    const responseHandler = (response: APIInteractionResponse) => {
                        // if we have a timeout for responses, clear that
                        if(responseTimeout) clearTimeout(responseTimeout)
                        resolve(response)
                    }
    
                    this.once(responseEvent, responseHandler);

                    
                    if(this.config.waitForResponse > 0) {
                        responseTimeout = setTimeout(() => {
                            this.off(responseEvent, responseHandler)
                            reject(new Error("Response timed out"))
                        }, this.config.waitForResponse)
                    }
            }  
        })
    }

    /**
     * Handles a request to the server
     * @param request 
     */
    async handleRequest(request: GenericRequest) {
        // raw string body (non json)
        const body = request.body
        // get the verification headers
        const timestamp = request.headers[DiscordVerifyHeaders.timestamp];
        const signature = request.headers[DiscordVerifyHeaders.signature];

        // validation, all of these are required
        if (typeof timestamp !== 'string' || typeof signature !== 'string' || typeof body !== 'string') throw new Error(`Required request properties not found`)
    
        const isVerified = await verify(body, signature, timestamp, this.config.publicKey, this.config.cryptoEngine);

        if(!isVerified) throw new Error(`Could not verify request`)

        return this.processInteraction(JSON.parse(body))
    }
}