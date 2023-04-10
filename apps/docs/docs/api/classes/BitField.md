---
id: "BitField"
title: "Class: BitField"
sidebar_label: "BitField"
sidebar_position: 0
custom_edit_url: null
---

Utility structure to help with bitfield creation and manipulation

## Hierarchy

- **`BitField`**

  ↳ [`PermissionsBitField`](PermissionsBitField.md)

  ↳ [`UserFlagsBitField`](UserFlagsBitField.md)

## Constructors

### constructor

• **new BitField**(`baseBits?`)

Create a new Bitfield Instance

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseBits` | [`BitFieldResolvable`](../modules.md#bitfieldresolvable) | `BitField.None` | Base bits to institate the class with |

#### Defined in

[packages/disci/src/structures/Bitfield.ts:17](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L17)

## Properties

### bitfield

• **bitfield**: `bigint`

#### Defined in

[packages/disci/src/structures/Bitfield.ts:12](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L12)

___

### Flags

▪ `Static` **Flags**: `unknown` = `{}`

#### Defined in

[packages/disci/src/structures/Bitfield.ts:10](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L10)

___

### None

▪ `Static` **None**: `bigint`

#### Defined in

[packages/disci/src/structures/Bitfield.ts:11](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L11)

## Methods

### add

▸ **add**(`bits`): [`BitField`](BitField.md)

Adds bits to the bitfield

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | [`BitFieldResolvable`](../modules.md#bitfieldresolvable)[] | New bits to add |

#### Returns

[`BitField`](BitField.md)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:26](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L26)

___

### equals

▸ **equals**(`bit`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | [`BitFieldResolvable`](../modules.md#bitfieldresolvable) |

#### Returns

`boolean`

#### Defined in

[packages/disci/src/structures/Bitfield.ts:59](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L59)

___

### has

▸ **has**(`bits`): `boolean`

checks if all bits are present in the bitfield

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | [`BitFieldResolvable`](../modules.md#bitfieldresolvable) | bits to check |

#### Returns

`boolean`

#### Defined in

[packages/disci/src/structures/Bitfield.ts:54](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L54)

___

### remove

▸ **remove**(`bits`): [`BitField`](BitField.md)

Removes bits from the bitfield

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | [`BitFieldResolvable`](../modules.md#bitfieldresolvable)[] | bits to remove |

#### Returns

[`BitField`](BitField.md)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:40](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L40)

___

### resolve

▸ `Static` **resolve**(`bit`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | [`BitFieldResolvable`](../modules.md#bitfieldresolvable) |

#### Returns

`bigint`

#### Defined in

[packages/disci/src/structures/Bitfield.ts:63](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/structures/Bitfield.ts#L63)
