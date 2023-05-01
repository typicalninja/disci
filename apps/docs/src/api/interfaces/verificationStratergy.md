# Interface: verificationStratergy

A security stratergy is used to verify incoming requests

## Implemented by

- [`NativeVerificationStratergy`](../classes/NativeVerificationStratergy.md)
- [`NoLimitVerificationStratergy`](../classes/NoLimitVerificationStratergy.md)

## Table of contents

### Properties

- [verifyRequest](verificationStratergy.md#verifyrequest)

## Properties

### verifyRequest

• **verifyRequest**: (`req`: [`IRequest`](IRequest.md)) => `Promise`<`boolean`\>

#### Type declaration

▸ (`req`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](IRequest.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/disci/src/verification.ts:21](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/verification.ts#L21)
