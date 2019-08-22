/**
 * Converts a camelCase string to dashed case.
 * For example backgroundColor will be background-color
 *
 * @export
 * @param {string} value
 * @returns {string}
 */
export function dashedCase(value: string): string {
    return value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
