/** A command map is important since cf workers will bundle the code for deployment */

import type { SlashCommand } from '../types/interactions.js'
import PingCommand from './SlashCommands/ping.js'

export const SlashCommands: Record<string, SlashCommand> = {
    'ping': PingCommand
}