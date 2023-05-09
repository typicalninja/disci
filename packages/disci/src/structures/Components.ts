import { isObject } from "../utils/helpers"

export interface ProbableComponent<T> {
	toJSON: () => T
}

export function ResolveComponents<T>(components: unknown): T {
	if (isObject(components)) {
		const c: T[] | ProbableComponent<T> = components as ProbableComponent<T>
		if (typeof c.toJSON === "function") {
			return [c.toJSON()] as T
		}

		return [components] as T
	}
	return components as T
}
