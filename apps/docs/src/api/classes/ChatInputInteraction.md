# Class: ChatInputInteraction

Base Interface for other structures to implement on.
All toplevel structures MUST implement this structure

## Hierarchy

- [`ApplicationCommand`](ApplicationCommand.md)

  ↳ **`ChatInputInteraction`**

## Table of contents

### Constructors

- [constructor](ChatInputInteraction.md#constructor)

### Properties

- [RawInteractionData](ChatInputInteraction.md#rawinteractiondata)
- [appPermissions](ChatInputInteraction.md#apppermissions)
- [applicationId](ChatInputInteraction.md#applicationid)
- [channelId](ChatInputInteraction.md#channelid)
- [commandId](ChatInputInteraction.md#commandid)
- [commandName](ChatInputInteraction.md#commandname)
- [commandType](ChatInputInteraction.md#commandtype)
- [guildId](ChatInputInteraction.md#guildid)
- [guildLocale](ChatInputInteraction.md#guildlocale)
- [handler](ChatInputInteraction.md#handler)
- [id](ChatInputInteraction.md#id)
- [member](ChatInputInteraction.md#member)
- [options](ChatInputInteraction.md#options)
- [resolved](ChatInputInteraction.md#resolved)
- [responded](ChatInputInteraction.md#responded)
- [token](ChatInputInteraction.md#token)
- [type](ChatInputInteraction.md#type)
- [user](ChatInputInteraction.md#user)
- [version](ChatInputInteraction.md#version)

### Accessors

- [createdAt](ChatInputInteraction.md#createdat)
- [createdTimestamp](ChatInputInteraction.md#createdtimestamp)

### Methods

- [\_respond](ChatInputInteraction.md#respond)
- [deferResponse](ChatInputInteraction.md#deferresponse)
- [fetchReply](ChatInputInteraction.md#fetchreply)
- [isAutoComplete](ChatInputInteraction.md#isautocomplete)
- [isChatInputInteraction](ChatInputInteraction.md#ischatinputinteraction)
- [isCommand](ChatInputInteraction.md#iscommand)
- [isComponent](ChatInputInteraction.md#iscomponent)
- [isMessageMenu](ChatInputInteraction.md#ismessagemenu)
- [isSlashCommand](ChatInputInteraction.md#isslashcommand)
- [isUserMenu](ChatInputInteraction.md#isusermenu)
- [respond](ChatInputInteraction.md#respond)
- [useCallback](ChatInputInteraction.md#usecallback)

## Constructors

### constructor

• **new ChatInputInteraction**(`handler`, `rawData`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`InteractionHandler`](InteractionHandler.md) |
| `rawData` | `APIChatInputApplicationCommandInteraction` |

#### Overrides

[ApplicationCommand](ApplicationCommand.md).[constructor](ApplicationCommand.md#constructor)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:89](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L89)

## Properties

### RawInteractionData

• `Readonly` **RawInteractionData**: `APIInteraction`

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[RawInteractionData](ApplicationCommand.md#rawinteractiondata)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:93](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L93)

___

### appPermissions

• `Optional` **appPermissions**: [`PermissionsBitField`](PermissionsBitField.md)

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[appPermissions](ApplicationCommand.md#apppermissions)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:69](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L69)

___

### applicationId

• `Readonly` **applicationId**: `string`

ID of the application this interaction is for

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[applicationId](ApplicationCommand.md#applicationid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:47](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L47)

___

### channelId

• `Optional` **channelId**: `string`

Channel that the interaction was sent from

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[channelId](ApplicationCommand.md#channelid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:63](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L63)

___

### commandId

• **commandId**: `string`

Id Of **The Application command** (not interaction)

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[commandId](ApplicationCommand.md#commandid)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:41](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L41)

___

### commandName

• **commandName**: `string`

Name of this command

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[commandName](ApplicationCommand.md#commandname)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:37](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L37)

___

### commandType

• **commandType**: `ApplicationCommandType` = `ApplicationCommandType.ChatInput`

Type of this command
https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types

#### Overrides

[ApplicationCommand](ApplicationCommand.md).[commandType](ApplicationCommand.md#commandtype)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:88](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L88)

___

### guildId

• `Optional` **guildId**: `string`

Guild that the interaction was sent from

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[guildId](ApplicationCommand.md#guildid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:59](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L59)

___

### guildLocale

• **guildLocale**: ``null`` \| ``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[guildLocale](ApplicationCommand.md#guildlocale)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:87](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L87)

___

### handler

• **handler**: [`InteractionHandler`](InteractionHandler.md)

Handler than initated this class

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[handler](ApplicationCommand.md#handler)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:86](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L86)

___

### id

• `Readonly` **id**: `string`

ID of the interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[id](ApplicationCommand.md#id)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:43](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L43)

___

### member

• `Optional` **member**: `default`

Guild member who invoked this interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[member](ApplicationCommand.md#member)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:81](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L81)

___

### options

• **options**: [`InteractionOptions`](InteractionOptions.md)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:87](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L87)

___

### resolved

• **resolved**: [`CommandInteractionResolvedData`](../interfaces/CommandInteractionResolvedData.md)

Resolved Data of this interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[resolved](ApplicationCommand.md#resolved)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:45](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L45)

___

### responded

• **responded**: `boolean`

If this interaction has Already been responded to

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[responded](ApplicationCommand.md#responded)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:73](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L73)

___

### token

• `Readonly` **token**: `string`

Token of this interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[token](ApplicationCommand.md#token)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:51](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L51)

___

### type

• **type**: `InteractionType` = `InteractionType.ApplicationCommand`

Type of this interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[type](ApplicationCommand.md#type)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:28](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L28)

___

### user

• `Optional` **user**: `default`

The user who invoked this interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[user](ApplicationCommand.md#user)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:77](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L77)

___

### version

• `Readonly` **version**: ``1``

Readonly Property, as per the Discord docs always 1
https://discord.com/developers/docs/interactions/receiving-and-responding

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[version](ApplicationCommand.md#version)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:68](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L68)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

Created time as a date

#### Returns

`Date`

#### Inherited from

ApplicationCommand.createdAt

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:149](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L149)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

Timestamp of this interaction

#### Returns

`number`

#### Inherited from

ApplicationCommand.createdTimestamp

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:143](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L143)

## Methods

### \_respond

▸ `Private` **_respond**(`response`): [`ChatInputInteraction`](ChatInputInteraction.md)

Respond to this interaction, Raw method

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `APIInteractionResponse` |

#### Returns

[`ChatInputInteraction`](ChatInputInteraction.md)

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[_respond](ApplicationCommand.md#respond)

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

[ApplicationCommand](ApplicationCommand.md).[deferResponse](ApplicationCommand.md#deferresponse)

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

[ApplicationCommand](ApplicationCommand.md).[fetchReply](ApplicationCommand.md#fetchreply)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:185](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L185)

___

### isAutoComplete

▸ **isAutoComplete**(): this is AutoCompleteInteraction

Type guard to verify if this interaction is for an autocomplete Request

#### Returns

this is AutoCompleteInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isAutoComplete](ApplicationCommand.md#isautocomplete)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:161](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L161)

___

### isChatInputInteraction

▸ **isChatInputInteraction**(): this is ChatInputInteraction

Alias to isSlashCommand

#### Returns

this is ChatInputInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isChatInputInteraction](ApplicationCommand.md#ischatinputinteraction)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:81](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L81)

___

### isCommand

▸ **isCommand**(): this is ApplicationCommand

Type guard to verify if this interaction is for an ApplicationCommand

#### Returns

this is ApplicationCommand

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isCommand](ApplicationCommand.md#iscommand)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:155](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L155)

___

### isComponent

▸ **isComponent**(): this is ComponentInteraction

Typeguard to verify if this interaction is for an component

#### Returns

this is ComponentInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isComponent](ApplicationCommand.md#iscomponent)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:167](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L167)

___

### isMessageMenu

▸ **isMessageMenu**(): this is MessageCommandInteraction

If this is a Message Context menu

#### Returns

this is MessageCommandInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isMessageMenu](ApplicationCommand.md#ismessagemenu)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:62](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L62)

___

### isSlashCommand

▸ **isSlashCommand**(): this is ChatInputInteraction

If this is a Slash Command

#### Returns

this is ChatInputInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isSlashCommand](ApplicationCommand.md#isslashcommand)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:74](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L74)

___

### isUserMenu

▸ **isUserMenu**(): this is UserCommandInteraction

If this is a User Context menu

#### Returns

this is UserCommandInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isUserMenu](ApplicationCommand.md#isusermenu)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:68](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/ApplicationCommand.ts#L68)

___

### respond

▸ **respond**(`opts`): [`ChatInputInteraction`](ChatInputInteraction.md)

Respond to this interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateMessageParams`](../interfaces/CreateMessageParams.md) & { `fetchReply?`: ``false``  } |

#### Returns

[`ChatInputInteraction`](ChatInputInteraction.md)

this interaction instance or the message instance after responding if fetchReply is true

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[respond](ApplicationCommand.md#respond)

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

[ApplicationCommand](ApplicationCommand.md).[respond](ApplicationCommand.md#respond)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:224](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L224)

___

### useCallback

▸ `Private` **useCallback**(`fn`): [`ChatInputInteraction`](ChatInputInteraction.md)

Internal function. define the function used to respond the interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TcallbackFn` |

#### Returns

[`ChatInputInteraction`](ChatInputInteraction.md)

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[useCallback](ApplicationCommand.md#usecallback)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:132](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L132)
