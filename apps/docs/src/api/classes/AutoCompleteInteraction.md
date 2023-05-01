# Class: AutoCompleteInteraction

Represents a Autocomplete interaction

## Hierarchy

- [`BaseInteraction`](BaseInteraction.md)

  ↳ **`AutoCompleteInteraction`**

## Implements

- [`IBase`](../interfaces/IBase.md)

## Table of contents

### Constructors

- [constructor](AutoCompleteInteraction.md#constructor)

### Properties

- [RawInteractionData](AutoCompleteInteraction.md#rawinteractiondata)
- [appPermissions](AutoCompleteInteraction.md#apppermissions)
- [applicationId](AutoCompleteInteraction.md#applicationid)
- [channelId](AutoCompleteInteraction.md#channelid)
- [commandGuildId](AutoCompleteInteraction.md#commandguildid)
- [commandId](AutoCompleteInteraction.md#commandid)
- [commandName](AutoCompleteInteraction.md#commandname)
- [commandType](AutoCompleteInteraction.md#commandtype)
- [guildId](AutoCompleteInteraction.md#guildid)
- [guildLocale](AutoCompleteInteraction.md#guildlocale)
- [handler](AutoCompleteInteraction.md#handler)
- [id](AutoCompleteInteraction.md#id)
- [member](AutoCompleteInteraction.md#member)
- [options](AutoCompleteInteraction.md#options)
- [responded](AutoCompleteInteraction.md#responded)
- [token](AutoCompleteInteraction.md#token)
- [type](AutoCompleteInteraction.md#type)
- [user](AutoCompleteInteraction.md#user)
- [version](AutoCompleteInteraction.md#version)

### Accessors

- [createdAt](AutoCompleteInteraction.md#createdat)
- [createdTimestamp](AutoCompleteInteraction.md#createdtimestamp)

### Methods

- [\_respond](AutoCompleteInteraction.md#respond)
- [deferResponse](AutoCompleteInteraction.md#deferresponse)
- [fetchReply](AutoCompleteInteraction.md#fetchreply)
- [getChoices](AutoCompleteInteraction.md#getchoices)
- [isAutoComplete](AutoCompleteInteraction.md#isautocomplete)
- [isCommand](AutoCompleteInteraction.md#iscommand)
- [isComponent](AutoCompleteInteraction.md#iscomponent)
- [respond](AutoCompleteInteraction.md#respond)
- [respondWithChoices](AutoCompleteInteraction.md#respondwithchoices)
- [useCallback](AutoCompleteInteraction.md#usecallback)

## Constructors

### constructor

• **new AutoCompleteInteraction**(`handler`, `rawData`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`InteractionHandler`](InteractionHandler.md) |
| `rawData` | `APIApplicationCommandAutocompleteInteraction` |

#### Overrides

[BaseInteraction](BaseInteraction.md).[constructor](BaseInteraction.md#constructor)

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:36](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/AutoCompleteInteraction.ts#L36)

## Properties

### RawInteractionData

• `Readonly` **RawInteractionData**: `APIInteraction`

#### Inherited from

[BaseInteraction](BaseInteraction.md).[RawInteractionData](BaseInteraction.md#rawinteractiondata)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:93](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L93)

___

### appPermissions

• `Optional` **appPermissions**: [`PermissionsBitField`](PermissionsBitField.md)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[appPermissions](BaseInteraction.md#apppermissions)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:69](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L69)

___

### applicationId

• `Readonly` **applicationId**: `string`

ID of the application this interaction is for

#### Inherited from

[BaseInteraction](BaseInteraction.md).[applicationId](BaseInteraction.md#applicationid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:47](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L47)

___

### channelId

• `Optional` **channelId**: `string`

Channel that the interaction was sent from

#### Inherited from

[BaseInteraction](BaseInteraction.md).[channelId](BaseInteraction.md#channelid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:63](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L63)

___

### commandGuildId

• `Optional` **commandGuildId**: `string`

Guild id of the command this autocomplete was sent for

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:34](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/AutoCompleteInteraction.ts#L34)

___

### commandId

• **commandId**: `string`

Id of the command this autocomplete was sent for

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:22](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/AutoCompleteInteraction.ts#L22)

___

### commandName

• **commandName**: `string`

Name of the command this autocomplete was sent for

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:26](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/AutoCompleteInteraction.ts#L26)

___

### commandType

• **commandType**: `ApplicationCommandType`

Type of the command this autocomplete was sent for

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:30](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/AutoCompleteInteraction.ts#L30)

___

### guildId

• `Optional` **guildId**: `string`

Guild that the interaction was sent from

#### Inherited from

[BaseInteraction](BaseInteraction.md).[guildId](BaseInteraction.md#guildid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:59](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L59)

___

### guildLocale

• **guildLocale**: ``null`` \| ``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

[BaseInteraction](BaseInteraction.md).[guildLocale](BaseInteraction.md#guildlocale)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:87](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L87)

___

### handler

• **handler**: [`InteractionHandler`](InteractionHandler.md)

Handler than initated this class

#### Implementation of

[IBase](../interfaces/IBase.md).[handler](../interfaces/IBase.md#handler)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[handler](BaseInteraction.md#handler)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:86](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L86)

___

### id

• `Readonly` **id**: `string`

ID of the interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[id](BaseInteraction.md#id)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:43](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L43)

___

### member

• `Optional` **member**: `default`

Guild member who invoked this interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[member](BaseInteraction.md#member)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:81](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L81)

___

### options

• **options**: [`InteractionOptions`](InteractionOptions.md)

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:35](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/AutoCompleteInteraction.ts#L35)

___

### responded

• **responded**: `boolean`

If this interaction has Already been responded to

#### Inherited from

[BaseInteraction](BaseInteraction.md).[responded](BaseInteraction.md#responded)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:73](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L73)

___

### token

• `Readonly` **token**: `string`

Token of this interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[token](BaseInteraction.md#token)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:51](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L51)

___

### type

• **type**: `InteractionType` = `InteractionType.ApplicationCommandAutocomplete`

Type of this interaction

#### Overrides

[BaseInteraction](BaseInteraction.md).[type](BaseInteraction.md#type)

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:18](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/AutoCompleteInteraction.ts#L18)

___

### user

• `Optional` **user**: `default`

The user who invoked this interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[user](BaseInteraction.md#user)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:77](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L77)

___

### version

• `Readonly` **version**: ``1``

Readonly Property, as per the Discord docs always 1
https://discord.com/developers/docs/interactions/receiving-and-responding

#### Inherited from

[BaseInteraction](BaseInteraction.md).[version](BaseInteraction.md#version)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:68](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L68)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

Created time as a date

#### Returns

`Date`

#### Inherited from

BaseInteraction.createdAt

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:149](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L149)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

Timestamp of this interaction

#### Returns

`number`

#### Inherited from

BaseInteraction.createdTimestamp

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:143](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L143)

## Methods

### \_respond

▸ `Private` **_respond**(`response`): [`AutoCompleteInteraction`](AutoCompleteInteraction.md)

Respond to this interaction, Raw method

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `APIInteractionResponse` |

#### Returns

[`AutoCompleteInteraction`](AutoCompleteInteraction.md)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[_respond](BaseInteraction.md#respond)

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

#### Inherited from

[BaseInteraction](BaseInteraction.md).[deferResponse](BaseInteraction.md#deferresponse)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:202](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L202)

___

### fetchReply

▸ **fetchReply**(): `Promise`<`default`\>

Fetch the reply that was sent for this interaction

#### Returns

`Promise`<`default`\>

Message

#### Inherited from

[BaseInteraction](BaseInteraction.md).[fetchReply](BaseInteraction.md#fetchreply)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:185](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L185)

___

### getChoices

▸ `Private` **getChoices**(`choices`): `APIApplicationCommandOptionChoice`<`string` \| `number`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `choices` | (`string` \| `APIApplicationCommandOptionChoice`<`string` \| `number`\>)[] |

#### Returns

`APIApplicationCommandOptionChoice`<`string` \| `number`\>[]

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:61](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/AutoCompleteInteraction.ts#L61)

___

### isAutoComplete

▸ **isAutoComplete**(): this is AutoCompleteInteraction

Type guard to verify if this interaction is for an autocomplete Request

#### Returns

this is AutoCompleteInteraction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isAutoComplete](BaseInteraction.md#isautocomplete)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:161](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L161)

___

### isCommand

▸ **isCommand**(): this is ApplicationCommand

Type guard to verify if this interaction is for an ApplicationCommand

#### Returns

this is ApplicationCommand

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isCommand](BaseInteraction.md#iscommand)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:155](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L155)

___

### isComponent

▸ **isComponent**(): this is ComponentInteraction

Typeguard to verify if this interaction is for an component

#### Returns

this is ComponentInteraction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isComponent](BaseInteraction.md#iscomponent)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:167](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L167)

___

### respond

▸ **respond**(`opts`): [`AutoCompleteInteraction`](AutoCompleteInteraction.md)

Respond to this interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateMessageParams`](../interfaces/CreateMessageParams.md) & { `fetchReply?`: ``false``  } |

#### Returns

[`AutoCompleteInteraction`](AutoCompleteInteraction.md)

this interaction instance or the message instance after responding if fetchReply is true

#### Inherited from

[BaseInteraction](BaseInteraction.md).[respond](BaseInteraction.md#respond)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:223](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L223)

▸ **respond**(`opts`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateMessageParams`](../interfaces/CreateMessageParams.md) & { `fetchReply`: ``true``  } |

#### Returns

`Promise`<`default`\>

#### Inherited from

[BaseInteraction](BaseInteraction.md).[respond](BaseInteraction.md#respond)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:224](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L224)

___

### respondWithChoices

▸ **respondWithChoices**(`choices`): [`AutoCompleteInteraction`](AutoCompleteInteraction.md)

Sends the autoComplete choices.Set to empty array for "No choices"

#### Parameters

| Name | Type |
| :------ | :------ |
| `choices` | (`string` \| `APIApplicationCommandOptionChoice`<`string` \| `number`\>)[] |

#### Returns

[`AutoCompleteInteraction`](AutoCompleteInteraction.md)

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:49](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/AutoCompleteInteraction.ts#L49)

___

### useCallback

▸ `Private` **useCallback**(`fn`): [`AutoCompleteInteraction`](AutoCompleteInteraction.md)

Internal function. define the function used to respond the interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TcallbackFn` |

#### Returns

[`AutoCompleteInteraction`](AutoCompleteInteraction.md)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[useCallback](BaseInteraction.md#usecallback)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:132](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L132)
