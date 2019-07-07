let _ID: number = 1000;

/**
 * Generates a new identifier.
 *
 * @export
 * @returns {number}
 */
export function ID(): number {
    return (a => {
        const r = a;
        return r;
    })(_ID++);
}