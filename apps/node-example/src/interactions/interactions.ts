/** A command map is important since cf workers will bundle the code for deployment */

import type { SlashCommand } from '../types/interactions.js'
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const slashCommandDest = './SlashCommands';

export const SlashCommands = new Map<string, SlashCommand>();


await loadSlashCommands();


/**
 * Loader for SlashCommands
 */
async function loadSlashCommands() {
    const pathToCommands = path.join(__dirname, slashCommandDest);
    const commandsFiles = (await fs.readdir(pathToCommands)).filter((file) => file.endsWith('.ts'));
    console.log(`[/] Loading ${commandsFiles.length} SlashCommands (/)`);
    
    for(const commandFile of commandsFiles) {
        const filePath = path.join(slashCommandDest, commandFile.replace('.ts', '.js'));
        const command = (await import("./" + filePath)).default as SlashCommand
        if('name' in command && 'run' in command) {
            console.log(`[/] Loading ${commandFile} @ ${filePath}`);
            SlashCommands.set(command.name, command);
        }
        else console.log(`[/] Failed to load ${commandFile} @ ${filePath} due to missing properties`)
    }
}