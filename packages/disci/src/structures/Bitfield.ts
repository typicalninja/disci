import { DisciTypeError } from "../utils/helpers";

export type BitFieldResolvable = bigint | bigint[]

export class BitField {
    static readonly Flags = {}
    static None = 0n;
    bitfield: bigint
    /**
     * Create a new Bitfield Instance
     * @param baseBitField - Permissions to institate the class with
     */
    constructor(basePermissions: BitFieldResolvable) {
        this.bitfield = BitField.resolve(basePermissions)
    }
    /**
     * Adds bits to the bitfield
     * @param bits New bits to add
     * @returns 
     */
    set(bits: BitFieldResolvable): BitField {
        const resolvedBits = BitField.resolve(bits);
        this.bitfield |= resolvedBits;
        return this;
    }
    /**
     * Removes bits from the bitfield
     * @param bits bits to remove
     * @returns 
     */
    unset(bits: BitFieldResolvable): BitField {
        const resolvedBits = BitField.resolve(bits);
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
        switch(typeof bit) {
            case 'bigint': 
                return bit
            case 'number': 
                return BigInt(bit)
            case 'string':
                const resolved = BitField.Flags[bit]
                if(!resolved) throw new DisciTypeError(`Cannot Resolve permission Bit: ${bit} [StringFlag Not found]`)
                return resolved;
            default:
                // Someone can pass something not handled by any of the above cases, maybe its a array of bits
                if(Array.isArray(bit)) {
                    return BitField.resolve(
                        bit
                        .map((eBit) => typeof eBit === 'string' ? BitField.Flags[eBit] : eBit)
                        .reduce((acc, cur) => acc | cur, BitField.None)
                    )
                }
                else throw new DisciTypeError(`Cannot Resolve permission Bit: ${bit} [Not Expected type]`)
        }
    }
}
