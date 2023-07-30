---
id: "InteractionHandler"
title: "Class: InteractionHandler"
sidebar_label: "InteractionHandler"
sidebar_position: 0
custom_edit_url: null
---

Main Handler class, handles incoming request and outputs a response

## Hierarchy

- `TypedEmitter`<[`ClientEvents`](../interfaces/ClientEvents.md), `this`\>

  ↳ **`InteractionHandler`**

## Constructors

### constructor

• **new InteractionHandler**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`HandlerOptions`](../interfaces/HandlerOptions.md)\> |

#### Overrides

(EventEmitter as unknown as new () &#x3D;\&gt; TypedEmitter&lt;ClientEvents\&gt;).constructor

#### Defined in

[packages/disci/src/InteractionHandler.ts:30](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/InteractionHandler.ts#L30)

## Properties

### api

• **api**: [`Rest`](Rest.md)

Handler Rest Manager

#### Defined in

[packages/disci/src/InteractionHandler.ts:29](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/InteractionHandler.ts#L29)

___

### options

• **options**: [`HandlerOptions`](../interfaces/HandlerOptions.md)

#### Defined in

[packages/disci/src/InteractionHandler.ts:25](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/InteractionHandler.ts#L25)

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

[packages/disci/src/InteractionHandler.ts:38](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/InteractionHandler.ts#L38)

___

### processRequest

▸ **processRequest**(`body`, `signal?`): `Promise`<`APIInteractionResponse`\>

Process a request and return a response according to the request.
This does not verify the validity of the request

**`Example`**

```ts
// get the request here

// verify it here
if(!(await isVerified(request))) return new Response("Invalid Headers, Unauthorized", { status: 401 })

	const timeOutAbort = new AbortController();
	const timeout = setTimeout(() => {
		timeOutAbort.abort("Time out");
	}, 3000);

try {
	const handled = await processRequest(body, timeOutAbort.signal)
	// if it resolved that means handler successfully resolved
	// remember to remove the timeout
	clearTimeout(timeout)
	// it safe to return the response as a json response
	return new Response(handled, { status: 200 })
}
catch {
	return new Response("Server Error", { status: 500 })
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` \| `Record`<`string`, `unknown`\> | body of the received request |
| `signal?` | `AbortSignal` | Abort controller signal allow you to control when the handler ends (timeouts etc) |

#### Returns

`Promise`<`APIInteractionResponse`\>

A json object containing data to be responded with

#### Defined in

[packages/disci/src/InteractionHandler.ts:83](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/InteractionHandler.ts#L83)
