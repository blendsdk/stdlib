/**
 * Tests whether the given value is a number.
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isNumeric(value: any): boolean {
    return Object.prototype.toString.apply(value) === "[object Number]";
}
