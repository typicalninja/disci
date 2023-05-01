# Class: InteractionHandler

## Hierarchy

- `TypedEmitter`<[`IClientEvents`](../interfaces/IClientEvents.md), `this`\>

  ↳ **`InteractionHandler`**

## Table of contents

### Constructors

- [constructor](InteractionHandler.md#constructor)

### Properties

- [api](InteractionHandler.md#api)
- [options](InteractionHandler.md#options)
- [verificationStratergy](InteractionHandler.md#verificationstratergy)

### Methods

- [debug](InteractionHandler.md#debug)
- [getVerificationStratergy](InteractionHandler.md#getverificationstratergy)
- [handleRequest](InteractionHandler.md#handlerequest)
- [processRequest](InteractionHandler.md#processrequest)

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

[packages/disci/src/InteractionHandler.ts:25](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/InteractionHandler.ts#L25)

## Properties

### api

• **api**: [`Rest`](Rest.md)

Rest Manager

#### Defined in

[packages/disci/src/InteractionHandler.ts:20](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/InteractionHandler.ts#L20)

___

### options

• **options**: [`IHandlerOptions`](../interfaces/IHandlerOptions.md)

#### Defined in

[packages/disci/src/InteractionHandler.ts:16](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/InteractionHandler.ts#L16)

___

### verificationStratergy

• `Private` **verificationStratergy**: [`verificationStratergy`](../interfaces/verificationStratergy.md)

Verifiction stratergy for request verification

#### Defined in

[packages/disci/src/InteractionHandler.ts:24](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/InteractionHandler.ts#L24)

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

[packages/disci/src/InteractionHandler.ts:42](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/InteractionHandler.ts#L42)

___

### getVerificationStratergy

▸ `Private` **getVerificationStratergy**(`receivedStrat`): [`verificationStratergy`](../interfaces/verificationStratergy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `receivedStrat` | ``null`` \| `string` \| [`verificationStratergy`](../interfaces/verificationStratergy.md) |

#### Returns

[`verificationStratergy`](../interfaces/verificationStratergy.md)

#### Defined in

[packages/disci/src/InteractionHandler.ts:32](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/InteractionHandler.ts#L32)

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

[packages/disci/src/InteractionHandler.ts:57](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/InteractionHandler.ts#L57)

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

[packages/disci/src/InteractionHandler.ts:84](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/InteractionHandler.ts#L84)
