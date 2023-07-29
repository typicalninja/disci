import type { ChatInputInteraction, ComponentInteraction } from 'disci'
import pingCommand from './ApplicationCommands/commands/ping'

// maps the commands to special objects
// helps to bundle them if needed
export const InteractionCommandMap: Record<string, (interaction: ChatInputInteraction) => void> = {
    'ping': pingCommand.execute
}

// maps the Components to special objects
// helps to bundle them if needed
export const InteractionComponentMap: Record<string, (interaction: ComponentInteraction) => void> = {
   
}