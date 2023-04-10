---
id: "VerificationStratergy.verificationStratergy"
title: "Interface: verificationStratergy"
sidebar_label: "VerificationStratergy.verificationStratergy"
custom_edit_url: null
---

[VerificationStratergy](../namespaces/VerificationStratergy.md).verificationStratergy

A security stratergy is used to verify incoming requests

## Implemented by

- [`NativeVerificationStratergy`](../classes/VerificationStratergy.NativeVerificationStratergy.md)
- [`NoLimitVerificationStratergy`](../classes/VerificationStratergy.NoLimitVerificationStratergy.md)

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

[packages/disci/src/verification.ts:12](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/verification.ts#L12)
