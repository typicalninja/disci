---
id: "ChatInputInteraction"
title: "Class: ChatInputInteraction"
sidebar_label: "ChatInputInteraction"
sidebar_position: 0
custom_edit_url: null
---

Represents Application commands such as slash commands / menu

## Hierarchy

- [`ApplicationCommand`](ApplicationCommand.md)

  ↳ **`ChatInputInteraction`**

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

[packages/disci/src/structures/ApplicationCommand.ts:101](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L101)

## Properties

### RawInteractionData

• `Readonly` **RawInteractionData**: `APIInteraction`

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[RawInteractionData](ApplicationCommand.md#rawinteractiondata)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:97](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L97)

___

### appPermissions

• `Optional` **appPermissions**: [`PermissionsBitField`](PermissionsBitField.md)

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[appPermissions](ApplicationCommand.md#apppermissions)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:67](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L67)

___

### applicationId

• `Readonly` **applicationId**: `string`

ID of the application this interaction is for

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[applicationId](ApplicationCommand.md#applicationid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:45](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L45)

___

### channelId

• `Optional` **channelId**: `string`

Channel that the interaction was sent from

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[channelId](ApplicationCommand.md#channelid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:61](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L61)

___

### commandId

• **commandId**: `string`

Id Of **The Application command** (not interaction)

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[commandId](ApplicationCommand.md#commandid)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:49](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L49)

___

### commandName

• **commandName**: `string`

Name of this command

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[commandName](ApplicationCommand.md#commandname)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:45](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L45)

___

### commandType

• **commandType**: `ApplicationCommandType` = `ApplicationCommandType.ChatInput`

Type of this command
https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types

#### Overrides

[ApplicationCommand](ApplicationCommand.md).[commandType](ApplicationCommand.md#commandtype)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:100](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L100)

___

### guildId

• `Optional` **guildId**: `string`

Guild that the interaction was sent from

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[guildId](ApplicationCommand.md#guildid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:57](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L57)

___

### guildLocale

• **guildLocale**: ``null`` \| ``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

The preferred locale from the guild this interaction was sent in

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[guildLocale](ApplicationCommand.md#guildlocale)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:89](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L89)

___

### handler

• `Readonly` **handler**: [`InteractionHandler`](InteractionHandler.md)

Handler that initiated this class

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[handler](ApplicationCommand.md#handler)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:85](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L85)

___

### id

• `Readonly` **id**: `string`

ID of the interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[id](ApplicationCommand.md#id)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:41](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L41)

___

### member

• `Optional` **member**: `default`

Guild member who invoked this interaction (if any)

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[member](ApplicationCommand.md#member)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:81](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L81)

___

### options

• **options**: [`InteractionOptions`](InteractionOptions.md)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:99](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L99)

___

### resolved

• **resolved**: [`CommandInteractionResolvedData`](../interfaces/CommandInteractionResolvedData.md)

Resolved Data of this interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[resolved](ApplicationCommand.md#resolved)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:53](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L53)

___

### responded

• **responded**: `boolean`

If this interaction has Already been responded to

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[responded](ApplicationCommand.md#responded)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:72](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L72)

___

### token

• `Readonly` **token**: `string`

Token of this interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[token](ApplicationCommand.md#token)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:49](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L49)

___

### type

• **type**: `InteractionType` = `InteractionType.ApplicationCommand`

Type of this interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[type](ApplicationCommand.md#type)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:36](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L36)

___

### user

• `Optional` **user**: `default`

The user who invoked this interaction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[user](ApplicationCommand.md#user)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:76](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L76)

___

### version

• `Readonly` **version**: ``1``

Readonly Property, as per the Discord docs always 1
https://discord.com/developers/docs/interactions/receiving-and-responding

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[version](ApplicationCommand.md#version)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:66](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L66)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

Created time as a date

#### Returns

`Date`

#### Inherited from

ApplicationCommand.createdAt

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:156](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L156)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

Timestamp of this interaction

#### Returns

`number`

#### Inherited from

ApplicationCommand.createdTimestamp

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

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[deferReply](ApplicationCommand.md#deferreply)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:211](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L211)

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

[packages/disci/src/structures/BaseInteraction.ts:239](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L239)

___

### isAutoComplete

▸ **isAutoComplete**(): this is AutoCompleteInteraction

Indicates whether this interaction is a [AutoCompleteInteraction](AutoCompleteInteraction.md)

#### Returns

this is AutoCompleteInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isAutoComplete](ApplicationCommand.md#isautocomplete)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:168](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L168)

___

### isChatInputInteraction

▸ **isChatInputInteraction**(): this is ChatInputInteraction

Alias to isSlashCommand

#### Returns

this is ChatInputInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isChatInputInteraction](ApplicationCommand.md#ischatinputinteraction)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:92](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L92)

___

### isCommand

▸ **isCommand**(): this is ApplicationCommand

Indicates whether this interaction is a [ApplicationCommand](ApplicationCommand.md)

#### Returns

this is ApplicationCommand

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isCommand](ApplicationCommand.md#iscommand)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:162](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L162)

___

### isComponent

▸ **isComponent**(): this is ComponentInteraction

Indicates whether this interaction is a [ComponentInteraction](ComponentInteraction.md)

#### Returns

this is ComponentInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isComponent](ApplicationCommand.md#iscomponent)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:174](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L174)

___

### isMessageMenu

▸ **isMessageMenu**(): this is MessageCommandInteraction

If this is a Message Context menu

#### Returns

this is MessageCommandInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isMessageMenu](ApplicationCommand.md#ismessagemenu)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:73](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L73)

___

### isRepliable

▸ **isRepliable**(): this is BaseReplyInteraction

Indicates whether this interaction can be replied to (i.e [BaseReplyInteraction](BaseReplyInteraction.md)).

#### Returns

this is BaseReplyInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isRepliable](ApplicationCommand.md#isrepliable)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:180](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L180)

___

### isSlashCommand

▸ **isSlashCommand**(): this is ChatInputInteraction

If this is a Slash Command

#### Returns

this is ChatInputInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isSlashCommand](ApplicationCommand.md#isslashcommand)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:85](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L85)

___

### isUserMenu

▸ **isUserMenu**(): this is UserCommandInteraction

If this is a User Context menu

#### Returns

this is UserCommandInteraction

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[isUserMenu](ApplicationCommand.md#isusermenu)

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:79](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/ApplicationCommand.ts#L79)

___

### reply

▸ **reply**(`opts`): `Promise`<[`ChatInputInteraction`](ChatInputInteraction.md)\>

reply to this interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateMessageParams`](../interfaces/CreateMessageParams.md) & { `fetchReply?`: ``false``  } |

#### Returns

`Promise`<[`ChatInputInteraction`](ChatInputInteraction.md)\>

this interaction instance or the message instance after responding if fetchReply is true

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[reply](ApplicationCommand.md#reply)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:256](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L256)

▸ **reply**(`opts`): `Promise`<`default`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateMessageParams`](../interfaces/CreateMessageParams.md) & { `fetchReply`: ``true``  } |

#### Returns

`Promise`<`default`\>

#### Inherited from

[ApplicationCommand](ApplicationCommand.md).[reply](ApplicationCommand.md#reply)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:257](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L257)