---
id: "CreateMessageParams"
title: "Interface: CreateMessageParams"
sidebar_label: "CreateMessageParams"
sidebar_position: 0
custom_edit_url: null
---

**`Link`**

https://discord.com/developers/docs/resources/channel#create-message-jsonform-params
Params used for sending of Messages

## Properties

### allowedMentions

• `Optional` **allowedMentions**: [`AllowedMentions`](AllowedMentions.md)

Allowed mentions for the message

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:55](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/primitives/Message.ts#L55)

___

### components

• `Optional` **components**: `APIActionRowComponent`<`APIMessageActionRowComponent`\>[]

The components belonging to this message
Typed as unknown to support builders from packages like @discordjs/builders

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:64](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/primitives/Message.ts#L64)

___

### content

• `Optional` **content**: `string`

Message contents (up to 2000 characters)

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:47](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/primitives/Message.ts#L47)

___

### embeds

• `Optional` **embeds**: `APIEmbed`[]

Array of Embeds (max 10)

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:51](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/primitives/Message.ts#L51)

___

### flags

• `Optional` **flags**: `MessageFlags`

Message flags to used

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:68](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/primitives/Message.ts#L68)

___

### messageReference

• `Optional` **messageReference**: [`MessageReference`](MessageReference.md)

Include to make your message a reply

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:59](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/primitives/Message.ts#L59)
