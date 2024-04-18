import fs from 'node:fs/promises'
import pc from 'picocolors';

export async function directoryExists(dir: string) {
    try {
        await fs.stat(dir);
        return true;
    }
    catch {
        return false
    }
}

export async function directoryEmpty(dir: string) {
    try {
        const files = await fs.readdir(dir);
        if(files.length > 0) return false;
        else return true;
    }
    catch {
        // we consider directory not existing as empty
        // this could also be error for the dir path being a file
        // but we ignore that
        return true;
    }
}

export function ignoreUndefined<T extends Record<string, unknown>>(array: (T | false)[]): T[] {
    return array.filter(a => a) as T[]
}

export const logger = {
    info: (...messages: unknown[]) => console.error(`[${pc.cyan("INFO")}]`, ...messages),
    warn: (...messages: unknown[]) => console.error(`[${pc.yellow("WARN")}]`, ...messages),
    error: (...messages: unknown[]) => console.error(`[${pc.red("ERROR")}]`, ...messages),
    details: (...messages: unknown[]) => console.error(`[${pc.dim("↳")} Details]`, ...messages)
}