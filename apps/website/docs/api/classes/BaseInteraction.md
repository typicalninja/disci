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

[packages/disci/src/structures/BaseInteraction.ts:98](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L98)

## Properties

### RawInteractionData

• `Readonly` **RawInteractionData**: `APIInteraction`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:100](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L100)

___

### appPermissions

• `Optional` **appPermissions**: [`PermissionsBitField`](PermissionsBitField.md)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:70](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L70)

___

### applicationId

• `Readonly` **applicationId**: `string`

ID of the application this interaction is for

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:48](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L48)

___

### callback

• `Private` **callback**: `CallbackFunction`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:71](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L71)

___

### channelId

• `Optional` **channelId**: `string`

Channel that the interaction was sent from

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:64](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L64)

___

### guildId

• `Optional` **guildId**: `string`

Guild that the interaction was sent from

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:60](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L60)

___

### guildLocale

• **guildLocale**: ``null`` \| ``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

The preferred locale from the guild this interaction was sent in

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:92](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L92)

___

### handler

• `Readonly` **handler**: [`InteractionHandler`](InteractionHandler.md)

Handler that initiated this class

#### Implementation of

[IBase](../interfaces/IBase.md).[handler](../interfaces/IBase.md#handler)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:88](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L88)

___

### id

• `Readonly` **id**: `string`

ID of the interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:44](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L44)

___

### member

• `Optional` **member**: `default`

Guild member who invoked this interaction (if any)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:84](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L84)

___

### responded

• **responded**: `boolean`

If this interaction has Already been responded to

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:75](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L75)

___

### token

• `Readonly` **token**: `string`

Token of this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:52](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L52)

___

### type

• **type**: `InteractionType`

Type of this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:56](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L56)

___

### user

• `Optional` **user**: `default`

The user who invoked this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:79](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L79)

___

### version

• `Readonly` **version**: ``1``

Readonly Property, as per the Discord docs always 1
https://discord.com/developers/docs/interactions/receiving-and-responding

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:69](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L69)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

Created time as a date

#### Returns

`Date`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:159](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L159)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

Timestamp of this interaction

#### Returns

`number`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:153](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L153)

## Methods

### isAutoComplete

▸ **isAutoComplete**(): this is AutoCompleteInteraction

TIndicates whether this interaction is a [AutoCompleteInteraction](AutoCompleteInteraction.md)

#### Returns

this is AutoCompleteInteraction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:171](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L171)

___

### isCommand

▸ **isCommand**(): this is ApplicationCommand

Type guard to verify if this interaction is for an ApplicationCommand

#### Returns

this is ApplicationCommand

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:165](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L165)

___

### isComponent

▸ **isComponent**(): this is ComponentInteraction

Indicates whether this interaction is a [ComponentInteraction](ComponentInteraction.md)

#### Returns

this is ComponentInteraction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:177](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L177)

___

### isRepliable

▸ **isRepliable**(): this is BaseReplyInteraction

Indicates whether this interaction can be replied to.

#### Returns

this is BaseReplyInteraction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:183](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L183)
