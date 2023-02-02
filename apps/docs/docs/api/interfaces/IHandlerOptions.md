---
id: "IHandlerOptions"
title: "Interface: IHandlerOptions"
sidebar_label: "IHandlerOptions"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### deferOnTimeout

• **deferOnTimeout**: `boolean`

Instead of request getting marked as stale, respond to it with a "defer" if timed out
Allows you to have more time to reply

#### Defined in

[packages/disci/src/utils/constants.ts:24](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L24)

___

### publicKey

• **publicKey**: `string`

PublicKey for authorization

#### Defined in

[packages/disci/src/utils/constants.ts:28](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L28)

___

### replyTimeout

• **replyTimeout**: `number`

After this, the request will be considered stale

#### Defined in

[packages/disci/src/utils/constants.ts:19](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L19)

___

### token

• **token**: `string`

Token for authorization on rest requsts

#### Defined in

[packages/disci/src/utils/constants.ts:32](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L32)

___

### verifyRequest

• `Optional` **verifyRequest**: (`req`: [`IRequest`](IRequest.md)) => `Promise`<`boolean`\>

#### Type declaration

▸ (`req`): `Promise`<`boolean`\>

Used to validate if a request originated from discord

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | [`IRequest`](IRequest.md) | The request from the server to verify |

##### Returns

`Promise`<`boolean`\>

boolean indicating wether this is a verified request or not

#### Defined in

[packages/disci/src/utils/constants.ts:38](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L38)
