---
id: "modules"
title: "disci"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [BitField](classes/BitField.md)
- [InteractionHandler](classes/InteractionHandler.md)
- [PermissionsBitField](classes/PermissionsBitField.md)
- [UserFlagsBitField](classes/UserFlagsBitField.md)

## Interfaces

- [IClientEvents](interfaces/IClientEvents.md)
- [IHandlerOptions](interfaces/IHandlerOptions.md)
- [IRequest](interfaces/IRequest.md)
- [IResponse](interfaces/IResponse.md)

## Type Aliases

### BitFieldResolvable

Ƭ **BitFieldResolvable**: `bigint` \| `bigint`[] \| `number` \| `number`[]

#### Defined in

[packages/disci/src/structures/builders/Bitfield.ts:4](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/structures/builders/Bitfield.ts#L4)

___

### InteractionContext

Ƭ **InteractionContext**: `ChatInputInteraction`

#### Defined in

[packages/disci/src/utils/constants.ts:13](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L13)

___

### MessageReplyOptions

Ƭ **MessageReplyOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `embeds?` | `APIEmbed`[] \| `Embed`[] |

#### Defined in

[packages/disci/src/utils/constants.ts:41](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L41)

___

### TRespondCallback

Ƭ **TRespondCallback**: (`interaction`: [`InteractionContext`](modules.md#interactioncontext)) => [`IResponse`](interfaces/IResponse.md) \| `Promise`<[`IResponse`](interfaces/IResponse.md)\>

#### Type declaration

▸ (`interaction`): [`IResponse`](interfaces/IResponse.md) \| `Promise`<[`IResponse`](interfaces/IResponse.md)\>

Type used to represent the respond callback function

##### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | [`InteractionContext`](modules.md#interactioncontext) |

##### Returns

[`IResponse`](interfaces/IResponse.md) \| `Promise`<[`IResponse`](interfaces/IResponse.md)\>

#### Defined in

[packages/disci/src/utils/constants.ts:72](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L72)
