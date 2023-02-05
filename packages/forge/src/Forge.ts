import type { IRequest } from "disci";
import { DiscordVerificationHeaders, DummyVerificationHeaders } from "./constants";

export class InteractionForge {
    /**
     * 
     * @param publicKey - Any text, can be your actualy private key or text
     * @param url - url of the webserver to post the request to "eg: https//localhost:3000/interactions"
     */
    constructor(private publicKey: string, private url: string) {
        DummyVerificationHeaders[DiscordVerificationHeaders.Signature] = DummyVerificationHeaders[DiscordVerificationHeaders.Signature].replace('{id}', this.publicKey)
    }
    /**
     * Override for disci default verifier
     * @param req 
     */
    verifyRequest(req: IRequest) {
        const sig = req.headers[DiscordVerificationHeaders.Signature];
        const time = req.headers[DiscordVerificationHeaders.TimeStamp];

        if(sig !== DummyVerificationHeaders[DiscordVerificationHeaders.Signature] || time !== DummyVerificationHeaders[DiscordVerificationHeaders.TimeStamp]) return false;
        return true;
    }
}
