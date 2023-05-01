# Interface: IHandlerOptions

## Table of contents

### Properties

- [debug](IHandlerOptions.md#debug)
- [rest](IHandlerOptions.md#rest)
- [verificationStratergy](IHandlerOptions.md#verificationstratergy)

## Properties

### debug

• `Optional` **debug**: (`msg`: `string`) => `void`

#### Type declaration

▸ (`msg`): `void`

A debug callback function that can be used for debugging

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

##### Returns

`void`

#### Defined in

[packages/disci/src/utils/constants.ts:28](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/constants.ts#L28)

___

### rest

• **rest**: [`RESTClientOptions`](RESTClientOptions.md)

Options for built in rest client

#### Defined in

[packages/disci/src/utils/constants.ts:38](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/constants.ts#L38)

___

### verificationStratergy

• **verificationStratergy**: ``null`` \| `string` \| [`verificationStratergy`](verificationStratergy.md)

Verification stratergy used for validating incoming requests,
do no specify for default and specify null for allow all requests
specify a string (your public key) for default stratergy will use that instead of process.env.PUBLIC_KEY

#### Defined in

[packages/disci/src/utils/constants.ts:34](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/utils/constants.ts#L34)
