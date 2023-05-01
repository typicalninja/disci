# disci

## Table of contents

### Classes

- [ApplicationCommand](classes/ApplicationCommand.md)
- [AutoCompleteInteraction](classes/AutoCompleteInteraction.md)
- [BaseInteraction](classes/BaseInteraction.md)
- [BitField](classes/BitField.md)
- [ChatInputInteraction](classes/ChatInputInteraction.md)
- [Embed](classes/Embed.md)
- [InteractionHandler](classes/InteractionHandler.md)
- [InteractionOptions](classes/InteractionOptions.md)
- [MessageCommandInteraction](classes/MessageCommandInteraction.md)
- [MessageFlagsBitField](classes/MessageFlagsBitField.md)
- [NativeVerificationStratergy](classes/NativeVerificationStratergy.md)
- [NoLimitVerificationStratergy](classes/NoLimitVerificationStratergy.md)
- [PermissionsBitField](classes/PermissionsBitField.md)
- [Rest](classes/Rest.md)
- [UserCommandInteraction](classes/UserCommandInteraction.md)
- [UserFlagsBitField](classes/UserFlagsBitField.md)

### Interfaces

- [AllowedMentions](interfaces/AllowedMentions.md)
- [CommandInteractionResolvedData](interfaces/CommandInteractionResolvedData.md)
- [ContextMenuInteraction](interfaces/ContextMenuInteraction.md)
- [CreateMessageParams](interfaces/CreateMessageParams.md)
- [IBase](interfaces/IBase.md)
- [IClientEvents](interfaces/IClientEvents.md)
- [IEmbedField](interfaces/IEmbedField.md)
- [IEmbedFooter](interfaces/IEmbedFooter.md)
- [IHandlerOptions](interfaces/IHandlerOptions.md)
- [IRequest](interfaces/IRequest.md)
- [IResponse](interfaces/IResponse.md)
- [MessageReference](interfaces/MessageReference.md)
- [RESTClientOptions](interfaces/RESTClientOptions.md)
- [RESTCommonOptions](interfaces/RESTCommonOptions.md)
- [RestClient](interfaces/RestClient.md)
- [verificationStratergy](interfaces/verificationStratergy.md)

### Type Aliases

- [ApplicationCommands](README.md#applicationcommands)
- [BitFieldResolvable](README.md#bitfieldresolvable)
- [EmojiResolvable](README.md#emojiresolvable)
- [InteractionContext](README.md#interactioncontext)
- [TRespondCallback](README.md#trespondcallback)

## Type Aliases

### ApplicationCommands

Ƭ **ApplicationCommands**: [`ChatInputInteraction`](classes/ChatInputInteraction.md) \| [`MessageCommandInteraction`](classes/MessageCommandInteraction.md) \| [`UserCommandInteraction`](classes/UserCommandInteraction.md)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:137](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L137)

___

### BitFieldResolvable

Ƭ **BitFieldResolvable**: `bigint` \| `bigint`[] \| `number` \| `number`[]

#### Defined in

[packages/disci/src/structures/Bitfield.ts:4](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L4)

___

### EmojiResolvable

Ƭ **EmojiResolvable**: `string` \| { `id`: `string` ; `name`: `string`  }

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:16](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L16)

___

### InteractionContext

Ƭ **InteractionContext**: [`ApplicationCommands`](README.md#applicationcommands) \| [`AutoCompleteInteraction`](classes/AutoCompleteInteraction.md) \| `ComponentInteraction`

#### Defined in

[packages/disci/src/utils/constants.ts:22](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/constants.ts#L22)

___

### TRespondCallback

Ƭ **TRespondCallback**: (`interaction`: [`InteractionContext`](README.md#interactioncontext)) => [`IResponse`](interfaces/IResponse.md) \| `Promise`<[`IResponse`](interfaces/IResponse.md)\>

#### Type declaration

▸ (`interaction`): [`IResponse`](interfaces/IResponse.md) \| `Promise`<[`IResponse`](interfaces/IResponse.md)\>

Type used to represent the respond callback function

##### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | [`InteractionContext`](README.md#interactioncontext) |

##### Returns

[`IResponse`](interfaces/IResponse.md) \| `Promise`<[`IResponse`](interfaces/IResponse.md)\>

#### Defined in

[packages/disci/src/utils/constants.ts:59](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/constants.ts#L59)
