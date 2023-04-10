---
id: "modules"
title: "@discijs/main"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [VerificationStratergy](namespaces/VerificationStratergy.md)

## Classes

- [BitField](classes/BitField.md)
- [ChatInputInteraction](classes/ChatInputInteraction.md)
- [EmbedBuilder](classes/EmbedBuilder.md)
- [InteractionHandler](classes/InteractionHandler.md)
- [PermissionsBitField](classes/PermissionsBitField.md)
- [Rest](classes/Rest.md)
- [UserFlagsBitField](classes/UserFlagsBitField.md)

## Interfaces

- [IClientEvents](interfaces/IClientEvents.md)
- [IHandlerOptions](interfaces/IHandlerOptions.md)
- [IRequest](interfaces/IRequest.md)
- [IResponse](interfaces/IResponse.md)
- [RESTCommonOptions](interfaces/RESTCommonOptions.md)

## Type Aliases

### BitFieldResolvable

Ƭ **BitFieldResolvable**: `bigint` \| `bigint`[] \| `number` \| `number`[]

#### Defined in

[packages/disci/src/structures/Bitfield.ts:4](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L4)

___

### InteractionContext

Ƭ **InteractionContext**: `ApplicationCommands` \| `AutoCompleteInteraction`

#### Defined in

[packages/disci/src/utils/constants.ts:14](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/constants.ts#L14)

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

[packages/disci/src/utils/constants.ts:63](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/constants.ts#L63)
