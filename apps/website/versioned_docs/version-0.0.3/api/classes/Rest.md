---
id: "Rest"
title: "Class: Rest"
sidebar_label: "Rest"
sidebar_position: 0
custom_edit_url: null
---

Default rest handler, built for serverLess Environments without any rate limit checks

## Implements

- [`RestClient`](../interfaces/RestClient.md)

## Constructors

### constructor

• **new Rest**(`_opts`)

for support of serverless and other platforms

#### Parameters

| Name | Type |
| :------ | :------ |
| `_opts` | [`RESTClientOptions`](../interfaces/RESTClientOptions.md) |

#### Defined in

[packages/disci/src/utils/REST.ts:43](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L43)

## Properties

### authPrefix

• **authPrefix**: `string`

#### Defined in

[packages/disci/src/utils/REST.ts:37](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L37)

___

### authToken

• **authToken**: `string`

#### Implementation of

[RestClient](../interfaces/RestClient.md).[authToken](../interfaces/RestClient.md#authtoken)

#### Defined in

[packages/disci/src/utils/REST.ts:38](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L38)

___

### rootUrl

• **rootUrl**: `string`

#### Implementation of

[RestClient](../interfaces/RestClient.md).[rootUrl](../interfaces/RestClient.md#rooturl)

#### Defined in

[packages/disci/src/utils/REST.ts:39](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L39)

## Accessors

### authHeader

• `get` **authHeader**(): `string`

#### Returns

`string`

#### Defined in

[packages/disci/src/utils/REST.ts:128](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L128)

## Methods

### delete

▸ **delete**<`T`\>(`path`, `opts?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `opts?` | [`RESTCommonOptions`](../interfaces/RESTCommonOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/disci/src/utils/REST.ts:109](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L109)

___

### get

▸ **get**<`T`\>(`path`, `opts?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `opts?` | [`RESTCommonOptions`](../interfaces/RESTCommonOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/disci/src/utils/REST.ts:97](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L97)

___

### getUrl

▸ `Private` **getUrl**(`path`, `queryParams?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `queryParams?` | `Record`<`string`, `string`\> |

#### Returns

`string`

#### Defined in

[packages/disci/src/utils/REST.ts:112](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L112)

___

### makeRequest

▸ **makeRequest**<`T`\>(`method`, `path`, `opts?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `path` | `string` |
| `opts?` | [`RESTCommonOptions`](../interfaces/RESTCommonOptions.md) |

#### Returns

`Promise`<`T`\>

#### Implementation of

RestClient.makeRequest

#### Defined in

[packages/disci/src/utils/REST.ts:65](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L65)

___

### patch

▸ **patch**<`T`\>(`path`, `opts?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `opts?` | [`RESTCommonOptions`](../interfaces/RESTCommonOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/disci/src/utils/REST.ts:106](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L106)

___

### post

▸ **post**<`T`\>(`path`, `opts?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `opts?` | [`RESTCommonOptions`](../interfaces/RESTCommonOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/disci/src/utils/REST.ts:100](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L100)

___

### put

▸ **put**<`T`\>(`path`, `opts?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `opts?` | [`RESTCommonOptions`](../interfaces/RESTCommonOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/disci/src/utils/REST.ts:103](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L103)

___

### setToken

▸ **setToken**(`token`): [`Rest`](Rest.md)

Set the current active token, request may fail if this is not set

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`Rest`](Rest.md)

#### Defined in

[packages/disci/src/utils/REST.ts:57](https://github.com/typicalninja493/disci/blob/bbc5c20/packages/disci/src/utils/REST.ts#L57)
