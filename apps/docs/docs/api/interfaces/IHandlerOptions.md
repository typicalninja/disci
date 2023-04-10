---
id: "IHandlerOptions"
title: "Interface: IHandlerOptions"
sidebar_label: "IHandlerOptions"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### debug

• `Optional` **debug**: (`msg`: `string`) => `void`

#### Type declaration

▸ (`msg`): `void`

A debug callback function that can be used for debugging

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

##### Returns

`void`

#### Defined in

[packages/disci/src/utils/constants.ts:29](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/constants.ts#L29)

___

### deferOnTimeout

• **deferOnTimeout**: `boolean`

Instead of request getting marked as stale, respond to it with a "defer" if timed out
Allows you to have more time to reply

#### Defined in

[packages/disci/src/utils/constants.ts:25](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/constants.ts#L25)

___

### replyTimeout

• **replyTimeout**: `number`

After this, the request will be considered stale

#### Defined in

[packages/disci/src/utils/constants.ts:20](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/constants.ts#L20)

___

### rest

• **rest**: `RESTClientOptions`

Options for built in rest client

#### Defined in

[packages/disci/src/utils/constants.ts:39](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/constants.ts#L39)

___

### verificationStratergy

• **verificationStratergy**: ``null`` \| `string` \| [`verificationStratergy`](VerificationStratergy.verificationStratergy.md)

Verification stratergy used for validating incoming requests,
do no specify for default and specify null for allow all requests
specify a string (your public key) for default stratergy will use that instead of process.env.PUBLIC_KEY

#### Defined in

[packages/disci/src/utils/constants.ts:35](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/constants.ts#L35)
