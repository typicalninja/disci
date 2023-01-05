import { PermissionFlagsBits } from "discord-api-types/v10";
import { DisciTypeError } from "../utils/helpers";

export type BitFieldResolvable = bigint | bigint[]
export type BitFieldFlags = { [key:string]: bigint }
export abstract class BitField {
    static Flags: BitFieldFlags = {}
    static None = 0n;
    bitfield: bigint
    /**
     * Create a new Bitfield Instance
     * @param baseBits - Base bits to institate the class with
     */
    constructor(baseBits: BitFieldResolvable = BitField.None) {
        this.bitfield = BitField.resolve(baseBits)
    }

    /**
     * Adds bits to the bitfield
     * @param bits New bits to add
     * @returns 
     */
    add(bits: BitFieldResolvable[]): BitField {
        let resolvedBits = 0n
        for(const bit of bits) {
            resolvedBits |= BitField.resolve(bit)
        }
        this.bitfield |= resolvedBits;
        return this;
    }

    /**
     * Removes bits from the bitfield
     * @param flags
     * @param bits bits to remove
     * @returns 
     */
    remove(bits: BitFieldResolvable[], Flags: BitFieldFlags): BitField {
        let resolvedBits = 0n
        for(const bit of bits) {
            resolvedBits |= BitField.resolve(bit, Flags)
        }
        this.bitfield &= ~resolvedBits;
        return this;
    }

    /**
     * checks if all bits are present in the bitfield
     * @param bits bits to check
     * @returns 
     */
    has(bits: BitFieldResolvable, Flags: BitFieldFlags): boolean {
        const resolvedBits = BitField.resolve(bits, Flags);
        return (this.bitfield & resolvedBits) === resolvedBits;
    }

    equals(bit: BitFieldResolvable, Flags: BitFieldFlags): boolean {
        return !!(this.bitfield & BitField.resolve(bit, Flags));
    }

    static resolve(bit: BitFieldResolvable): bigint {
        switch(typeof bit) {
            case 'bigint': 
                return bit
            case 'number': 
                return BigInt(bit)
            default:
                // Someone can pass something not handled by any of the above cases, maybe its a array of bits
                if(Array.isArray(bit)) {
                    return BitField.resolve(
                        bit
                        .map((eBit) => (eBit || BitField.None))
                        .reduce((acc, cur) => acc | cur, BitField.None)
                    )
                }
                else throw new DisciTypeError(`Cannot Resolve Bitfield Bit: ${bit} [Not Expected type]`)
        }
    }
}

// Permission Bitfield
export type PermissionFlagString = keyof typeof PermissionFlagsBits
export type PermissionResolvable = BitFieldResolvable | PermissionFlagString | PermissionFlagString[]
export class PermissionsBitField extends BitField {
    static override Flags = PermissionFlagsBits
    constructor(basePermissions: PermissionResolvable = BitField.None) {
        super(basePermissions)
    }
    static override resolve(bit: PermissionResolvable) {
        return BitField.resolve(bit, this.Flags);
    }
    override has(bits: PermissionResolvable) {
        return super.has(bits, PermissionsBitField.Flags);
    }
    override equals(bit: PermissionResolvable): boolean {
        return super.equals(bit, PermissionsBitField.Flags);
    }
    override add(bits: PermissionResolvable[]) {
        super.add(bits, PermissionsBitField.Flags);
        return this;
    }
    override remove(bits: PermissinResolvable[]) {
        super.remove(bits, PermissionsBitField.Flags);
        return this;
    }
}
