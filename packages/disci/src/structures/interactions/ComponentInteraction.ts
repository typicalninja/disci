import type { APIMessageComponentInteraction } from "discord-api-types/v10";
import { BaseRepliableInteraction } from "./BaseInteraction.js";

export class BaseComponentInteraction extends BaseRepliableInteraction<APIMessageComponentInteraction> {}
