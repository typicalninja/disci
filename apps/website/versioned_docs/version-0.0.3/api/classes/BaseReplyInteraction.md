---
id: "BaseReplyInteraction"
title: "Class: BaseReplyInteraction"
sidebar_label: "BaseReplyInteraction"
sidebar_position: 0
custom_edit_url: null
---

Base for all repliable to interactions

## Hierarchy

- [`BaseInteraction`](BaseInteraction.md)

  ↳ **`BaseReplyInteraction`**

  ↳↳ [`ApplicationCommand`](ApplicationCommand.md)

  ↳↳ [`ComponentInteraction`](ComponentInteraction.md)

## Constructors

### constructor

• **new BaseReplyInteraction**(`handler`, `RawInteractionData`)

Create a new received interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`InteractionHandler`](InteractionHandler.md) |
| `RawInteractionData` | `APIInteraction` |

#### Inherited from

[BaseInteraction](BaseInteraction.md).[constructor](BaseInteraction.md#constructor)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:95](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L95)

## Properties

### RawInteractionData

• `Readonly` **RawInteractionData**: `APIInteraction`

#### Inherited from

[BaseInteraction](BaseInteraction.md).[RawInteractionData](BaseInteraction.md#rawinteractiondata)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:97](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L97)

___

### appPermissions

• `Optional` **appPermissions**: [`PermissionsBitField`](PermissionsBitField.md)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[appPermissions](BaseInteraction.md#apppermissions)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:67](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L67)

___

### applicationId

• `Readonly` **applicationId**: `string`

ID of the application this interaction is for

#### Inherited from

[BaseInteraction](BaseInteraction.md).[applicationId](BaseInteraction.md#applicationid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:45](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L45)

___

### channelId

• `Optional` **channelId**: `string`

Channel that the interaction was sent from

#### Inherited from

[BaseInteraction](BaseInteraction.md).[channelId](BaseInteraction.md#channelid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:61](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L61)

___

### guildId

• `Optional` **guildId**: `string`

Guild that the interaction was sent from

#### Inherited from

[BaseInteraction](BaseInteraction.md).[guildId](BaseInteraction.md#guildid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:57](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L57)

___

### guildLocale

• **guildLocale**: ``null`` \| ``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

The preferred locale from the guild this interaction was sent in

#### Inherited from

[BaseInteraction](BaseInteraction.md).[guildLocale](BaseInteraction.md#guildlocale)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:89](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L89)

___

### handler

• `Readonly` **handler**: [`InteractionHandler`](InteractionHandler.md)

Handler that initiated this class

#### Inherited from

[BaseInteraction](BaseInteraction.md).[handler](BaseInteraction.md#handler)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:85](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L85)

___

### id

• `Readonly` **id**: `string`

ID of the interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[id](BaseInteraction.md#id)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:41](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L41)

___

### member

• `Optional` **member**: `default`

Guild member who invoked this interaction (if any)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[member](BaseInteraction.md#member)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:81](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L81)

___

### responded

• **responded**: `boolean`

If this interaction has Already been responded to

#### Inherited from

[BaseInteraction](BaseInteraction.md).[responded](BaseInteraction.md#responded)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:72](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L72)

___

### token

• `Readonly` **token**: `string`

Token of this interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[token](BaseInteraction.md#token)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:49](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L49)

___

### type

• **type**: `InteractionType`

Type of this interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[type](BaseInteraction.md#type)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:53](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L53)

___

### user

• `Optional` **user**: `default`

The user who invoked this interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[user](BaseInteraction.md#user)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:76](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L76)

___

### version

• `Readonly` **version**: ``1``

Readonly Property, as per the Discord docs always 1
https://discord.com/developers/docs/interactions/receiving-and-responding

#### Inherited from

[BaseInteraction](BaseInteraction.md).[version](BaseInteraction.md#version)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:66](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L66)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

Created time as a date

#### Returns

`Date`

#### Inherited from

BaseInteraction.createdAt

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:156](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L156)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

Timestamp of this interaction

#### Returns

`number`

#### Inherited from

BaseInteraction.createdTimestamp

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:150](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L150)

## Methods

### deferReply

▸ **deferReply**(`options?`): `Promise`<`default`\>

Defers the reply to the interaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options for defer reply |
| `options.ephemeral?` | `boolean` | send a ephemeral defer |
| `options.fetchReply?` | ``true`` | Whether to fetch the reply that was sent |

#### Returns

`Promise`<`default`\>

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:211](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L211)

___

### fetchReply

▸ **fetchReply**(): `Promise`<`default`\>

Fetch the reply that was sent for this interaction

#### Returns

`Promise`<`default`\>

Message

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:239](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L239)

___

### isAutoComplete

▸ **isAutoComplete**(): this is AutoCompleteInteraction

Indicates whether this interaction is a [AutoCompleteInteraction](AutoCompleteInteraction.md)

#### Returns

this is AutoCompleteInteraction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isAutoComplete](BaseInteraction.md#isautocomplete)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:168](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L168)

___

### isCommand

▸ **isCommand**(): this is ApplicationCommand

Indicates whether this interaction is a [ApplicationCommand](ApplicationCommand.md)

#### Returns

this is ApplicationCommand

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isCommand](BaseInteraction.md#iscommand)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:162](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L162)

___

### isComponent

▸ **isComponent**(): this is ComponentInteraction

Indicates whether this interaction is a [ComponentInteraction](ComponentInteraction.md)

#### Returns

this is ComponentInteraction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isComponent](BaseInteraction.md#iscomponent)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:174](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L174)

___

### isRepliable

▸ **isRepliable**(): this is BaseReplyInteraction

Indicates whether this interaction can be replied to (i.e [BaseReplyInteraction](BaseReplyInteraction.md)).

#### Returns

this is BaseReplyInteraction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isRepliable](BaseInteraction.md#isrepliable)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:180](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L180)

___

### reply

▸ **reply**(`opts`): `Promise`<[`BaseReplyInteraction`](BaseReplyInteraction.md)\>

reply to this interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateMessageParams`](../interfaces/CreateMessageParams.md) & { `fetchReply?`: ``false``  } |

#### Returns

`Promise`<[`BaseReplyInteraction`](BaseReplyInteraction.md)\>

this interaction instance or the message instance after responding if fetchReply is true

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:256](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L256)

▸ **reply**(`opts`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateMessageParams`](../interfaces/CreateMessageParams.md) & { `fetchReply`: ``true``  } |

#### Returns

`Promise`<`default`\>

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:257](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L257)
