---
id: "Rest"
title: "Class: Rest"
sidebar_label: "Rest"
sidebar_position: 0
custom_edit_url: null
---

Default rest handler, built for serverLess Environments without any ratelimit checks

## Implements

- `RestClient`

## Constructors

### constructor

• **new Rest**(`_opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_opts` | `RESTClientOptions` |

#### Defined in

[packages/disci/src/utils/REST.ts:32](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L32)

## Properties

### authPrefix

• **authPrefix**: `string`

#### Defined in

[packages/disci/src/utils/REST.ts:29](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L29)

___

### authToken

• **authToken**: `string`

#### Implementation of

RestClient.authToken

#### Defined in

[packages/disci/src/utils/REST.ts:30](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L30)

___

### rootUrl

• **rootUrl**: `string`

#### Implementation of

RestClient.rootUrl

#### Defined in

[packages/disci/src/utils/REST.ts:31](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L31)

## Accessors

### authheader

• `get` **authheader**(): `string`

#### Returns

`string`

#### Defined in

[packages/disci/src/utils/REST.ts:92](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L92)

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

[packages/disci/src/utils/REST.ts:71](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L71)

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

[packages/disci/src/utils/REST.ts:59](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L59)

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

[packages/disci/src/utils/REST.ts:74](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L74)

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

[packages/disci/src/utils/REST.ts:37](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L37)

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

[packages/disci/src/utils/REST.ts:68](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L68)

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

[packages/disci/src/utils/REST.ts:62](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L62)

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

[packages/disci/src/utils/REST.ts:65](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/REST.ts#L65)
