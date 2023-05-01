import type { IRequest } from './utils/request'
import type { default as NodeCrypto } from 'node:crypto'
import { DiscordVerificationHeaders } from './utils/constants'
import { DisciTypeError, TypeErrorsMessages } from './utils/errors'
import { isNode } from './utils/helpers'

// allows cf workers to bundle this
import { Buffer } from 'node:buffer'

type CryptoAlgorithms =
  | NodeCrypto.webcrypto.AlgorithmIdentifier
  | NodeCrypto.webcrypto.RsaHashedImportParams
  | NodeCrypto.webcrypto.EcKeyImportParams
  | NodeCrypto.webcrypto.HmacImportParams
  | NodeCrypto.webcrypto.AesKeyAlgorithm

/**
 * A security Strategy is used to verify incoming requests
 */
export interface verificationStrategy {
  verifyRequest: (req: IRequest) => Promise<boolean>
}

/**
 * A security Strategy that uses Native crypto to verify if request is incoming from discord
 */
export class NativeVerificationStrategy implements verificationStrategy {
  private _publicKey: null | NodeCrypto.webcrypto.CryptoKey = null
  private crypto!: typeof NodeCrypto | Crypto
  /**
   *
   * @param publicKey - Public key from discord
   */
  constructor(
    private publicKey: string = (isNode && process.env.PUBLIC_KEY) || '',
    private cryptoAlgorithm: CryptoAlgorithms = 'Ed25519',
  ) {
    if (publicKey === '')
      throw new DisciTypeError(TypeErrorsMessages.ParameterRequired(`VerificationStrategy.publicKey`))
    // if not in a node.js context switch the algorithm
    if (!isNode) {
      this.cryptoAlgorithm = {
        name: 'NODE-ED25519',
        namedCurve: 'NODE-ED25519',
        // @ts-expect-error Cloudflare worker runtime
        public: true,
      }
    }
  }
  /**
   * Used to validate if a request originated from discord
   * https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization
   */
  async verifyRequest(req: IRequest) {
    const publicKeyGen = await this.generatePublicKey(true)
    const timestamp = req.headers[DiscordVerificationHeaders.TimeStamp]
    const signature = req.headers[DiscordVerificationHeaders.Signature]
    const { body } = req
    if (!timestamp || !signature || !body) return false
    try {
      return this.crypto.subtle.verify(
        this.cryptoAlgorithm,
        publicKeyGen,
        Buffer.from(signature, 'hex'),
        Buffer.from(timestamp + body),
      )
    } catch {
      return false
    }
  }

  /**
   * Generate a cryptokey for the public key provided in the options.
   * Run this at startup if you want to pre create a publicKey before any interaction requests.
   * If not, on first interaction request this will be called.
   */
  generatePublicKey(returnPKey: true): Promise<NodeCrypto.webcrypto.CryptoKey>
  generatePublicKey(returnPKey?: false): Promise<this>
  async generatePublicKey(returnPkey?: boolean): Promise<this | NodeCrypto.webcrypto.CryptoKey> {
    if (this._publicKey) return returnPkey ? this._publicKey : this
    if (!this.crypto) await this.initCrypto()
    this._publicKey = await this.crypto.subtle.importKey(
      'raw',
      Buffer.from(this.publicKey, 'hex'),
      this.cryptoAlgorithm,
      true,
      ['verify'],
    )
    return returnPkey ? this._publicKey : this
  }
  private async initCrypto() {
    if (this.crypto) return this.crypto
    if (typeof crypto !== 'undefined' && !isNode) {
      this.crypto = crypto
    } else {
      this.crypto = (await import('node:crypto')).default
    }

    return this.crypto
  }
}

/**
 * Allow all request Strategy
 */
export class NoLimitVerificationStrategy implements verificationStrategy {
  verifyRequest() {
    // since we typed it as Promise<boolean>
    return Promise.resolve(true)
  }
}
