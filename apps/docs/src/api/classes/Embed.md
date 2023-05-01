# Class: Embed

Utility to create a Embed and manipulate already existing embeds

## Table of contents

### Constructors

- [constructor](Embed.md#constructor)

### Properties

- [baseEmbed](Embed.md#baseembed)

### Methods

- [addField](Embed.md#addfield)
- [addFields](Embed.md#addfields)
- [removeFields](Embed.md#removefields)
- [setDescription](Embed.md#setdescription)
- [setFooter](Embed.md#setfooter)
- [toJSON](Embed.md#tojson)

## Constructors

### constructor

• **new Embed**(`baseEmbed?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseEmbed` | `APIEmbed` |

#### Defined in

[packages/disci/src/structures/Embed.ts:34](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Embed.ts#L34)

## Properties

### baseEmbed

• **baseEmbed**: `APIEmbed` = `{}`

#### Defined in

[packages/disci/src/structures/Embed.ts:34](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Embed.ts#L34)

## Methods

### addField

▸ **addField**(`name`, `value`, `inline?`): [`Embed`](Embed.md)

Add a field to the Embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the field |
| `value` | `string` |  |
| `inline?` | `boolean` |  |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[packages/disci/src/structures/Embed.ts:42](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Embed.ts#L42)

___

### addFields

▸ **addFields**(`fields`): [`Embed`](Embed.md)

Add several fields to the Embed

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | { `inline?`: `boolean` ; `name`: `string` ; `value`: `string`  }[] |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[packages/disci/src/structures/Embed.ts:58](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Embed.ts#L58)

___

### removeFields

▸ **removeFields**(`name`): [`Embed`](Embed.md)

Removes one or more fields from the embed

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `string`[] |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[packages/disci/src/structures/Embed.ts:75](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Embed.ts#L75)

___

### setDescription

▸ **setDescription**(`description`): [`Embed`](Embed.md)

Set a Description for this embed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | ``null`` \| `string` | Description to set, null to remove |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[packages/disci/src/structures/Embed.ts:88](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Embed.ts#L88)

___

### setFooter

▸ **setFooter**(`footerOpts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `footerOpts` | `Partial`<[`IEmbedFooter`](../interfaces/IEmbedFooter.md)\> |

#### Returns

`void`

#### Defined in

[packages/disci/src/structures/Embed.ts:94](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Embed.ts#L94)

___

### toJSON

▸ **toJSON**(): `APIEmbed`

Convert a Embed into APIEmbed

#### Returns

`APIEmbed`

#### Defined in

[packages/disci/src/structures/Embed.ts:105](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Embed.ts#L105)
