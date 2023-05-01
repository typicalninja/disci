# Interface: CreateMessageParams

**`Link`**

https://discord.com/developers/docs/resources/channel#create-message-jsonform-params
Params used for sending of Messages

## Table of contents

### Properties

- [allowedMentions](CreateMessageParams.md#allowedmentions)
- [components](CreateMessageParams.md#components)
- [content](CreateMessageParams.md#content)
- [embeds](CreateMessageParams.md#embeds)
- [messageReference](CreateMessageParams.md#messagereference)

## Properties

### allowedMentions

• `Optional` **allowedMentions**: [`AllowedMentions`](AllowedMentions.md)

Allowed mentions for the message

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:55](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L55)

___

### components

• `Optional` **components**: `unknown`

The components belonging to this message
Typed as unknown to support builders from packages like @discordjs/builders

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:64](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L64)

___

### content

• `Optional` **content**: `string`

Message contents (up to 2000 characters)

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:47](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L47)

___

### embeds

• `Optional` **embeds**: ([`Embed`](../classes/Embed.md) \| `APIEmbed`)[]

Array of Embeds (max 10)

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:51](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L51)

___

### messageReference

• `Optional` **messageReference**: [`MessageReference`](MessageReference.md)

Include to make your message a reply

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:59](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L59)
