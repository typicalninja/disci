# Class: MessageFlagsBitField

Utility structure to help with bitfield creation and manipulation

## Hierarchy

- [`BitField`](BitField.md)

  ↳ **`MessageFlagsBitField`**

## Table of contents

### Constructors

- [constructor](MessageFlagsBitField.md#constructor)

### Properties

- [bitfield](MessageFlagsBitField.md#bitfield)
- [Flags](MessageFlagsBitField.md#flags)
- [None](MessageFlagsBitField.md#none)

### Methods

- [add](MessageFlagsBitField.md#add)
- [equals](MessageFlagsBitField.md#equals)
- [has](MessageFlagsBitField.md#has)
- [remove](MessageFlagsBitField.md#remove)
- [resolve](MessageFlagsBitField.md#resolve)

## Constructors

### constructor

• **new MessageFlagsBitField**(`baseBits?`)

Create a new Bitfield Instance

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseBits` | [`BitFieldResolvable`](../README.md#bitfieldresolvable) | `BitField.None` | Base bits to institate the class with |

#### Inherited from

[BitField](BitField.md).[constructor](BitField.md#constructor)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:17](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L17)

## Properties

### bitfield

• **bitfield**: `bigint`

#### Inherited from

[BitField](BitField.md).[bitfield](BitField.md#bitfield)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:12](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L12)

___

### Flags

▪ `Static` **Flags**: typeof `MessageFlags` = `MessageFlags`

#### Overrides

[BitField](BitField.md).[Flags](BitField.md#flags)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:95](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L95)

___

### None

▪ `Static` **None**: `bigint`

#### Inherited from

[BitField](BitField.md).[None](BitField.md#none)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:11](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L11)

## Methods

### add

▸ **add**(`bits`): [`BitField`](BitField.md)

Adds bits to the bitfield

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | [`BitFieldResolvable`](../README.md#bitfieldresolvable)[] | New bits to add |

#### Returns

[`BitField`](BitField.md)

#### Inherited from

[BitField](BitField.md).[add](BitField.md#add)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:26](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L26)

___

### equals

▸ **equals**(`bit`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | [`BitFieldResolvable`](../README.md#bitfieldresolvable) |

#### Returns

`boolean`

#### Inherited from

[BitField](BitField.md).[equals](BitField.md#equals)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:59](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L59)

___

### has

▸ **has**(`bits`): `boolean`

checks if all bits are present in the bitfield

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | [`BitFieldResolvable`](../README.md#bitfieldresolvable) | bits to check |

#### Returns

`boolean`

#### Inherited from

[BitField](BitField.md).[has](BitField.md#has)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:54](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L54)

___

### remove

▸ **remove**(`bits`): [`BitField`](BitField.md)

Removes bits from the bitfield

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bits` | [`BitFieldResolvable`](../README.md#bitfieldresolvable)[] | bits to remove |

#### Returns

[`BitField`](BitField.md)

#### Inherited from

[BitField](BitField.md).[remove](BitField.md#remove)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:40](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L40)

___

### resolve

▸ `Static` **resolve**(`bit`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bit` | [`BitFieldResolvable`](../README.md#bitfieldresolvable) |

#### Returns

`bigint`

#### Inherited from

[BitField](BitField.md).[resolve](BitField.md#resolve)

#### Defined in

[packages/disci/src/structures/Bitfield.ts:63](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Bitfield.ts#L63)
