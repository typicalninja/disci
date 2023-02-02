import { request } from 'undici'
import nacl from 'tweetnacl';

export enum DiscordVerificationHeaders {
    Signature = "x-signature-ed25519",
    TimeStamp = "x-signature-timestamp",
}

export default class Interaction {
    headers: Record<string, string>
    body: Record<string, any>
    constructor(private publicKey: string, private url: string) {
        this.headers = {
            'content-type': 'application/json'
        }
        this.body = {
            
        }
    }
    addBody(newBody: Record<string, any>) {
        this.body = Object.assign({}, this.body, newBody);
        return this;
    }
    doAuth() {
        if(!this.body) return this;
        this.headers = Object.assign(this.headers, forgeHeaders(JSON.stringify(this.body), this.publicKey))
        console.log(`FOR: ${JSON.stringify(this.headers)}`)
        return this;
    }
    create() {
        return request(this.url, {
            method: 'POST',
            body: JSON.stringify(this.body),
            headers: this.headers
        });
    }
}

export async function forgeHeaders(body: string, privateKey: string) {
    // Generate the timestamp
    const timestamp = Date.now();
    console.log(timestamp, body, privateKey)
    // Sign the message (timestamp + body)
    const signature = nacl.sign.detached(
        Buffer.from(timestamp + body),
        Buffer.from(privateKey, 'hex')
      );
  
    // Return the headers
    return {
      [DiscordVerificationHeaders.TimeStamp]: timestamp,
      [DiscordVerificationHeaders.Signature]: signature.toString(),
    };
  }