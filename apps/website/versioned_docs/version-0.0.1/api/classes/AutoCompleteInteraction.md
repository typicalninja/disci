---
id: "AutoCompleteInteraction"
title: "Class: AutoCompleteInteraction"
sidebar_label: "AutoCompleteInteraction"
sidebar_position: 0
custom_edit_url: null
---

Represents a Autocomplete interaction

## Hierarchy

- [`BaseInteraction`](BaseInteraction.md)

  ↳ **`AutoCompleteInteraction`**

## Implements

- [`IBase`](../interfaces/IBase.md)

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

[packages/disci/src/structures/AutoCompleteInteraction.ts:35](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/AutoCompleteInteraction.ts#L35)

## Properties

### RawInteractionData

• `Readonly` **RawInteractionData**: `APIInteraction`

#### Inherited from

[BaseInteraction](BaseInteraction.md).[RawInteractionData](BaseInteraction.md#rawinteractiondata)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:100](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L100)

___

### appPermissions

• `Optional` **appPermissions**: [`PermissionsBitField`](PermissionsBitField.md)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[appPermissions](BaseInteraction.md#apppermissions)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:70](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L70)

___

### applicationId

• `Readonly` **applicationId**: `string`

ID of the application this interaction is for

#### Inherited from

[BaseInteraction](BaseInteraction.md).[applicationId](BaseInteraction.md#applicationid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:48](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L48)

___

### channelId

• `Optional` **channelId**: `string`

Channel that the interaction was sent from

#### Inherited from

[BaseInteraction](BaseInteraction.md).[channelId](BaseInteraction.md#channelid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:64](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L64)

___

### commandGuildId

• `Optional` **commandGuildId**: `string`

Guild id of the command this autocomplete was sent for

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:33](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/AutoCompleteInteraction.ts#L33)

___

### commandId

• **commandId**: `string`

Id of the command this autocomplete was sent for

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:21](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/AutoCompleteInteraction.ts#L21)

___

### commandName

• **commandName**: `string`

Name of the command this autocomplete was sent for

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:25](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/AutoCompleteInteraction.ts#L25)

___

### commandType

• **commandType**: `ApplicationCommandType`

Type of the command this autocomplete was sent for

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:29](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/AutoCompleteInteraction.ts#L29)

___

### guildId

• `Optional` **guildId**: `string`

Guild that the interaction was sent from

#### Inherited from

[BaseInteraction](BaseInteraction.md).[guildId](BaseInteraction.md#guildid)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:60](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L60)

___

### guildLocale

• **guildLocale**: ``null`` \| ``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``

The preferred locale from the guild this interaction was sent in

#### Inherited from

[BaseInteraction](BaseInteraction.md).[guildLocale](BaseInteraction.md#guildlocale)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:92](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L92)

___

### handler

• `Readonly` **handler**: [`InteractionHandler`](InteractionHandler.md)

Handler that initiated this class

#### Implementation of

[IBase](../interfaces/IBase.md).[handler](../interfaces/IBase.md#handler)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[handler](BaseInteraction.md#handler)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:88](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L88)

___

### id

• `Readonly` **id**: `string`

ID of the interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[id](BaseInteraction.md#id)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:44](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L44)

___

### member

• `Optional` **member**: `default`

Guild member who invoked this interaction (if any)

#### Inherited from

[BaseInteraction](BaseInteraction.md).[member](BaseInteraction.md#member)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:84](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L84)

___

### options

• **options**: [`InteractionOptions`](InteractionOptions.md)

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:34](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/AutoCompleteInteraction.ts#L34)

___

### responded

• **responded**: `boolean`

If this interaction has Already been responded to

#### Inherited from

[BaseInteraction](BaseInteraction.md).[responded](BaseInteraction.md#responded)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:75](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L75)

___

### token

• `Readonly` **token**: `string`

Token of this interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[token](BaseInteraction.md#token)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:52](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L52)

___

### type

• **type**: `InteractionType` = `InteractionType.ApplicationCommandAutocomplete`

Type of this interaction

#### Overrides

[BaseInteraction](BaseInteraction.md).[type](BaseInteraction.md#type)

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:17](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/AutoCompleteInteraction.ts#L17)

___

### user

• `Optional` **user**: `default`

The user who invoked this interaction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[user](BaseInteraction.md#user)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:79](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L79)

___

### version

• `Readonly` **version**: ``1``

Readonly Property, as per the Discord docs always 1
https://discord.com/developers/docs/interactions/receiving-and-responding

#### Inherited from

[BaseInteraction](BaseInteraction.md).[version](BaseInteraction.md#version)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:69](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L69)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

Created time as a date

#### Returns

`Date`

#### Inherited from

BaseInteraction.createdAt

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:159](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L159)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

Timestamp of this interaction

#### Returns

`number`

#### Inherited from

BaseInteraction.createdTimestamp

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:153](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L153)

## Methods

### getChoices

▸ `Private` **getChoices**(`choices`): `APIApplicationCommandOptionChoice`<`string` \| `number`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `choices` | (`string` \| `APIApplicationCommandOptionChoice`<`string` \| `number`\>)[] |

#### Returns

`APIApplicationCommandOptionChoice`<`string` \| `number`\>[]

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:77](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/AutoCompleteInteraction.ts#L77)

___

### isAutoComplete

▸ **isAutoComplete**(): this is AutoCompleteInteraction

TIndicates whether this interaction is a [AutoCompleteInteraction](AutoCompleteInteraction.md)

#### Returns

this is AutoCompleteInteraction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isAutoComplete](BaseInteraction.md#isautocomplete)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:171](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L171)

___

### isCommand

▸ **isCommand**(): this is ApplicationCommand

Type guard to verify if this interaction is for an ApplicationCommand

#### Returns

this is ApplicationCommand

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isCommand](BaseInteraction.md#iscommand)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:165](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L165)

___

### isComponent

▸ **isComponent**(): this is ComponentInteraction

Indicates whether this interaction is a [ComponentInteraction](ComponentInteraction.md)

#### Returns

this is ComponentInteraction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isComponent](BaseInteraction.md#iscomponent)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:177](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L177)

___

### isRepliable

▸ **isRepliable**(): this is BaseReplyInteraction

Indicates whether this interaction can be replied to.

#### Returns

this is BaseReplyInteraction

#### Inherited from

[BaseInteraction](BaseInteraction.md).[isRepliable](BaseInteraction.md#isrepliable)

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:183](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L183)

___

### respond

▸ **respond**(`choices`): [`AutoCompleteInteraction`](AutoCompleteInteraction.md)

Send autocomplete results

**`Example`**

```ts
interaction.respond([
	"regular Choice",
	{ name: 'choice', value: 'choice value' }
])
```

**`Example`**

```ts
// for no choices screen
interaction.respond([])
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `choices` | (`string` \| `APIApplicationCommandOptionChoice`<`string` \| `number`\>)[] |

#### Returns

[`AutoCompleteInteraction`](AutoCompleteInteraction.md)

#### Defined in

[packages/disci/src/structures/AutoCompleteInteraction.ts:65](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/AutoCompleteInteraction.ts#L65)
