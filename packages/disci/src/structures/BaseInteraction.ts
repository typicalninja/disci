import type { InteractionHandler } from "../InteractionHandler";
import type { IBase } from "./Base";
import { PermissionsBitField } from "./builders/Bitfield";

import type { Snowflake } from "discord-api-types/globals";
import {
  APIApplicationCommandInteractionDataOption,
  APIInteraction,
  APIInteractionResponse,
  ApplicationCommandOptionType,
  InteractionType,
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
   *
   * @param handler
   * @param RawInteractionData
   */
  constructor(
    public handler: InteractionHandler,
    readonly RawInteractionData: APIInteraction
  ) {
    this.id = RawInteractionData.id;
    this.applicationId = RawInteractionData.application_id;
    this.token = RawInteractionData.token;
    this.type = RawInteractionData.type;
    this.version = RawInteractionData.version;

    if (RawInteractionData.guild_id && RawInteractionData.member) {
      // from a guild
      this.member = new Member(RawInteractionData.member);

      Reflect.defineProperty(this, "user", {
        get() {
          return this.member.user;
        },
      });
    } else if (RawInteractionData.user) {
      // not from a guild
      this.user = new User(RawInteractionData.user);
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
    this._options = options ?? [];
    // from discord.js [thanks :) ]
    if(this._options[0]?.type === ApplicationCommandOptionType.Subcommand) {
      this.subCommand = this._options[0].name;
      this._options = this._options[0].options ?? [];
    }
    
    if(this._options[0]?.type === ApplicationCommandOptionType.SubcommandGroup) {
      this.group = this._options[0].name;
      this._options = this._options[0].options ?? [];
    }
  }
  /**
   * Get a option by name
   * @param key Key to get
   * @param required If required and no options found, will throw a error
   * @returns The option if found, if required is turned of null will be returned if not found
   */
  get(key: string, ExpectedType: ApplicationCommandOptionType, required: true): APIApplicationCommandInteractionDataOption;
  get(key: string, ExpectedType: ApplicationCommandOptionType | null, required?: boolean): APIApplicationCommandInteractionDataOption | null;
  get(key: string, ExpectedType: ApplicationCommandOptionType | null = null, required = false) {
    const opt = this._options.find((o) => o.name === key);

    if(required) {
      // if required
      if(!opt)  throw new DisciTypeError(`Missing interaction option: ${key}`)
      if(ExpectedType && ExpectedType !== opt.type) throw new DisciTypeError(`Missing interaction option: ${key}`)
      
    }

    return opt ?? null
  }
}