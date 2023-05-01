# Class: Rest

Default rest handler, built for serverLess Environments without any ratelimit checks

## Implements

- [`RestClient`](../interfaces/RestClient.md)

## Table of contents

### Constructors

- [constructor](Rest.md#constructor)

### Properties

- [authPrefix](Rest.md#authprefix)
- [authToken](Rest.md#authtoken)
- [rootUrl](Rest.md#rooturl)

### Accessors

- [authheader](Rest.md#authheader)

### Methods

- [delete](Rest.md#delete)
- [get](Rest.md#get)
- [getUrl](Rest.md#geturl)
- [makeRequest](Rest.md#makerequest)
- [patch](Rest.md#patch)
- [post](Rest.md#post)
- [put](Rest.md#put)

## Constructors

### constructor

• **new Rest**(`_opts`)

for support of serverless and other platforms

#### Parameters

| Name | Type |
| :------ | :------ |
| `_opts` | [`RESTClientOptions`](../interfaces/RESTClientOptions.md) |

#### Defined in

[packages/disci/src/utils/REST.ts:35](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L35)

## Properties

### authPrefix

• **authPrefix**: `string`

#### Defined in

[packages/disci/src/utils/REST.ts:29](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L29)

___

### authToken

• **authToken**: `string`

#### Implementation of

[RestClient](../interfaces/RestClient.md).[authToken](../interfaces/RestClient.md#authtoken)

#### Defined in

[packages/disci/src/utils/REST.ts:30](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L30)

___

### rootUrl

• **rootUrl**: `string`

#### Implementation of

[RestClient](../interfaces/RestClient.md).[rootUrl](../interfaces/RestClient.md#rooturl)

#### Defined in

[packages/disci/src/utils/REST.ts:31](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L31)

## Accessors

### authheader

• `get` **authheader**(): `string`

#### Returns

`string`

#### Defined in

[packages/disci/src/utils/REST.ts:99](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L99)

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

[packages/disci/src/utils/REST.ts:80](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L80)

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

[packages/disci/src/utils/REST.ts:68](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L68)

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

[packages/disci/src/utils/REST.ts:83](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L83)

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

[packages/disci/src/utils/REST.ts:44](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L44)

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

[packages/disci/src/utils/REST.ts:77](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L77)

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

[packages/disci/src/utils/REST.ts:71](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L71)

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

[packages/disci/src/utils/REST.ts:74](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L74)
