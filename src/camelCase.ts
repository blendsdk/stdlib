import { ucFirst } from "./ucFirst";

/**
 * Converts a dashed or underscored string to camelcase
 *
 * @export
 * @param {string} value
 * @returns {string}
 */
export function camelCase(value: string): string {
    return value
        .replace(/\_|\-/gim, " ")
        .split(" ")
        .map(itm => {
            return ucFirst(itm);
        })
        .join("");
}
