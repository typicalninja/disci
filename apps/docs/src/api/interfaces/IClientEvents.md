# Interface: IClientEvents

Events fired by the handler

## Table of contents

### Properties

- [error](IClientEvents.md#error)
- [interactionCreate](IClientEvents.md#interactioncreate)

## Properties

### error

• **error**: (`err`: `unknown`) => `void`

#### Type declaration

▸ (`err`): `void`

Fired when there is a error

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `unknown` |

##### Returns

`void`

#### Defined in

[packages/disci/src/utils/constants.ts:80](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/constants.ts#L80)

___

### interactionCreate

• **interactionCreate**: (`interaction`: [`InteractionContext`](../README.md#interactioncontext)) => `void`

#### Type declaration

▸ (`interaction`): `void`

Fired when a interaction is received

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interaction` | [`InteractionContext`](../README.md#interactioncontext) | Interaction contact |

##### Returns

`void`

#### Defined in

[packages/disci/src/utils/constants.ts:74](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/constants.ts#L74)
