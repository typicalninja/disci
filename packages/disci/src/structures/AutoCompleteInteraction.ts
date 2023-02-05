import {
  APIApplicationCommandOptionChoice,
  InteractionResponseType,
} from "discord-api-types/v10";
import { DisciTypeError } from "../utils/helpers";
import type { IBase } from "./Base";
import { BaseInteraction } from "./BaseInteraction";

// TODO
export class AutoCompleteInteraction extends BaseInteraction implements IBase {
  /**
   * Sends the autoComplete choices.Set to empty array for "No choices"
   */
  sendChoices(choices: APIApplicationCommandOptionChoice[]) {
    if (!Array.isArray(choices))
      throw new DisciTypeError(`Choices must be a array`);
    this._respond({
      type: InteractionResponseType.ApplicationCommandAutocompleteResult,
      data: {
        choices,
      },
    });
    return this;
  }
  /**
   * Alias to doing sendChoices with empty ([]) choices
   */
  noResults() {
    return this.sendChoices([]);
  }
}
