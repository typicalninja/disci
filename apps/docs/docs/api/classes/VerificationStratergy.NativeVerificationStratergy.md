---
id: "VerificationStratergy.NativeVerificationStratergy"
title: "Class: NativeVerificationStratergy"
sidebar_label: "VerificationStratergy.NativeVerificationStratergy"
custom_edit_url: null
---

[VerificationStratergy](../namespaces/VerificationStratergy.md).NativeVerificationStratergy

A security stratergy that uses Native crypto to verify if request is incoming from discord

## Implements

- [`verificationStratergy`](../interfaces/VerificationStratergy.verificationStratergy.md)

## Constructors

### constructor

• **new NativeVerificationStratergy**(`publicKey?`, `cryptoAlgorithm?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `publicKey` | `string` | `undefined` | Public key from discord |
| `cryptoAlgorithm` | `CryptoAlgorithms` | `"Ed25519"` | - |

#### Defined in

[packages/disci/src/verification.ts:26](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/verification.ts#L26)

## Properties

### \_publicKey

• `Private` **\_publicKey**: ``null`` \| `CryptoKey` = `null`

#### Defined in

[packages/disci/src/verification.ts:21](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/verification.ts#L21)

___

### cryptoAlgorithm

• `Private` **cryptoAlgorithm**: `CryptoAlgorithms` = `"Ed25519"`

#### Defined in

[packages/disci/src/verification.ts:26](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/verification.ts#L26)

___

### publicKey

• `Private` **publicKey**: `string`

Public key from discord

#### Defined in

[packages/disci/src/verification.ts:26](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/verification.ts#L26)

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

[packages/disci/src/verification.ts:60](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/verification.ts#L60)

▸ **generatePublicKey**(`returnPKey?`): `Promise`<[`NativeVerificationStratergy`](VerificationStratergy.NativeVerificationStratergy.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `returnPKey?` | ``false`` |

#### Returns

`Promise`<[`NativeVerificationStratergy`](VerificationStratergy.NativeVerificationStratergy.md)\>

#### Defined in

[packages/disci/src/verification.ts:61](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/verification.ts#L61)

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

[packages/disci/src/verification.ts:33](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/verification.ts#L33)
