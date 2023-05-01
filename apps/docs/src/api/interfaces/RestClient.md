# Interface: RestClient

## Implemented by

- [`Rest`](../classes/Rest.md)

## Table of contents

### Properties

- [authToken](RestClient.md#authtoken)
- [makeRequest](RestClient.md#makerequest)
- [rootUrl](RestClient.md#rooturl)

## Properties

### authToken

• **authToken**: `string`

#### Defined in

[packages/disci/src/utils/REST.ts:10](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L10)

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

[packages/disci/src/utils/REST.ts:9](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L9)

___

### rootUrl

• **rootUrl**: `string`

#### Defined in

[packages/disci/src/utils/REST.ts:11](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/REST.ts#L11)
