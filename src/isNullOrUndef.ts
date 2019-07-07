/**
 * Tests whether the given value is null or undefined.
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isNullOrUndef(value: any): boolean {
    return value === null || value === undefined || value === "undefined";
}