---
id: "InteractionHandler"
title: "Class: InteractionHandler"
sidebar_label: "InteractionHandler"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `TypedEmitter`<[`IClientEvents`](../interfaces/IClientEvents.md), `this`\>

  ↳ **`InteractionHandler`**

## Constructors

### constructor

• **new InteractionHandler**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`IHandlerOptions`](../interfaces/IHandlerOptions.md)\> |

#### Overrides

(EventEmitter as unknown as new () &#x3D;\&gt; TypedEmitter&lt;IClientEvents\&gt;).constructor

#### Defined in

[packages/disci/src/InteractionHandler.ts:34](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/InteractionHandler.ts#L34)

## Properties

### api

• **api**: [`Rest`](Rest.md)

Rest Manager

#### Defined in

[packages/disci/src/InteractionHandler.ts:29](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/InteractionHandler.ts#L29)

___

### options

• **options**: [`IHandlerOptions`](../interfaces/IHandlerOptions.md)

#### Defined in

[packages/disci/src/InteractionHandler.ts:25](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/InteractionHandler.ts#L25)

___

### verificationStratergy

• `Private` **verificationStratergy**: [`verificationStratergy`](../interfaces/VerificationStratergy.verificationStratergy.md)

Verifiction stratergy for request verification

#### Defined in

[packages/disci/src/InteractionHandler.ts:33](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/InteractionHandler.ts#L33)

## Methods

### debug

▸ `Private` **debug**(`msg`): `undefined`

Internal function for debugging conditionally

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`undefined`

#### Defined in

[packages/disci/src/InteractionHandler.ts:51](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/InteractionHandler.ts#L51)

___

### getVerificationStratergy

▸ `Private` **getVerificationStratergy**(`receivedStrat`): [`verificationStratergy`](../interfaces/VerificationStratergy.verificationStratergy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `receivedStrat` | ``null`` \| `string` \| [`verificationStratergy`](../interfaces/VerificationStratergy.verificationStratergy.md) |

#### Returns

[`verificationStratergy`](../interfaces/VerificationStratergy.verificationStratergy.md)

#### Defined in

[packages/disci/src/InteractionHandler.ts:41](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/InteractionHandler.ts#L41)

___

### handleRequest

▸ **handleRequest**(`req`): `Promise`<[`IResponse`](../interfaces/IResponse.md)\>

Handles a Request and returns a Response Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `unknown` |

#### Returns

`Promise`<[`IResponse`](../interfaces/IResponse.md)\>

A Object containing Response Object.Does not reject

#### Defined in

[packages/disci/src/InteractionHandler.ts:66](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/InteractionHandler.ts#L66)

___

### processRequest

▸ **processRequest**(`req`): `Promise`<[`IResponse`](../interfaces/IResponse.md)\>

Process a request and return a response according to the request.
You must use the respctive method of returning a response to the client of your framework and return the Response back.
this does not verify if request is valid or not

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](../interfaces/IRequest.md) |

#### Returns

`Promise`<[`IResponse`](../interfaces/IResponse.md)\>

a Response Object containing data to be responded with

#### Defined in

[packages/disci/src/InteractionHandler.ts:96](https://github.com/typicalninja493/disci/blob/1035cbc/packages/disci/src/InteractionHandler.ts#L96)
