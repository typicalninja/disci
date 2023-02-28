import type { IRequest } from "./utils/request";
import crypto from "crypto";
import { DiscordVerificationHeaders } from "./utils/constants";
import { DisciTypeError, TypeErrorsMessages } from "./utils/errors";

type CryptoAlgorithms = crypto.webcrypto.AlgorithmIdentifier | crypto.webcrypto.RsaHashedImportParams | crypto.webcrypto.EcKeyImportParams | crypto.webcrypto.HmacImportParams | crypto.webcrypto.AesKeyAlgorithm

/**
 * A security stratergy is used to verify incoming requests
 */
export interface verificationStratergy {
  verifyRequest: (req: IRequest) => Promise<boolean>;
}



/**
 * A security stratergy that uses Native crypto to verify if request is incoming from discord
 */
export class NativeVerificationStratergy implements verificationStratergy {
  private _publicKey: null | crypto.webcrypto.CryptoKey = null;
  /**
   * 
   * @param publicKey - Public key from discord
   */
  constructor(private publicKey: string = process.env.PUBLIC_KEY || '', private cryptoAlgorithm: CryptoAlgorithms = "Ed25519") {
    if(publicKey === '') throw new DisciTypeError(TypeErrorsMessages.ParameterRequired(`VerificationStratergy.publicKey`))
  }
   /**
   * Used to validate if a request originated from discord
   * https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization
   */
  async verifyRequest(req: IRequest) {
    const publicKeyGen = await this.generatePublicKey(true)
    const timestamp = req.headers[
        DiscordVerificationHeaders.TimeStamp
      ];
      const signature = req.headers[
        DiscordVerificationHeaders.Signature
      ];
      const { body } = req;
      if (!timestamp || !signature || !body) return false;
      try {
        return crypto.subtle.verify(
          this.cryptoAlgorithm, 
          publicKeyGen,
          Buffer.from(signature, "hex"),
          Buffer.from(timestamp + body)
          );
      } catch {
        return false;
      }
  }

  /**
   * Generate a cryptokey for the public key provided in the options.
   * Run this at startup if you want to pre create a publicKey before any interaction requests.
   * If not, on first interaction request this will be called.
   */
  generatePublicKey(returnPKey: true): Promise<crypto.webcrypto.CryptoKey>;
  generatePublicKey(returnPKey?: false): Promise<this>;
  async generatePublicKey(returnPkey?: boolean): Promise<this | crypto.webcrypto.CryptoKey> {
    if (this._publicKey) return returnPkey ? this._publicKey : this;
    this._publicKey = await crypto.subtle.importKey(
      "raw",
      Buffer.from(this.publicKey, "hex"),
      this.cryptoAlgorithm,
      true,
      ["verify"]
    );
    return returnPkey ? this._publicKey : this;
  }
}

/**
 * Allow all request stratergy
 */
export class NoLimitVerificationStratergy implements verificationStratergy {
  verifyRequest() {
    // since we typed it as Promise<boolean>
    return Promise.resolve(true);
  }
}
