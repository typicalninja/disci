import type { InteractionHandler } from "../InteractionHandler";
import type { IBase } from "./Base";
import { PermissionsBitField } from "./builders/Bitfield";

import type { Snowflake } from "discord-api-types/globals";
import {
  APIApplicationCommandInteractionDataBasicOption,
  APIApplicationCommandInteractionDataOption,
  APIInteraction,
  APIInteractionResponse,
  ApplicationCommandOptionType,
  InteractionType,
  LocaleString,
} from "discord-api-types/v10";
import {
  convertSnowflakeToTimeStamp,
  DisciError,
  DisciTypeError,
} from "../utils/helpers";

import User from "./primitives/User";
import Member from "./primitives/Member";

// Types for different interaction context's
import type { ApplicationCommand } from './ApplicationCommand'
import type { AutoCompleteInteraction } from "./AutoCompleteInteraction";
import Webhook from "./primitives/Webhook";

type TcallbackFn = (data: APIInteractionResponse) => void;

/**
 * Base Interaction, used by all other Interaction related Structures
 */
export abstract class BaseInteraction implements IBase {
  /**
   * ID of the interaction
   */
  readonly id: Snowflake;
  /**
   * ID of the application this interaction is for
   */
  readonly applicationId: Snowflake;
  /**
   * Token of this interaction
   */
  readonly token: string;
  /**
   * Type of this interaction
   */
  type: InteractionType;
  /**
   * Guild that the interaction was sent from
   */
  guildId?: string;
  /**
   * Channel that the interaction was sent from
   */
  channelId?: string;
  /**
   * Readonly Property, as per the Discord docs always 1
   * https://discord.com/developers/docs/interactions/receiving-and-responding
   */
  readonly version: 1;
  appPermissions?: PermissionsBitField;
  /**
   * If this interaction has Already been responded to
   */
  responded: boolean;
  /**
   * If this interaction timed out (3s)
   */
  timeout: boolean;
  /**
   * The user who invoked this interaction
   */
  user?: User;
  /**
   * Guild member who invoked this interaction
   */
  member?: Member;
  private _callback!: TcallbackFn;
  /**
   * Handler than initated this class
   */
  handler!: InteractionHandler;
  guildLocale: LocaleString | null;
  /**
   *
   * @param handler
   * @param RawInteractionData
   */
  constructor(
    handler: InteractionHandler,
    readonly RawInteractionData: APIInteraction
  ) {
    Object.defineProperty(this, 'handler', { value: handler });
    this.id = RawInteractionData.id;
    this.applicationId = RawInteractionData.application_id;
    this.token = RawInteractionData.token;
    this.type = RawInteractionData.type;
    this.version = RawInteractionData.version;

    this.guildLocale = RawInteractionData.guild_locale ?? null;

    if (RawInteractionData.guild_id && RawInteractionData.member) {
      // from a guild
      this.member = new Member(this.handler, RawInteractionData.member);

      Reflect.defineProperty(this, "user", {
        get: () => {
          return this.member?.user;
        },
      });
    } else if (RawInteractionData.user) {
      // not from a guild
      this.user = new User(this.handler, RawInteractionData.user);
    }

    if (RawInteractionData.channel_id)
      this.channelId = RawInteractionData.channel_id;

    const permissions = RawInteractionData.app_permissions;
    if (permissions) {
      this.appPermissions = new PermissionsBitField(BigInt(permissions));
    }

    // properties to keep track of this Interaction
    this.responded = false;
    this.timeout = false;
  }
  /**
   * Internal function. define the function used to respond the interaction
   * @param fn
   * @private
   */
  useCallback(fn: TcallbackFn) {
    Reflect.defineProperty(this, "_callback", {
      value: fn,
      enumerable: false,
    });
    return this;
  }
  /**
   * Timestamp of this interaction
   */
  get createdTimestamp() {
    return convertSnowflakeToTimeStamp(this.id);
  }
  /**
   * Created time as a date
   */
  get createdAt(): Date {
    return new Date(this.createdTimestamp);
  }
  /**
   * Type guard to verify if this interaction is ApplicationCommand
   */
  isCommand(): this is ApplicationCommand {
    return this.type === InteractionType.ApplicationCommand;
  }
  /**
   * Type guard to verify if this interaction is an autocomplete Request
   */
  isAutoComplete(): this is AutoCompleteInteraction {
    return this.type === InteractionType.ApplicationCommandAutocomplete;
  }
  /**
   * Respond to this interaction
   * @returns
   * @private
   */
  _respond(
    response: APIInteractionResponse,
  ) {
    if (this.timeout) throw new DisciError(`This Interaction has timed out`);
    if (this.responded) throw new DisciError(`This interaction has already been responded to.`);
    this._callback(response);
    this.responded = true;
    return this;
  }

  fetchReply() {
    return Webhook.prototype.fetchMessage.call({
      id: this.applicationId,
      token: this.token,
      handler: this.handler,
    }, '@original')
  }
}


// inspired from discord.js & biscuit
/**
 * Utility for working with interaction options
 */
