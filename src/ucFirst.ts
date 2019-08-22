/**
 * Converts the first character of a string to uppercase
 *
 * @export
 * @param {string} value
 * @returns {string}
 */
export function ucFirst(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
