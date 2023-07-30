---
id: "IBase"
title: "Interface: IBase"
sidebar_label: "IBase"
sidebar_position: 0
custom_edit_url: null
---

Base Interface for other structures to implement on.
All toplevel structures MUST implement this structure

## Implemented by

- [`ApplicationCommand`](../classes/ApplicationCommand.md)
- [`AutoCompleteInteraction`](../classes/AutoCompleteInteraction.md)
- [`BaseInteraction`](../classes/BaseInteraction.md)
- [`ComponentInteraction`](../classes/ComponentInteraction.md)

## Properties

### handler

• `Readonly` **handler**: [`InteractionHandler`](../classes/InteractionHandler.md)

The InteractionHandler that initialised this structure

#### Defined in

[packages/disci/src/structures/Base.ts:11](https://github.com/typicalninja493/disci/blob/5ebdd02/packages/disci/src/structures/Base.ts#L11)
