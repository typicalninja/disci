import { BaseInteraction } from "./BaseInteraction";
import type { IBase } from './Base';
import { InteractionType } from 'discord-api-types/v10'

export abstract class BaseComponentInteraction extends BaseInteraction implements IBase {
    override type = InteractionType.MessageComponent
}