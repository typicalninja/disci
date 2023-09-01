---
id: "BaseInteraction"
title: "Class: BaseInteraction"
sidebar_label: "BaseInteraction"
sidebar_position: 0
custom_edit_url: null
---

Represents an basic interaction.

## Hierarchy

- **`BaseInteraction`**

  ↳ [`BaseReplyInteraction`](BaseReplyInteraction.md)

  ↳ [`AutoCompleteInteraction`](AutoCompleteInteraction.md)

## Implements

- [`IBase`](../interfaces/IBase.md)

## Constructors

### constructor

• **new BaseInteraction**(`handler`, `RawInteractionData`)

Create a new received interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`InteractionHandler`](InteractionHandler.md) |
| `RawInteractionData` | `APIInteraction` |

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:95](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L95)

## Properties

### RawInteractionData

• `Readonly` **RawInteractionData**: `APIInteraction`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:97](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L97)

___

### appPermissions

• `Optional` **appPermissions**: [`PermissionsBitField`](PermissionsBitField.md)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:67](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L67)

___

### applicationId

• `Readonly` **applicationId**: `string`

ID of the application this interaction is for

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:45](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L45)

___

### callback

• `Private` **callback**: `CallbackFunction`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:68](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L68)

___

### channelId

• `Optional` **channelId**: `string`

Channel that the interaction was sent from

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:61](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L61)

___

### guildId

• `Optional` **guildId**: `string`

Guild that the interaction was sent from

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:57](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L57)

___

### guildLocale

• **guildLocale**: ``null`` \| ``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

The preferred locale from the guild this interaction was sent in

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:89](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L89)

___

### handler

• `Readonly` **handler**: [`InteractionHandler`](InteractionHandler.md)

Handler that initiated this class

#### Implementation of

[IBase](../interfaces/IBase.md).[handler](../interfaces/IBase.md#handler)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:85](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L85)

___

### id

• `Readonly` **id**: `string`

ID of the interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:41](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L41)

___

### member

• `Optional` **member**: `default`

Guild member who invoked this interaction (if any)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:81](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L81)

___

### responded

• **responded**: `boolean`

If this interaction has Already been responded to

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:72](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L72)

___

### token

• `Readonly` **token**: `string`

Token of this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:49](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L49)

___

### type

• **type**: `InteractionType`

Type of this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:53](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L53)

___

### user

• `Optional` **user**: `default`

The user who invoked this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:76](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L76)

___

### version

• `Readonly` **version**: ``1``

Readonly Property, as per the Discord docs always 1
https://discord.com/developers/docs/interactions/receiving-and-responding

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:66](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L66)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

Created time as a date

#### Returns

`Date`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:156](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L156)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

Timestamp of this interaction

#### Returns

`number`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:150](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L150)

## Methods

### isAutoComplete

▸ **isAutoComplete**(): this is AutoCompleteInteraction

Indicates whether this interaction is a [AutoCompleteInteraction](AutoCompleteInteraction.md)

#### Returns

this is AutoCompleteInteraction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:168](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L168)

___

### isCommand

▸ **isCommand**(): this is ApplicationCommand

Indicates whether this interaction is a [ApplicationCommand](ApplicationCommand.md)

#### Returns

this is ApplicationCommand

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:162](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L162)

___

### isComponent

▸ **isComponent**(): this is ComponentInteraction

Indicates whether this interaction is a [ComponentInteraction](ComponentInteraction.md)

#### Returns

this is ComponentInteraction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:174](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L174)

___

### isRepliable

▸ **isRepliable**(): this is BaseReplyInteraction

Indicates whether this interaction can be replied to (i.e [BaseReplyInteraction](BaseReplyInteraction.md)).

#### Returns

this is BaseReplyInteraction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:180](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L180)
