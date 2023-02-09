import { MessageFlags, PermissionFlagsBits, UserFlags } from "discord-api-types/v10";
import { DisciTypeError } from "../../utils/helpers";

export type BitFieldResolvable = bigint | bigint[] | number | number[];

/**
 * Utility structure to help with bitfield creation and manipulation
 */
export abstract class BitField {
  static Flags: any = {};
  static None = 0n;
  bitfield: bigint;
  /**
   * Create a new Bitfield Instance
   * @param baseBits - Base bits to institate the class with
   */
  constructor(baseBits: BitFieldResolvable = BitField.None) {
    this.bitfield = BitField.resolve(baseBits);
  }

  /**
   * Adds bits to the bitfield
   * @param bits New bits to add
   * @returns
   */
  add(bits: BitFieldResolvable[]): BitField {
    let resolvedBits = 0n;
    for (const bit of bits) {
      resolvedBits |= BitField.resolve(bit);
    }
    this.bitfield |= resolvedBits;
    return this;
  }

  /**
   * Removes bits from the bitfield
   * @param bits bits to remove
   * @returns
   */
  remove(bits: BitFieldResolvable[]): BitField {
    let resolvedBits = 0n;
    for (const bit of bits) {
      resolvedBits |= BitField.resolve(bit);
    }
    this.bitfield &= ~resolvedBits;
    return this;
  }

  /**
   * checks if all bits are present in the bitfield
   * @param bits bits to check
   * @returns
   */
  has(bits: BitFieldResolvable): boolean {
    const resolvedBits = BitField.resolve(bits);
    return (this.bitfield & resolvedBits) === resolvedBits;
  }

  equals(bit: BitFieldResolvable): boolean {
    return !!(this.bitfield & BitField.resolve(bit));
  }

  static resolve(bit: BitFieldResolvable): bigint {
    switch (typeof bit) {
      case "bigint":
        return bit;
      case "number":
        return BigInt(bit);
      default:
        // Someone can pass something not handled by any of the above cases, maybe its a array of bits
        if (Array.isArray(bit)) {
          return bit
            .map((b) => BitField.resolve(b))
            .reduce((prev, cur) => prev | cur, BitField.None);
        } else
          throw new DisciTypeError(
            `Cannot Resolve Bitfield Bit: ${bit} [Not Expected type]`
          );
    }
  }
}

export class PermissionsBitField extends BitField {
  static override Flags = PermissionFlagsBits;
  *[Symbol.iterator]() {
    yield* this.array;
  }
  get array() {
    return Object.keys(PermissionFlagsBits).filter((flag: unknown) =>
      this.has(
        PermissionsBitField.Flags[flag as keyof typeof PermissionFlagsBits]
      )
    );
  }
}

export class UserFlagsBitField extends BitField {
  static override Flags = UserFlags;
}


export class MessageFlagsBitField extends BitField {
  static override Flags = MessageFlags
}