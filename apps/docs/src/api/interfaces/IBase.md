# Interface: IBase

Base Interface for other structures to implement on.
All toplevel structures MUST implement this structure

## Implemented by

- [`ApplicationCommand`](../classes/ApplicationCommand.md)
- [`AutoCompleteInteraction`](../classes/AutoCompleteInteraction.md)
- [`BaseInteraction`](../classes/BaseInteraction.md)

## Table of contents

### Properties

- [handler](IBase.md#handler)

## Properties

### handler

• `Readonly` **handler**: [`InteractionHandler`](../classes/InteractionHandler.md)

The InteractionHandler that initialised this structure

#### Defined in

[packages/disci/src/structures/Base.ts:11](https://github.com/typicalninja493/disci/blob/96876f6/packages/disci/src/structures/Base.ts#L11)
