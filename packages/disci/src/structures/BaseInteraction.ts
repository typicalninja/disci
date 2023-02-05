import type { InteractionHandler } from "../InteractionHandler";
import type { IBase } from "./Base";
import { PermissionsBitField } from "./builders/Bitfield";

import type { Snowflake } from "discord-api-types/globals";
import {
    APICommandAutocompleteInteractionResponseCallbackData,
  APIInteraction,
  APIInteractionResponse,
  APIInteractionResponseCallbackData,
  APIModalInteractionResponseCallbackData,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";
import {
  convertSnowflakeToTimeStamp,
  DisciError,
  DisciInteractionError,
  DisciTypeError,
} from "../utils/helpers";
import type { ApplicationCommand } from "./ApplicationCommand";
import User from "./primitives/User";
import Member from "./primitives/Member";

type TcallbackFn = (data: APIInteractionResponse) => void;

type ResponseData =
  | APIInteractionResponseCallbackData
  | APIModalInteractionResponseCallbackData
  | APICommandAutocompleteInteractionResponseCallbackData;

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
