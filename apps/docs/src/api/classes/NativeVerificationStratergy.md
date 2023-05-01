# Class: NativeVerificationStratergy

A security stratergy that uses Native crypto to verify if request is incoming from discord

## Implements

- [`verificationStratergy`](../interfaces/verificationStratergy.md)

## Table of contents

### Constructors

- [constructor](NativeVerificationStratergy.md#constructor)

### Properties

- [\_publicKey](NativeVerificationStratergy.md#publickey)
- [crypto](NativeVerificationStratergy.md#crypto)
- [cryptoAlgorithm](NativeVerificationStratergy.md#cryptoalgorithm)
- [publicKey](NativeVerificationStratergy.md#publickey)

### Methods

- [generatePublicKey](NativeVerificationStratergy.md#generatepublickey)
- [initCrypto](NativeVerificationStratergy.md#initcrypto)
- [verifyRequest](NativeVerificationStratergy.md#verifyrequest)

## Constructors

### constructor

• **new NativeVerificationStratergy**(`publicKey?`, `cryptoAlgorithm?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `publicKey` | `string` | `undefined` | Public key from discord |
| `cryptoAlgorithm` | `CryptoAlgorithms` | `'Ed25519'` | - |

#### Defined in

[packages/disci/src/verification.ts:34](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L34)

## Properties

### \_publicKey

• `Private` **\_publicKey**: ``null`` \| `CryptoKey` = `null`

#### Defined in

[packages/disci/src/verification.ts:28](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L28)

___

### crypto

• `Private` **crypto**: `__module` \| `Crypto`

#### Defined in

[packages/disci/src/verification.ts:29](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L29)

___

### cryptoAlgorithm

• `Private` **cryptoAlgorithm**: `CryptoAlgorithms` = `'Ed25519'`

#### Defined in

[packages/disci/src/verification.ts:36](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L36)

___

### publicKey

• `Private` **publicKey**: `string`

Public key from discord

#### Defined in

[packages/disci/src/verification.ts:35](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L35)

## Methods

### generatePublicKey

▸ **generatePublicKey**(`returnPKey`): `Promise`<`CryptoKey`\>

Generate a cryptokey for the public key provided in the options.
Run this at startup if you want to pre create a publicKey before any interaction requests.
If not, on first interaction request this will be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `returnPKey` | ``true`` |

#### Returns

`Promise`<`CryptoKey`\>

#### Defined in

[packages/disci/src/verification.ts:77](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L77)

▸ **generatePublicKey**(`returnPKey?`): `Promise`<[`NativeVerificationStratergy`](NativeVerificationStratergy.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `returnPKey?` | ``false`` |

#### Returns

`Promise`<[`NativeVerificationStratergy`](NativeVerificationStratergy.md)\>

#### Defined in

[packages/disci/src/verification.ts:78](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L78)

___

### initCrypto

▸ `Private` **initCrypto**(): `Promise`<`__module` \| `Crypto`\>

#### Returns

`Promise`<`__module` \| `Crypto`\>

#### Defined in

[packages/disci/src/verification.ts:91](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L91)

___

### verifyRequest

▸ **verifyRequest**(`req`): `Promise`<`boolean`\>

Used to validate if a request originated from discord
https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](../interfaces/IRequest.md) |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

verificationStratergy.verifyRequest

#### Defined in

[packages/disci/src/verification.ts:54](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L54)
