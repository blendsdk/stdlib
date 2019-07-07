/**
 * Tests whether the given value is a Date object.
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isDate(value: any): boolean {
    return Object.prototype.toString.apply(value) === "[object Date]";
}