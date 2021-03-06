/**
 * Returns a random number between min and max.
 *
 * @export
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function random(min: number, max: number): number {
    return Math.floor(Math.random() * max + min);
}
