import { TFunction } from "./types";

/**
 * Runs the given callback after given milliseconds.
 * This function is a wrapper around setTimeout
 *
 * @export
 * @param {number} ms
 * @param {Function} callback
 * @param {*} [scope]
 */
export function delay(ms: number, callback: TFunction, scope?: any) {
    scope = scope || window;
    setTimeout(() => {
        callback.apply(scope, []);
    }, ms);
}
