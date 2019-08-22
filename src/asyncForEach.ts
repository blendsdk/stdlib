/**
 * Provides an async for-each for a given array.
 *
 * @export
 * @template T
 * @param {T[]} array
 * @param {(item: T, index: number, array: T[]) => void} asyncCallback
 */
export async function asyncForEach<T extends any>(array: T[], asyncCallback: (item: T, index: number, array: T[]) => void) {
    for (let index = 0; index < array.length; index++) {
        await asyncCallback(array[index], index, array);
    }
}
