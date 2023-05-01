# Class: BaseInteraction

Base Interaction, used by all other Interaction related Structures

## Hierarchy

- **`BaseInteraction`**

  ↳ [`ApplicationCommand`](ApplicationCommand.md)

  ↳ [`AutoCompleteInteraction`](AutoCompleteInteraction.md)

## Implements

- [`IBase`](../interfaces/IBase.md)

## Table of contents

### Constructors

- [constructor](BaseInteraction.md#constructor)

### Properties

- [RawInteractionData](BaseInteraction.md#rawinteractiondata)
- [\_callback](BaseInteraction.md#callback)
- [appPermissions](BaseInteraction.md#apppermissions)
- [applicationId](BaseInteraction.md#applicationid)
- [channelId](BaseInteraction.md#channelid)
- [guildId](BaseInteraction.md#guildid)
- [guildLocale](BaseInteraction.md#guildlocale)
- [handler](BaseInteraction.md#handler)
- [id](BaseInteraction.md#id)
- [member](BaseInteraction.md#member)
- [responded](BaseInteraction.md#responded)
- [token](BaseInteraction.md#token)
- [type](BaseInteraction.md#type)
- [user](BaseInteraction.md#user)
- [version](BaseInteraction.md#version)

### Accessors

- [createdAt](BaseInteraction.md#createdat)
- [createdTimestamp](BaseInteraction.md#createdtimestamp)

### Methods

- [\_respond](BaseInteraction.md#respond)
- [deferResponse](BaseInteraction.md#deferresponse)
- [fetchReply](BaseInteraction.md#fetchreply)
- [isAutoComplete](BaseInteraction.md#isautocomplete)
- [isCommand](BaseInteraction.md#iscommand)
- [isComponent](BaseInteraction.md#iscomponent)
- [respond](BaseInteraction.md#respond)
- [useCallback](BaseInteraction.md#usecallback)

## Constructors

### constructor

• **new BaseInteraction**(`handler`, `RawInteractionData`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`InteractionHandler`](InteractionHandler.md) |
| `RawInteractionData` | `APIInteraction` |

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:93](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L93)

## Properties

### RawInteractionData

• `Readonly` **RawInteractionData**: `APIInteraction`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:93](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L93)

___

### \_callback

• `Private` **\_callback**: `TcallbackFn`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:82](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L82)

___

### appPermissions

• `Optional` **appPermissions**: [`PermissionsBitField`](PermissionsBitField.md)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:69](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L69)

___

### applicationId

• `Readonly` **applicationId**: `string`

ID of the application this interaction is for

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:47](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L47)

___

### channelId

• `Optional` **channelId**: `string`

Channel that the interaction was sent from

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:63](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L63)

___

### guildId

• `Optional` **guildId**: `string`

Guild that the interaction was sent from

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:59](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L59)

___

### guildLocale

• **guildLocale**: ``null`` \| ``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:87](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L87)

___

### handler

• **handler**: [`InteractionHandler`](InteractionHandler.md)

Handler than initated this class

#### Implementation of

[IBase](../interfaces/IBase.md).[handler](../interfaces/IBase.md#handler)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:86](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L86)

___

### id

• `Readonly` **id**: `string`

ID of the interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:43](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L43)

___

### member

• `Optional` **member**: `default`

Guild member who invoked this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:81](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L81)

___

### responded

• **responded**: `boolean`

If this interaction has Already been responded to

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:73](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L73)

___

### token

• `Readonly` **token**: `string`

Token of this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:51](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L51)

___

### type

• **type**: `InteractionType`

Type of this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:55](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L55)

___

### user

• `Optional` **user**: `default`

The user who invoked this interaction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:77](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L77)

___

### version

• `Readonly` **version**: ``1``

Readonly Property, as per the Discord docs always 1
https://discord.com/developers/docs/interactions/receiving-and-responding

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:68](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L68)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

Created time as a date

#### Returns

`Date`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:149](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L149)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

Timestamp of this interaction

#### Returns

`number`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:143](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L143)

## Methods

### \_respond

▸ `Private` **_respond**(`response`): [`BaseInteraction`](BaseInteraction.md)

Respond to this interaction, Raw method

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `APIInteractionResponse` |

#### Returns

[`BaseInteraction`](BaseInteraction.md)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:175](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L175)

___

### deferResponse

▸ **deferResponse**(`options?`): `Promise`<`default`\>

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

[packages/disci/src/structures/BaseInteraction.ts:202](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L202)

___

### fetchReply

▸ **fetchReply**(): `Promise`<`default`\>

Fetch the reply that was sent for this interaction

#### Returns

`Promise`<`default`\>

Message

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:185](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L185)

___

### isAutoComplete

▸ **isAutoComplete**(): this is AutoCompleteInteraction

Type guard to verify if this interaction is for an autocomplete Request

#### Returns

this is AutoCompleteInteraction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:161](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L161)

___

### isCommand

▸ **isCommand**(): this is ApplicationCommand

Type guard to verify if this interaction is for an ApplicationCommand

#### Returns

this is ApplicationCommand

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:155](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L155)

___

### isComponent

▸ **isComponent**(): this is ComponentInteraction

Typeguard to verify if this interaction is for an component

#### Returns

this is ComponentInteraction

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:167](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L167)

___

### respond

▸ **respond**(`opts`): [`BaseInteraction`](BaseInteraction.md)

Respond to this interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateMessageParams`](../interfaces/CreateMessageParams.md) & { `fetchReply?`: ``false``  } |

#### Returns

[`BaseInteraction`](BaseInteraction.md)

this interaction instance or the message instance after responding if fetchReply is true

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:223](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L223)

▸ **respond**(`opts`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateMessageParams`](../interfaces/CreateMessageParams.md) & { `fetchReply`: ``true``  } |

#### Returns

`Promise`<`default`\>

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:224](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L224)

___

### useCallback

▸ `Private` **useCallback**(`fn`): [`BaseInteraction`](BaseInteraction.md)

Internal function. define the function used to respond the interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TcallbackFn` |

#### Returns

[`BaseInteraction`](BaseInteraction.md)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:132](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L132)
