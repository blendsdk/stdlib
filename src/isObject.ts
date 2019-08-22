import { isArray } from "./isArray";
import { isClass } from "./isClass";
import { isRegExp } from "./isRegExp";

/**
 * Tests whether the given value is an object.
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isObject(value: any): boolean {
    return (
        typeof value === "object" &&
        (typeof value !== "function" &&
            value !== null &&
            value !== undefined &&
            !isRegExp(value) &&
            !isClass(value) &&
            !isArray(value))
    );
}
