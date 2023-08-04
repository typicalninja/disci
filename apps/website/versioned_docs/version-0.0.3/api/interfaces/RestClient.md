---
id: "RestClient"
title: "Interface: RestClient"
sidebar_label: "RestClient"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`Rest`](../classes/Rest.md)

## Properties

### authToken

• **authToken**: `string`

#### Defined in

[packages/disci/src/utils/REST.ts:15](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L15)

___

### makeRequest

• **makeRequest**: <T\>(`method`: `string`, `path`: `string`, `opts`: [`RESTCommonOptions`](RESTCommonOptions.md)) => `Promise`<`T`\>

#### Type declaration

▸ <`T`\>(`method`, `path`, `opts`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `path` | `string` |
| `opts` | [`RESTCommonOptions`](RESTCommonOptions.md) |

##### Returns

`Promise`<`T`\>

#### Defined in

[packages/disci/src/utils/REST.ts:10](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L10)

___

### rootUrl

• **rootUrl**: `string`

#### Defined in

[packages/disci/src/utils/REST.ts:16](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L16)
