/**
 * Tests whether the given value is a function.
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value: any): boolean {
    return typeof value === "function";
}