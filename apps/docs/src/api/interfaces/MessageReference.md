# Interface: MessageReference

**`Link`**

https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure
channel_id is optional when creating a reply, but will always be present when receiving an event/response that includes this data model.

## Table of contents

### Properties

- [channelId](MessageReference.md#channelid)
- [failIfNotExists](MessageReference.md#failifnotexists)
- [guildId](MessageReference.md#guildid)
- [messageId](MessageReference.md#messageid)

## Properties

### channelId

• `Optional` **channelId**: `string`

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:34](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L34)

___

### failIfNotExists

• `Optional` **failIfNotExists**: `boolean`

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:36](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L36)

___

### guildId

• `Optional` **guildId**: `string`

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:35](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L35)

___

### messageId

• **messageId**: `string`

#### Defined in

[packages/disci/src/structures/primitives/Message.ts:33](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/primitives/Message.ts#L33)
