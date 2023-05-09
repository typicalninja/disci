import type { InteractionHandler } from "../InteractionHandler"

/**
 * Base Interface for other structures to implement on.
 * All toplevel structures MUST implement this structure
 */
export interface IBase {
	/**
	 * The InteractionHandler that initialised this structure
	 */
	readonly handler: InteractionHandler
}
