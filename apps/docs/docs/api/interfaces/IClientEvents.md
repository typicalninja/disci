---
id: "IClientEvents"
title: "Interface: IClientEvents"
sidebar_label: "IClientEvents"
sidebar_position: 0
custom_edit_url: null
---

Events fired by the handler

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

[packages/disci/src/utils/constants.ts:85](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/constants.ts#L85)

___

### interactionCreate

• **interactionCreate**: (`interaction`: [`InteractionContext`](../modules.md#interactioncontext)) => `void`

#### Type declaration

▸ (`interaction`): `void`

Fired when a interaction is received

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interaction` | [`InteractionContext`](../modules.md#interactioncontext) | Interaction contact |

##### Returns

`void`

#### Defined in

[packages/disci/src/utils/constants.ts:79](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/constants.ts#L79)
