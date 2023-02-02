---
id: "InteractionHandler"
title: "Class: InteractionHandler"
sidebar_label: "InteractionHandler"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `TypedEmitter`<[`IClientEvents`](../interfaces/IClientEvents.md)\>

  ↳ **`InteractionHandler`**

## Constructors

### constructor

• **new InteractionHandler**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`IHandlerOptions`](../interfaces/IHandlerOptions.md)\> |

#### Overrides

TypedEmitter&lt;IClientEvents\&gt;.constructor

#### Defined in

[packages/disci/src/InteractionHandler.ts:31](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/InteractionHandler.ts#L31)

## Properties

### options

• **options**: [`IHandlerOptions`](../interfaces/IHandlerOptions.md)

#### Defined in

[packages/disci/src/InteractionHandler.ts:28](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/InteractionHandler.ts#L28)

___

### publicKey

• `Private` **publicKey**: ``null`` \| `CryptoKey`

#### Defined in

[packages/disci/src/InteractionHandler.ts:30](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/InteractionHandler.ts#L30)

___

### rest

• **rest**: `REST`

#### Defined in

[packages/disci/src/InteractionHandler.ts:29](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/InteractionHandler.ts#L29)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

TypedEmitter.defaultMaxListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:10

## Methods

### addListener

▸ **addListener**<`U`\>(`event`, `listener`): [`InteractionHandler`](InteractionHandler.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`IClientEvents`](../interfaces/IClientEvents.md)[`U`] |

#### Returns

[`InteractionHandler`](InteractionHandler.md)

#### Inherited from

TypedEmitter.addListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:11

___

### emit

▸ **emit**<`U`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `...args` | `Parameters`<[`IClientEvents`](../interfaces/IClientEvents.md)[`U`]\> |

#### Returns

`boolean`

#### Inherited from

TypedEmitter.emit

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:19

___

### eventNames

▸ **eventNames**<`U`\>(): `U`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Returns

`U`[]

#### Inherited from

TypedEmitter.eventNames

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:20

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

TypedEmitter.getMaxListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:24

___

### handleRequest

▸ **handleRequest**(`req`): `Promise`<[`IResponse`](../interfaces/IResponse.md)\>

Handles a Request and returns a Response Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](../interfaces/IRequest.md) |

#### Returns

`Promise`<[`IResponse`](../interfaces/IResponse.md)\>

A Object containing Response Object.Does not reject

#### Defined in

[packages/disci/src/InteractionHandler.ts:44](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/InteractionHandler.ts#L44)

___

### listenerCount

▸ **listenerCount**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Returns

`number`

#### Inherited from

TypedEmitter.listenerCount

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:21

___

### listeners

▸ **listeners**<`U`\>(`type`): [`IClientEvents`](../interfaces/IClientEvents.md)[`U`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

[`IClientEvents`](../interfaces/IClientEvents.md)[`U`][]

#### Inherited from

TypedEmitter.listeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:22

___

### off

▸ **off**<`U`\>(`event`, `listener`): [`InteractionHandler`](InteractionHandler.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`IClientEvents`](../interfaces/IClientEvents.md)[`U`] |

#### Returns

[`InteractionHandler`](InteractionHandler.md)

#### Inherited from

TypedEmitter.off

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:18

___

### on

▸ **on**<`U`\>(`event`, `listener`): [`InteractionHandler`](InteractionHandler.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`IClientEvents`](../interfaces/IClientEvents.md)[`U`] |

#### Returns

[`InteractionHandler`](InteractionHandler.md)

#### Inherited from

TypedEmitter.on

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:17

___

### once

▸ **once**<`U`\>(`event`, `listener`): [`InteractionHandler`](InteractionHandler.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`IClientEvents`](../interfaces/IClientEvents.md)[`U`] |

#### Returns

[`InteractionHandler`](InteractionHandler.md)

#### Inherited from

TypedEmitter.once

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:16

___

### prependListener

▸ **prependListener**<`U`\>(`event`, `listener`): [`InteractionHandler`](InteractionHandler.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`IClientEvents`](../interfaces/IClientEvents.md)[`U`] |

#### Returns

[`InteractionHandler`](InteractionHandler.md)

#### Inherited from

TypedEmitter.prependListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:12

___

### prependOnceListener

▸ **prependOnceListener**<`U`\>(`event`, `listener`): [`InteractionHandler`](InteractionHandler.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`IClientEvents`](../interfaces/IClientEvents.md)[`U`] |

#### Returns

[`InteractionHandler`](InteractionHandler.md)

#### Inherited from

TypedEmitter.prependOnceListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:13

___

### processRequest

▸ **processRequest**(`req`): `Promise`<[`IResponse`](../interfaces/IResponse.md)\>

Process a request and return a response according to the request
this does not verify if request is valid or not

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](../interfaces/IRequest.md) |

#### Returns

`Promise`<[`IResponse`](../interfaces/IResponse.md)\>

#### Defined in

[packages/disci/src/InteractionHandler.ts:66](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/InteractionHandler.ts#L66)

___

### rawListeners

▸ **rawListeners**<`U`\>(`type`): [`IClientEvents`](../interfaces/IClientEvents.md)[`U`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

[`IClientEvents`](../interfaces/IClientEvents.md)[`U`][]

#### Inherited from

TypedEmitter.rawListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:23

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`InteractionHandler`](InteractionHandler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Returns

[`InteractionHandler`](InteractionHandler.md)

#### Inherited from

TypedEmitter.removeAllListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:15

___

### removeListener

▸ **removeListener**<`U`\>(`event`, `listener`): [`InteractionHandler`](InteractionHandler.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends keyof [`IClientEvents`](../interfaces/IClientEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `U` |
| `listener` | [`IClientEvents`](../interfaces/IClientEvents.md)[`U`] |

#### Returns

[`InteractionHandler`](InteractionHandler.md)

#### Inherited from

TypedEmitter.removeListener

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:14

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`InteractionHandler`](InteractionHandler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`InteractionHandler`](InteractionHandler.md)

#### Inherited from

TypedEmitter.setMaxListeners

#### Defined in

node_modules/tiny-typed-emitter/lib/index.d.ts:25

___

### verifyRequest

▸ **verifyRequest**(`req`): `Promise`<`boolean`\>

Used to validate if a request originated from discord
https://discord.com/developers/docs/interactions/receiving-and-responding#security-and-authorization

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IRequest`](../interfaces/IRequest.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/disci/src/InteractionHandler.ts:174](https://github.com/typicalninja493/disci/blob/a000123/packages/disci/src/InteractionHandler.ts#L174)
