import {
  APIApplicationCommandInteraction,
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  APIMessageComponent,
  ApplicationCommandType,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";
import type { InteractionHandler } from "../InteractionHandler";
import {  DisciError, DisciTypeError  } from "../utils/errors";
import type { IBase } from "./Base";
import { BaseInteraction, InteractionOptions } from "./BaseInteraction";
import type Message from "./primitives/Message";
import type { CreateMessageParams } from "./primitives/Message";
import { Embed } from "./Embed";
import { ResolveComponents } from "./Components";

export abstract class ApplicationCommand
  extends BaseInteraction
  implements IBase
{
  override type = InteractionType.ApplicationCommand
  /**
   * Type of this command
   * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
   */
  commandType: ApplicationCommandType;
  /**
   * Name of this command
   */
  commandName: string;
  /**
   * Id Of **The Application command** (not interaction)
   */
  commandId: string;
  constructor(
    handler: InteractionHandler,
    rawData: APIApplicationCommandInteraction,
  ) {
    super(handler, rawData);
    const data = rawData.data;
    this.commandType = data.type;
    this.commandName = data.name;
    this.commandId = data.id;
  }
  /**
   * If this is a Message Context menu
   */
  isMessageCommand(): this is MessageCommandInteraction {
    return this.commandType === ApplicationCommandType.Message;
  }
  /**
   * If this is a User Context menu
   */
  isUserCommand(): this is UserCommandInteraction {
    return this.commandType === ApplicationCommandType.User;
  }
  /**
   * If this is a Slash Command
   */
  isSlashCommand(): this is ChatInputInteraction {
    return this.commandType === ApplicationCommandType.ChatInput;
  }

  /**
   * Alias to isSlashCommand
   */
  isChatInputInteraction(): this is ChatInputInteraction {
    return this.isSlashCommand()
  }

  /**
   * Respond to this interaction
   * @param opts 
   * @returns this interaction instance or the message instance after responding if fetchReply is true
   */
  respond(opts: CreateMessageParams & { fetchReply?: false }): this;
  respond(opts: CreateMessageParams & { fetchReply: true }): Promise<Message>
  respond(opts: (CreateMessageParams & { fetchReply?: boolean })): this | Promise<Message> {
    if(this.responded || this.timeout) throw new DisciError(`This interaction either timed out or already been responded to`)
    const APIResponse = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {}
    } as APIInteractionResponseChannelMessageWithSource


    if(opts) {
      if((!opts.content) && !Array.isArray(opts.embeds)) throw new DisciTypeError(`Content or Embeds is needed`)
      
      // if content is there but not a string, try converting it to one
      if(opts.content) {
        if(typeof opts.content !== 'string') opts.content = new String(opts.content).toString();
        Reflect.defineProperty(APIResponse.data, 'content', {
          value: opts.content,
          enumerable: true,
          configurable: true,
        })
      }

      if(opts.embeds && Array.isArray(opts.embeds)) {
        // convert embed builders to apiEmbeds
        opts.embeds = opts.embeds.map(embed => {
          if(embed instanceof Embed) {
            return embed.toJSON()
          }
          return embed;
        })

        Reflect.defineProperty(APIResponse.data, 'embeds', {
          value: opts.embeds,
          enumerable: true,
          configurable: true,
        })
      }

      if(opts.components) {
        const components = ResolveComponents<APIMessageComponent[]>(opts.components)
        Reflect.defineProperty(APIResponse.data, 'components', {
          value: components,
          enumerable: true
        })
      }
    }
    else throw new DisciTypeError(`CreateMessage Options are required`)
    
  
    this._respond(APIResponse);
    if(opts.fetchReply === true) return this.fetchReply();
    return this;
  }
  // custom methods

   /**
   * Send a defer type response, gives you extra time to reply.User sees a loading state
   */
   deferResponse(): this {
    if (this.timeout || this.responded)
      throw new DisciError(`This Interaction already timed out or has been replied to`);
    this._respond({
      type: InteractionResponseType.DeferredChannelMessageWithSource
    });
    return this;
   }
}

// dummy for now
export class ChatInputInteraction extends ApplicationCommand {
  options: InteractionOptions;
  override commandType = ApplicationCommandType.ChatInput
  constructor(
    handler: InteractionHandler,
    rawData: APIChatInputApplicationCommandInteraction,
  ) {
    super(handler, rawData)
    this.options = new InteractionOptions(rawData.data.options ?? [])
  }
}
export class MessageCommandInteraction extends ApplicationCommand {
  override commandType = ApplicationCommandType.Message
}
export class UserCommandInteraction extends ApplicationCommand {
  override commandType = ApplicationCommandType.User
}



export type ApplicationCommands = ChatInputInteraction | MessageCommandInteraction | UserCommandInteraction