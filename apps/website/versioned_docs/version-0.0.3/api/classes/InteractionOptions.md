---
id: "InteractionOptions"
title: "Class: InteractionOptions"
sidebar_label: "InteractionOptions"
sidebar_position: 0
custom_edit_url: null
---

Utility for working with interaction options

## Constructors

### constructor

• **new InteractionOptions**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `APIApplicationCommandInteractionDataOption`[] |

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:294](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L294)

## Properties

### \_options

• `Private` **\_options**: `APIApplicationCommandInteractionDataOption`[]

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:291](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L291)

___

### group

• `Private` `Optional` **group**: `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:293](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L293)

___

### subCommand

• `Private` `Optional` **subCommand**: `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:292](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L292)

## Methods

### \_getType

▸ `Private` **_getType**(`name`, `expectedTypes`, `properties`, `required`): ``null`` \| `APIApplicationCommandInteractionDataBasicOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expectedTypes` | `ApplicationCommandOptionType`[] |
| `properties` | [``"value"``] |
| `required` | `boolean` |

#### Returns

``null`` \| `APIApplicationCommandInteractionDataBasicOption`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:355](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L355)

___

### get

▸ **get**(`name`, `required`): `APIApplicationCommandInteractionDataBasicOption`

Get a option by name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `required` | ``true`` | If required and no options found, will throw a error |

#### Returns

`APIApplicationCommandInteractionDataBasicOption`

The option if found, if required is turned of null will be returned if not found

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:338](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L338)

▸ **get**(`name`, `required?`): ``null`` \| `APIApplicationCommandInteractionDataBasicOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `APIApplicationCommandInteractionDataBasicOption`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:342](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L342)

___

### getBoolean

▸ **getBoolean**(`name`, `required`): `boolean`

Retrive a Boolean option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `required` | ``true`` | If required and no Boolean option by name was found, will throw a Error |

#### Returns

`boolean`

the value of the Boolean option

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:406](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L406)

▸ **getBoolean**(`name`, `required?`): ``null`` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `boolean`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:407](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L407)

___

### getChannelId

▸ **getChannelId**(`name`, `required`): `string`

Retrive a Channel option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `required` | ``true`` | If required and no Channel option by name was found, will throw a Error |

#### Returns

`string`

the value of the Channel (channelId) option

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:478](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L478)

▸ **getChannelId**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:479](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L479)

___

### getFocused

▸ **getFocused**(`full`): `APIApplicationCommandInteractionDataBasicOption`

Retreive the currently Focused option, for AutoCompleteInteractions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `full` | ``true`` | Whether to get the full option object |

#### Returns

`APIApplicationCommandInteractionDataBasicOption`

The value of the option, or the whole option if full is true

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:531](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L531)

▸ **getFocused**(`full`): `string` \| `number` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `full` | ``false`` |

#### Returns

`string` \| `number` \| `boolean`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:532](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L532)

___

### getInteger

▸ **getInteger**(`name`, `required`): `number`

Retrive a Integer option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `required` | ``true`` | If required and no Integer option by name was found, will throw a Error |

#### Returns

`number`

the value of the Integer option

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:442](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L442)

▸ **getInteger**(`name`, `required?`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `number`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:443](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L443)

___

### getMentionable

▸ **getMentionable**(`name`, `required`): `string`

Retrive a mentionable option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `required` | ``true`` | If required and no mentionable option by name was found, will throw a Error |

#### Returns

`string`

the value of the mentionable option

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:514](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L514)

▸ **getMentionable**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:515](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L515)

___

### getNumber

▸ **getNumber**(`name`, `required`): `number`

Retrive a Number option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `required` | ``true`` | If required and no Number option by name was found, will throw a Error |

#### Returns

`number`

the value of the Number option

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:424](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L424)

▸ **getNumber**(`name`, `required?`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `number`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:425](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L425)

___

### getRolelId

▸ **getRolelId**(`name`, `required`): `string`

Retrive a Role option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `required` | ``true`` | If required and no Role option by name was found, will throw a Error |

#### Returns

`string`

the value of the Role (roleId) option

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:496](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L496)

▸ **getRolelId**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:497](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L497)

___

### getString

▸ **getString**(`name`, `required`): `string`

Retrive a String option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `required` | ``true`` | If required and no String option by name was found, will throw a Error |

#### Returns

`string`

the value of the string option

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:388](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L388)

▸ **getString**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:389](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L389)

___

### getSubCommand

▸ **getSubCommand**(`required`): `string`

Gets the selected subcommand.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | ``true`` | If required and Subcommand is found, will throw a error |

#### Returns

`string`

The name of the selected subcommand, or null if not set and not required.

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:311](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L311)

___

### getSubCommandGroup

▸ **getSubCommandGroup**(`required`): `string`

Gets the selected subcommand group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | ``true`` | If required and Subcommand group is found, will throw a error |

#### Returns

`string`

The name of the selected subcommand group, or null if not set and not required.

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:324](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L324)

___

### getUserId

▸ **getUserId**(`name`, `required`): `string`

Retrive a User option

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `required` | ``true`` | If required and no User option by name was found, will throw a Error |

#### Returns

`string`

the value of the User (userId) option

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:460](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L460)

▸ **getUserId**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:461](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/BaseInteraction.ts#L461)
