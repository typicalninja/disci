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

• **error**: (`err`: `Error`) => `void`

#### Type declaration

▸ (`err`): `void`

Fired when there is a error

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

##### Returns

`void`

#### Defined in

[packages/disci/src/utils/constants.ts:88](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L88)

___

### interactionCreate

• **interactionCreate**: (`interaction`: `ChatInputInteraction`) => `void`

#### Type declaration

▸ (`interaction`): `void`

Fired when a interaction is received

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interaction` | `ChatInputInteraction` | Interaction contact |

##### Returns

`void`

#### Defined in

[packages/disci/src/utils/constants.ts:82](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/constants.ts#L82)
