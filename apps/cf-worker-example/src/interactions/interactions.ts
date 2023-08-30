/** A command map is important since cf workers will bundle the code for deployment */

import type { SlashCommand } from '../types/interactions'
import PingCommand from './SlashCommands/ping'

export const SlashCommands: Record<string, SlashCommand> = {
    'ping': PingCommand
}