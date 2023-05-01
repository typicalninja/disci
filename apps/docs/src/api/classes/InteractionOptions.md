# Class: InteractionOptions

Utility for working with interaction options

## Table of contents

### Constructors

- [constructor](InteractionOptions.md#constructor)

### Properties

- [\_options](InteractionOptions.md#options)
- [group](InteractionOptions.md#group)
- [subCommand](InteractionOptions.md#subcommand)

### Methods

- [\_getType](InteractionOptions.md#gettype)
- [get](InteractionOptions.md#get)
- [getBoolean](InteractionOptions.md#getboolean)
- [getChannelId](InteractionOptions.md#getchannelid)
- [getFocused](InteractionOptions.md#getfocused)
- [getInteger](InteractionOptions.md#getinteger)
- [getMentionable](InteractionOptions.md#getmentionable)
- [getNumber](InteractionOptions.md#getnumber)
- [getRolelId](InteractionOptions.md#getrolelid)
- [getString](InteractionOptions.md#getstring)
- [getSubCommand](InteractionOptions.md#getsubcommand)
- [getSubCommandGroup](InteractionOptions.md#getsubcommandgroup)
- [getUserId](InteractionOptions.md#getuserid)

## Constructors

### constructor

• **new InteractionOptions**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `APIApplicationCommandInteractionDataOption`[] |

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:284](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L284)

## Properties

### \_options

• `Private` **\_options**: `APIApplicationCommandInteractionDataOption`[]

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:281](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L281)

___

### group

• `Private` `Optional` **group**: `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:283](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L283)

___

### subCommand

• `Private` `Optional` **subCommand**: `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:282](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L282)

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

[packages/disci/src/structures/BaseInteraction.ts:330](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L330)

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

[packages/disci/src/structures/BaseInteraction.ts:322](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L322)

▸ **get**(`name`, `required?`): ``null`` \| `APIApplicationCommandInteractionDataBasicOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `APIApplicationCommandInteractionDataBasicOption`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:323](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L323)

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

[packages/disci/src/structures/BaseInteraction.ts:365](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L365)

▸ **getBoolean**(`name`, `required?`): ``null`` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `boolean`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:366](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L366)

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

[packages/disci/src/structures/BaseInteraction.ts:409](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L409)

▸ **getChannelId**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:410](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L410)

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

[packages/disci/src/structures/BaseInteraction.ts:441](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L441)

▸ **getFocused**(`full`): `string` \| `number` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `full` | ``false`` |

#### Returns

`string` \| `number` \| `boolean`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:442](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L442)

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

[packages/disci/src/structures/BaseInteraction.ts:387](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L387)

▸ **getInteger**(`name`, `required?`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `number`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:388](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L388)

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

[packages/disci/src/structures/BaseInteraction.ts:431](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L431)

▸ **getMentionable**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:432](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L432)

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

[packages/disci/src/structures/BaseInteraction.ts:376](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L376)

▸ **getNumber**(`name`, `required?`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `number`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:377](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L377)

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

[packages/disci/src/structures/BaseInteraction.ts:420](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L420)

▸ **getRolelId**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:421](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L421)

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

[packages/disci/src/structures/BaseInteraction.ts:354](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L354)

▸ **getString**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:355](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L355)

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

[packages/disci/src/structures/BaseInteraction.ts:301](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L301)

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

[packages/disci/src/structures/BaseInteraction.ts:311](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L311)

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

[packages/disci/src/structures/BaseInteraction.ts:398](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L398)

▸ **getUserId**(`name`, `required?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `required?` | `boolean` |

#### Returns

``null`` \| `string`

#### Defined in

[packages/disci/src/structures/BaseInteraction.ts:399](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/BaseInteraction.ts#L399)
