---
id: "EmbedBuilder"
title: "Class: EmbedBuilder"
sidebar_label: "EmbedBuilder"
sidebar_position: 0
custom_edit_url: null
---

Utility to create a Embed

## Constructors

### constructor

• **new EmbedBuilder**(`baseEmbed`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseEmbed` | `APIEmbed` |

#### Defined in

[packages/disci/src/structures/Embed.ts:34](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Embed.ts#L34)

## Properties

### baseEmbed

• **baseEmbed**: `APIEmbed`

#### Defined in

[packages/disci/src/structures/Embed.ts:34](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Embed.ts#L34)

## Methods

### addField

▸ **addField**(`name`, `value`, `inline?`): [`EmbedBuilder`](EmbedBuilder.md)

Add a field to the Embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the field |
| `value` | `string` |  |
| `inline?` | `boolean` |  |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[packages/disci/src/structures/Embed.ts:44](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Embed.ts#L44)

___

### addFields

▸ **addFields**(`fields`): [`EmbedBuilder`](EmbedBuilder.md)

Add several fields to the Embed

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | { `inline?`: `boolean` ; `name`: `string` ; `value`: `string`  }[] |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[packages/disci/src/structures/Embed.ts:59](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Embed.ts#L59)

___

### removeFields

▸ **removeFields**(`name`): [`EmbedBuilder`](EmbedBuilder.md)

Removes one or more fields from the embed

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `string`[] |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[packages/disci/src/structures/Embed.ts:71](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Embed.ts#L71)

___

### setDescription

▸ **setDescription**(`description`): [`EmbedBuilder`](EmbedBuilder.md)

Set a Description for this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | ``null`` \| `string` | Description to set, null to remove |

#### Returns

[`EmbedBuilder`](EmbedBuilder.md)

#### Defined in

[packages/disci/src/structures/Embed.ts:84](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Embed.ts#L84)

___

### setFooter

▸ **setFooter**(`footerOpts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `footerOpts` | `Partial`<`IEmbedFooter`\> |

#### Returns

`void`

#### Defined in

[packages/disci/src/structures/Embed.ts:89](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Embed.ts#L89)

___

### toJSON

▸ **toJSON**(): `APIEmbed`

Convert a Embed into APIEmbed

#### Returns

`APIEmbed`

#### Defined in

[packages/disci/src/structures/Embed.ts:99](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Embed.ts#L99)
