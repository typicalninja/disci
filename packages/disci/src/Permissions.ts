import { DisciTypeError } from "./utils/helpers";
import { PermissionFlagsBits } from "discord-api-types/v10";

export type PermissionFlagString = keyof typeof PermissionFlagsBits
export type PermissionResolvable = bigint | bigint[] | PermissionFlagString | PermissionFlagString[]

/**
 * A class for manipulating a bitfield of permissions.
 */
export class Permissions {
    static readonly Flags = PermissionFlagsBits
    static None = 0n;
    bitfield: bigint
    /**
     * Create a new Permissions Instance
     * @param basePermissions - Permissions to institate the class with
     * @param adminBypass - If true **AND** This permission bitfield has administator bitfield will return true for all **has()**
     */
    constructor(basePermissions: PermissionResolvable, public adminBypass: boolean = true) {
        this.bitfield = Permissions.resolve(basePermissions)
    }
    /**
     * Adds bits to the bitfield
     * @param bits New bits to add
     * @returns 
     */
    set(bits: PermissionResolvable): Permissions {
        const resolvedBits = Permissions.resolve(bits);
        this.bitfield |= resolvedBits;
        return this;
    }
    /**
     * Removes bits from the bitfield
     * @param bits bits to remove
     * @returns 
     */
    unset(bits: PermissionResolvable): Permissions {
        const resolvedBits = Permissions.resolve(bits);
        this.bitfield &= ~resolvedBits;
        return this;
    }

    /**
     * checks if all bits are present in the bitfield
     * @param bits bits to check
     * @returns 
     */
    has(bits: PermissionResolvable): boolean {
        const resolvedBits = Permissions.resolve(bits);
        if(this.adminBypass && (this.bitfield & Permissions.Flags.Administrator)) return true;
        return (this.bitfield & resolvedBits) === resolvedBits;
    }

    equals(bit: PermissionResolvable): boolean {
        return !!(this.bitfield & Permissions.resolve(bit));
    }

    static resolve(bit: PermissionResolvable): bigint {
        switch(typeof bit) {
            case 'bigint': 
                return bit
            case 'number': 
                return BigInt(bit)
            case 'string':
                const resolved = Permissions.Flags[bit]
                if(!resolved) throw new DisciTypeError(`Cannot Resolve permission Bit: ${bit} [StringFlag Not found]`)
                return resolved;
            default:
                // Someone can pass something not handled by any of the above cases, maybe its a array of bits
                if(Array.isArray(bit)) {
                    return Permissions.resolve(
                        bit
                        .map((eBit) => typeof eBit === 'string' ? Permissions.Flags[eBit] : eBit)
                        .reduce((acc, cur) => acc | cur, Permissions.None)
                    )
                }
                else throw new DisciTypeError(`Cannot Resolve permission Bit: ${bit} [Not Expected type]`)
        }
    }
}