export class InteractionOptions {
  private _options: APIApplicationCommandInteractionDataOption[];
  private subCommand?: string;
  private group?: string;
  constructor(options: APIApplicationCommandInteractionDataOption[]) {
    this._options = options ?? []
    // from discord.js [thanks :) ]
    if(options[0]?.type === ApplicationCommandOptionType.Subcommand) {
      this.subCommand = options[0].name;
      this._options = options[0].options ?? [];
    } 
    if(options[0]?.type === ApplicationCommandOptionType.SubcommandGroup) {
      this.group = options[0].name;
      this._options = options[0].options ?? [];
    }
  }
  /**
   * Gets the selected subcommand.
   * @param required If required and Subcommand is found, will throw a error
   * @returns The name of the selected subcommand, or null if not set and not required.
   */
  getSubCommand(required: true): string;
  getSubCommand(required = false): string | null {
    if(required && !this.subCommand) throw new DisciTypeError(`SubCommandOption Not found`, { methodName: 'getSubCommand' })
    return this.subCommand ?? null;
  }
  /**
   * Gets the selected subcommand group.
   * @param required If required and Subcommand group is found, will throw a error
   * @returns The name of the selected subcommand group, or null if not set and not required.
   */
  getSubCommandGroup(required: true): string;
  getSubCommandGroup(required = false): string | null {
    if(required && !this.group) throw new DisciTypeError(`No SubCommandGroup found`);
    return this.group ?? null
  }
  /**
   * Get a option by name
   * @param key Key to get
   * @param required If required and no options found, will throw a error
   * @returns The option if found, if required is turned of null will be returned if not found
   */
  get(name: string, required: true): APIApplicationCommandInteractionDataBasicOption;
  get(name: string, required?: boolean): APIApplicationCommandInteractionDataBasicOption | null;
  get(name: string, required = false) {
    const opt = this._options.find((o) => o.name === name) as APIApplicationCommandInteractionDataBasicOption;
    if(required && !opt) throw new DisciTypeError(`Missing interaction option: ${name}`)
    return opt ?? null
  }

  private _getType(name: string, expectedtTypes: ApplicationCommandOptionType[], properties: ['value'], required: boolean) {
    const option = this.get(name, required);

    if(!option) return null;
    if(!expectedtTypes.includes(option.type)) throw new DisciTypeError(`Expected Type of option to be [${expectedtTypes.join(" ")}] Received ${option.type}`);
    if(required &&  properties.every((prop) => option[prop] == null || typeof option[prop] == 'undefined')) throw new DisciTypeError(`Expected Value to be available`);

    return option;
  }

  // start methods

  /**
   * Retrive a String option
   * @param required If required and no String option by name was found, will throw a Error
   * @returns the value of the string option
   */
  getString(name: string, required: true): string;
  getString(name: string, required?: boolean): string | null;
  getString(name: string, required = false) {
    return this._getType(name, [ApplicationCommandOptionType.String], ['value'], required)?.value ?? null;
  }

  /**
   * Retrive a Boolean option
   * @param required If required and no Boolean option by name was found, will throw a Error
   * @returns the value of the Boolean option
   */
  getBoolean(name: string, required: true): boolean;
  getBoolean(name: string, required?: boolean): boolean | null;
  getBoolean(name: string, required = false) {
    return this._getType(name, [ApplicationCommandOptionType.Boolean], ['value'], required)?.value ?? null;
  }

   /**
   * Retrive a Number option
   * @param required If required and no Number option by name was found, will throw a Error
   * @returns the value of the Number option
   */
   getNumber(name: string, required: true): number;
   getNumber(name: string, required?: boolean): number | null;
   getNumber(name: string, required = false) {
     return this._getType(name, [ApplicationCommandOptionType.Number], ['value'], required)?.value ?? null;
   }

    /**
   * Retrive a Integer option
   * @param required If required and no Integer option by name was found, will throw a Error
   * @returns the value of the Integer option
   */
    getInteger(name: string, required: true): number;
    getInteger(name: string, required?: boolean): number | null;
    getInteger(name: string, required = false) {
      return this._getType(name, [ApplicationCommandOptionType.Integer], ['value'], required)?.value ?? null;
    }

    /**
   * Retrive a User option
   * @param required If required and no User option by name was found, will throw a Error
   * @returns the value of the User (userId) option
   */
    getUserId(name: string, required: true): string;
    getUserId(name: string, required?: boolean): string | null;
    getUserId(name: string, required = false) {
      return this._getType(name, [ApplicationCommandOptionType.User], ['value'], required)?.value ?? null;
    }

    /**
   * Retrive a Channel option
   * @param required If required and no Channel option by name was found, will throw a Error
   * @returns the value of the Channel (channelId) option
   */
    getChannelId(name: string, required: true): string;
    getChannelId(name: string, required?: boolean): string | null;
    getChannelId(name: string, required = false) {
      return this._getType(name, [ApplicationCommandOptionType.Channel], ['value'], required)?.value ?? null;
    }

     /**
   * Retrive a Role option
   * @param required If required and no Role option by name was found, will throw a Error
   * @returns the value of the Role (roleId) option
   */
     getRolelId(name: string, required: true): string;
     getRolelId(name: string, required?: boolean): string | null;
     getRolelId(name: string, required = false) {
       return this._getType(name, [ApplicationCommandOptionType.Role], ['value'], required)?.value ?? null;
     }

     /**
   * Retrive a mentionable option
   * @param required If required and no mentionable option by name was found, will throw a Error
   * @returns the value of the mentionable option
   */
     getMentionable(name: string, required: true): string;
     getMentionable(name: string, required?: boolean): string | null;
     getMentionable(name: string, required = false) {
       return this._getType(name, [ApplicationCommandOptionType.Mentionable], ['value'], required)?.value ?? null;
     }

     getFocused(full: true): APIApplicationCommandInteractionDataBasicOption;
     getFocused(full: false): APIApplicationCommandInteractionDataBasicOption['value'];
     getFocused(full: boolean) {
      const focusedOption = this._options.find((option: any) => option.focused) as APIApplicationCommandInteractionDataBasicOption;
      if (!focusedOption) throw new DisciTypeError(`No Focused option found`)
      return full ? focusedOption : focusedOption.value;
     }
}