import {
  APIApplicationCommandOptionChoice,
  InteractionResponseType,
} from "discord-api-types/v10";
import { TypeErrorsMessages, DisciTypeError } from "../utils/errors";
import type { IBase } from "./Base";
import { BaseInteraction } from "./BaseInteraction";

// TODO
export class AutoCompleteInteraction extends BaseInteraction implements IBase {

  /**
   * Sends the autoComplete choices.Set to empty array for "No choices"
   */
  sendChoices(choices: (APIApplicationCommandOptionChoice | string)[]) {
    if (!Array.isArray(choices))
      throw new DisciTypeError(TypeErrorsMessages.ExpectedParameter(`choices`, 'array', typeof choices));
    const _choices = this.getChoices(choices);
    this._respond({
      type: InteractionResponseType.ApplicationCommandAutocompleteResult,
      data: {
       choices: _choices,
      },
    });
    return this;
  }
  /**
   * Shows a "No choice" (invalid query) screen for user.Alias to doing sendChoices with empty ([]) choices.
   */
  invalid() {
    return this.sendChoices([]);
  }
  private getChoices(choices: (APIApplicationCommandOptionChoice | string)[]): APIApplicationCommandOptionChoice[] {
    // string or obj can be present
    return choices.map((choice) => typeof choice !== 'string' ? choice : { name: choice, value: choice })
  }
}
