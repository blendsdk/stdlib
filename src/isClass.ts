import { isFunction } from "./isFunction";
import { isObject } from "./isObject";

/**
 * Tests whether the give value is class
 *
 * @export
 * @param {*} clazz
 * @returns {boolean}
 */
export function isClass(clazz: any): boolean {
    return (
        isFunction(clazz) &&
        isObject((clazz as any).prototype) &&
        isFunction((clazz.prototype as any).constructor)
    );
}
