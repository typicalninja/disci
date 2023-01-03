import { DisciTypeError } from "./utils/helpers";

/**
 * A class for manipulating a bitfield of permissions.
 */
export class Permissions {
    bitfield!: bigint
    /**
     * Create a new Permissions Instance
     * @param basePermissions - Permissions to institate the class with
     */
    constructor(basePermissions: bigint | bigint[]) {
        if(Array.isArray(basePermissions)) {
            this.bitfield = BigInt(0)
            for(const permission of basePermissions) {
                this.set(permission)
            }
        }
        else if(basePermissions) {
            this.bitfield = basePermissions;
        }
    }
    set(flag: bigint): Permissions {
        if(!this.bitfield) return this;
        this.bitfield |= flag;
        return this;
    }
    unset(flag: bigint): Permissions {
        if(!this.bitfield) return this;
        this.bitfield &= ~flag;
        return this;
    }

    /**
     * Checks if one or more flags are set in the bitfield.
     * @param flag - A single Permissions Bitfield or a Array of Bitfields
     * @returns `true` if ANY of the flag/s are set, `false` otherwise.
     */
    has(flag: bigint | bigint[]): boolean {
        if(!this.bitfield) return false;
        if(Array.isArray(flag)) {
            for(const singleFlag of flag) {
                if(this.has(singleFlag)) return true;
            }
            return false;
        }
        // expect a number
        else {
            return (this.bitfield & flag) === flag;
        }
    }

    /**
     * Checks if all of the specified flags are set in the bitfield.
     * @param flag - Array of Permissions Bitfields to check
     * @returns `true` if ANY of the flag/s are set, `false` otherwise.
     */
    hasAll(flags: bigint[]): boolean {
        if(!this.bitfield) return false;
        if(!Array.isArray(flags)) throw new DisciTypeError(`Expected Flags to be a Array of Bitfields.received ${typeof flags}`, { methodName: 'hasAll'});
        for(const flag of flags) {
            if(!this.has(flag)) return false;
        }
        return true;
    }
}
