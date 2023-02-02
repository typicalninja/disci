---
id: "IResponse"
title: "Interface: IResponse"
sidebar_label: "IResponse"
sidebar_position: 0
custom_edit_url: null
---

Data returned by handleRequest

## Properties

### responseData

• **responseData**: `APIInteractionResponse` \| { `data`: `string`  }

Response to the request

#### Defined in

[packages/disci/src/utils/request.ts:40](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/request.ts#L40)

___

### responseHeaders

• `Optional` **responseHeaders**: `Record`<`string`, `string`\>

Response headers set according to the data

#### Defined in

[packages/disci/src/utils/request.ts:44](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/request.ts#L44)

___

### statusCode

• **statusCode**: `number`

Status code for this response

#### Defined in

[packages/disci/src/utils/request.ts:36](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/utils/request.ts#L36)
