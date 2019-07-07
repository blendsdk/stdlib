import { isArray } from "./isArray";
import { isNullOrUndef } from "./isNullOrUndef";

/**
 * Wraps the given value in an array if it is not an array itself
 *
 * @export
 * @template T
 * @param {*} obj
 * @returns {Array<T>}
 */
export function wrapInArray<T>(obj: any): T[] {
    return isArray(obj) ? obj : isNullOrUndef(obj) ? [] : [obj];
}