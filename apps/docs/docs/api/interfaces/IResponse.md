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

[packages/disci/src/utils/request.ts:61](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/request.ts#L61)

___

### responseHeaders

• `Optional` **responseHeaders**: `Record`<`string`, `string`\>

Response headers set according to the data

#### Defined in

[packages/disci/src/utils/request.ts:65](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/request.ts#L65)

___

### statusCode

• **statusCode**: `number`

Status code for this response

#### Defined in

[packages/disci/src/utils/request.ts:57](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/utils/request.ts#L57)
