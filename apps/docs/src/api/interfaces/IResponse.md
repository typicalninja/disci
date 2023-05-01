# Interface: IResponse

Data returned by handleRequest

## Table of contents

### Properties

- [responseData](IResponse.md#responsedata)
- [responseHeaders](IResponse.md#responseheaders)
- [statusCode](IResponse.md#statuscode)

## Properties

### responseData

• **responseData**: `APIInteractionResponse` \| { `data`: `string`  }

Response to the request

#### Defined in

[packages/disci/src/utils/request.ts:62](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/request.ts#L62)

___

### responseHeaders

• `Optional` **responseHeaders**: `Record`<`string`, `string`\>

Response headers set according to the data

#### Defined in

[packages/disci/src/utils/request.ts:66](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/request.ts#L66)

___

### statusCode

• **statusCode**: `number`

Status code for this response

#### Defined in

[packages/disci/src/utils/request.ts:58](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/request.ts#L58)
