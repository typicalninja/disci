---
id: "ChatInputInteraction"
title: "Class: ChatInputInteraction"
sidebar_label: "ChatInputInteraction"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `ApplicationCommand`

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

ApplicationCommand.constructor

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:157](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L157)

## Properties

### RawInteractionData

• `Readonly` **RawInteractionData**: `APIInteraction`

#### Inherited from

ApplicationCommand.RawInteractionData

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:94](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L94)

___

### appPermissions

• `Optional` **appPermissions**: [`PermissionsBitField`](PermissionsBitField.md)

#### Inherited from

ApplicationCommand.appPermissions

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:64](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L64)

___

### applicationId

• `Readonly` **applicationId**: `string`

ID of the application this interaction is for

#### Inherited from

ApplicationCommand.applicationId

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:42](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L42)

___

### channelId

• `Optional` **channelId**: `string`

Channel that the interaction was sent from

#### Inherited from

ApplicationCommand.channelId

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:58](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L58)

___

### commandId

• **commandId**: `string`

Id Of **The Application command** (not interaction)

#### Inherited from

ApplicationCommand.commandId

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:30](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L30)

___

### commandName

• **commandName**: `string`

Name of this command

#### Inherited from

ApplicationCommand.commandName

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:26](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L26)

___

### commandType

• **commandType**: `ApplicationCommandType`

Type of this command
https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types

#### Inherited from

ApplicationCommand.commandType

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:22](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L22)

___

### guildId

• `Optional` **guildId**: `string`

Guild that the interaction was sent from

#### Inherited from

ApplicationCommand.guildId

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:54](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L54)

___

### guildLocale

• **guildLocale**: ``null`` \| ``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

#### Inherited from

ApplicationCommand.guildLocale

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:86](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L86)

___

### handler

• **handler**: [`InteractionHandler`](InteractionHandler.md)

Handler than initated this class

#### Inherited from

ApplicationCommand.handler

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:85](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L85)

___

### id

• `Readonly` **id**: `string`

ID of the interaction

#### Inherited from

ApplicationCommand.id

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:38](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L38)

___

### member

• `Optional` **member**: `default`

Guild member who invoked this interaction

#### Inherited from

ApplicationCommand.member

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:80](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L80)

___

### options

• **options**: `InteractionOptions`

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:156](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L156)

___

### responded

• **responded**: `boolean`

If this interaction has Already been responded to

#### Inherited from

ApplicationCommand.responded

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:68](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L68)

___

### timeout

• **timeout**: `boolean`

If this interaction timed out (3s)

#### Inherited from

ApplicationCommand.timeout

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:72](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L72)

___

### token

• `Readonly` **token**: `string`

Token of this interaction

#### Inherited from

ApplicationCommand.token

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:46](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L46)

___

### type

• **type**: `InteractionType`

Type of this interaction

#### Inherited from

ApplicationCommand.type

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:50](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L50)

___

### user

• `Optional` **user**: `default`

The user who invoked this interaction

#### Inherited from

ApplicationCommand.user

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:76](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L76)

___

### version

• `Readonly` **version**: ``1``

Readonly Property, as per the Discord docs always 1
https://discord.com/developers/docs/interactions/receiving-and-responding

#### Inherited from

ApplicationCommand.version

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:63](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L63)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

Created time as a date

#### Returns

`Date`

#### Inherited from

ApplicationCommand.createdAt

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:152](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L152)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

Timestamp of this interaction

#### Returns

`number`

#### Inherited from

ApplicationCommand.createdTimestamp

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:146](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L146)

## Methods

### \_respond

▸ `Private` **_respond**(`response`): [`ChatInputInteraction`](ChatInputInteraction.md)

Respond to this interaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `APIInteractionResponse` |

#### Returns

[`ChatInputInteraction`](ChatInputInteraction.md)

#### Inherited from

ApplicationCommand.\_respond

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:172](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L172)

___

### deferResponse

▸ **deferResponse**(): [`ChatInputInteraction`](ChatInputInteraction.md)

Send a defer type response, gives you extra time to reply.User sees a loading state

#### Returns

[`ChatInputInteraction`](ChatInputInteraction.md)

#### Inherited from

ApplicationCommand.deferResponse

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:144](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L144)

___

### fetchReply

▸ **fetchReply**(): `Promise`<`default`\>

Fetch the Message that belong to your reply

#### Returns

`Promise`<`default`\>

Message

#### Inherited from

ApplicationCommand.fetchReply

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:185](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L185)

___

### isAutoComplete

▸ **isAutoComplete**(): this is AutoCompleteInteraction

Type guard to verify if this interaction is an autocomplete Request

#### Returns

this is AutoCompleteInteraction

#### Inherited from

ApplicationCommand.isAutoComplete

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:164](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L164)

___

### isChatInputInteraction

▸ **isChatInputInteraction**(): this is ChatInputInteraction

Alias to isSlashCommand

#### Returns

this is ChatInputInteraction

#### Inherited from

ApplicationCommand.isChatInputInteraction

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:63](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L63)

___

### isCommand

▸ **isCommand**(): this is ApplicationCommand

Type guard to verify if this interaction is ApplicationCommand

#### Returns

this is ApplicationCommand

#### Inherited from

ApplicationCommand.isCommand

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:158](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L158)

___

### isMessageCommand

▸ **isMessageCommand**(): this is MessageCommandInteraction

If this is a Message Context menu

#### Returns

this is MessageCommandInteraction

#### Inherited from

ApplicationCommand.isMessageCommand

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:44](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L44)

___

### isSlashCommand

▸ **isSlashCommand**(): this is ChatInputInteraction

If this is a Slash Command

#### Returns

this is ChatInputInteraction

#### Inherited from

ApplicationCommand.isSlashCommand

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:56](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L56)

___

### isUserCommand

▸ **isUserCommand**(): this is UserCommandInteraction

If this is a User Context menu

#### Returns

this is UserCommandInteraction

#### Inherited from

ApplicationCommand.isUserCommand

#### Defined in

[packages/disci/src/structures/ApplicationCommand.ts:50](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/ApplicationCommand.ts#L50)

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

ApplicationCommand.useCallback

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:136](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/BaseInteraction.ts#L136)
