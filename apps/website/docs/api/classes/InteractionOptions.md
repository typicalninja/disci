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

[packages/disci/src/structures/BaseInteraction.ts:295](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L295)

## Properties

### \_options

• `Private` **\_options**: `APIApplicationCommandInteractionDataOption`[]

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:292](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L292)

___

### group

• `Private` `Optional` **group**: `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:294](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L294)

___

### subCommand

• `Private` `Optional` **subCommand**: `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:293](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L293)

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

[packages/disci/src/structures/BaseInteraction.ts:356](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L356)

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

[packages/disci/src/structures/BaseInteraction.ts:339](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L339)

▸ **get**(`name`, `required?`): ``null`` \| `APIApplicationCommandInteractionDataBasicOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `APIApplicationCommandInteractionDataBasicOption`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:343](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L343)

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

[packages/disci/src/structures/BaseInteraction.ts:407](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L407)

▸ **getBoolean**(`name`, `required?`): ``null`` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `boolean`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:408](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L408)

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

[packages/disci/src/structures/BaseInteraction.ts:479](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L479)

▸ **getChannelId**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:480](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L480)

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

[packages/disci/src/structures/BaseInteraction.ts:532](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L532)

▸ **getFocused**(`full`): `string` \| `number` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `full` | ``false`` |

#### Returns

`string` \| `number` \| `boolean`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:533](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L533)

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

[packages/disci/src/structures/BaseInteraction.ts:443](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L443)

▸ **getInteger**(`name`, `required?`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `number`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:444](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L444)

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

[packages/disci/src/structures/BaseInteraction.ts:515](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L515)

▸ **getMentionable**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:516](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L516)

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

[packages/disci/src/structures/BaseInteraction.ts:425](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L425)

▸ **getNumber**(`name`, `required?`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `number`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:426](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L426)

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

[packages/disci/src/structures/BaseInteraction.ts:497](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L497)

▸ **getRolelId**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:498](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L498)

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

[packages/disci/src/structures/BaseInteraction.ts:389](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L389)

▸ **getString**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:390](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L390)

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

[packages/disci/src/structures/BaseInteraction.ts:312](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L312)

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

[packages/disci/src/structures/BaseInteraction.ts:325](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L325)

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

[packages/disci/src/structures/BaseInteraction.ts:461](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L461)

▸ **getUserId**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:462](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/BaseInteraction.ts#L462)
