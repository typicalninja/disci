---
id: "MessageFlagsBitField"
title: "Class: MessageFlagsBitField"
sidebar_label: "MessageFlagsBitField"
sidebar_position: 0
custom_edit_url: null
---

Utility structure to help with bitfield creation and manipulation

## Hierarchy

- [`BitField`](BitField.md)

  ↳ **`MessageFlagsBitField`**

## Constructors

### constructor

• **new MessageFlagsBitField**(`baseBits?`)

Create a new Bitfield Instance

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseBits` | [`BitFieldResolvable`](../modules.md#bitfieldresolvable) | `BitField.None` | Base bits to institate the class with |

#### Inherited from

[BitField](BitField.md).[constructor](BitField.md#constructor)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:21](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/Bitfield.ts#L21)

## Properties

### bitfield

• **bitfield**: `bigint`

#### Inherited from

[BitField](BitField.md).[bitfield](BitField.md#bitfield)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:16](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/Bitfield.ts#L16)

___

### Flags

▪ `Static` **Flags**: typeof `MessageFlags` = `MessageFlags`

#### Overrides

[BitField](BitField.md).[Flags](BitField.md#flags)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:110](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/Bitfield.ts#L110)

___

### None

▪ `Static` **None**: `bigint`

#### Inherited from

[BitField](BitField.md).[None](BitField.md#none)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:15](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/Bitfield.ts#L15)

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

#### Inherited from

[BitField](BitField.md).[add](BitField.md#add)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:30](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/Bitfield.ts#L30)

___

### equals

▸ **equals**(`bit`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | [`BitFieldResolvable`](../modules.md#bitfieldresolvable) |

#### Returns

`boolean`

#### Inherited from

[BitField](BitField.md).[equals](BitField.md#equals)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:63](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/Bitfield.ts#L63)

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

#### Inherited from

[BitField](BitField.md).[has](BitField.md#has)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:58](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/Bitfield.ts#L58)

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

#### Inherited from

[BitField](BitField.md).[remove](BitField.md#remove)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:44](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/Bitfield.ts#L44)

___

### resolve

▸ `Static` **resolve**(`bit`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | [`BitFieldResolvable`](../modules.md#bitfieldresolvable) |

#### Returns

`bigint`

#### Inherited from

[BitField](BitField.md).[resolve](BitField.md#resolve)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:67](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/structures/Bitfield.ts#L67)
