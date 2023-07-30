---
id: "modules"
title: "disci"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [ApplicationCommand](classes/ApplicationCommand.md)
- [AutoCompleteInteraction](classes/AutoCompleteInteraction.md)
- [BaseInteraction](classes/BaseInteraction.md)
- [BaseReplyInteraction](classes/BaseReplyInteraction.md)
- [BitField](classes/BitField.md)
- [ChatInputInteraction](classes/ChatInputInteraction.md)
- [ComponentInteraction](classes/ComponentInteraction.md)
- [InteractionHandler](classes/InteractionHandler.md)
- [InteractionOptions](classes/InteractionOptions.md)
- [MessageCommandInteraction](classes/MessageCommandInteraction.md)
- [MessageFlagsBitField](classes/MessageFlagsBitField.md)
- [PermissionsBitField](classes/PermissionsBitField.md)
- [Rest](classes/Rest.md)
- [UserCommandInteraction](classes/UserCommandInteraction.md)
- [UserFlagsBitField](classes/UserFlagsBitField.md)

## Interfaces

- [AllowedMentions](interfaces/AllowedMentions.md)
- [ClientEvents](interfaces/ClientEvents.md)
- [CommandInteractionResolvedData](interfaces/CommandInteractionResolvedData.md)
- [ContextMenuInteraction](interfaces/ContextMenuInteraction.md)
- [CreateMessageParams](interfaces/CreateMessageParams.md)
- [HandlerOptions](interfaces/HandlerOptions.md)
- [IBase](interfaces/IBase.md)
- [MessageReference](interfaces/MessageReference.md)
- [RESTClientOptions](interfaces/RESTClientOptions.md)
- [RESTCommonOptions](interfaces/RESTCommonOptions.md)
- [RestClient](interfaces/RestClient.md)

## Type Aliases

### ApplicationCommands

Ƭ **ApplicationCommands**: [`ChatInputInteraction`](classes/ChatInputInteraction.md) \| [`MessageCommandInteraction`](classes/MessageCommandInteraction.md) \| [`UserCommandInteraction`](classes/UserCommandInteraction.md)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:161](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/ApplicationCommand.ts#L161)

___

### BitFieldResolvable

Ƭ **BitFieldResolvable**: `bigint` \| `bigint`[] \| `number` \| `number`[]

#### Defined in

[packages/disci/src/structures/Bitfield.ts:8](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/Bitfield.ts#L8)

___

### EmojiResolvable

Ƭ **EmojiResolvable**: `string` \| { `id`: `string` ; `name`: `string`  }

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:16](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/primitives/Message.ts#L16)

## Variables

### DisciAuthError

• `Const` **DisciAuthError**: typeof `CustomError`

#### Defined in

[packages/disci/src/utils/errors.ts:31](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/utils/errors.ts#L31)

___

### DisciError

• `Const` **DisciError**: typeof `CustomError`

#### Defined in

[packages/disci/src/utils/errors.ts:28](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/utils/errors.ts#L28)

___

### DisciRestError

• `Const` **DisciRestError**: typeof `CustomError`

#### Defined in

[packages/disci/src/utils/errors.ts:30](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/utils/errors.ts#L30)

___

### DisciTypeError

• `Const` **DisciTypeError**: typeof `CustomError`

#### Defined in

[packages/disci/src/utils/errors.ts:29](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/utils/errors.ts#L29)
