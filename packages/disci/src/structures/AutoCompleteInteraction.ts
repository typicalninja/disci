import { DisciTypeError } from "../utils/helpers";
import type { IBase } from "./Base";
import { BaseInteraction } from "./BaseInteraction";

// TODO
export class AutoCompleteInteraction extends BaseInteraction implements IBase {
    /**
     * Sends the autoComplete results.
     */
    sendResult(results: []) {
        if(!Array.isArray(results)) throw new DisciTypeError()
    }
    /**
     * Alias to doing sendResult with 0 results
     */
    noResults() {
        return this.sendResult([]);
    }
}