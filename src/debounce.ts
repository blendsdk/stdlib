import { TFunction } from "./types";

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * `delay` number of milliseconds. If `immediate` is passed, trigger the function
 * on the leading edge, instead of the trailing.
 *
 * @copyright This function ir originally ported from the underscore.js library and it copyrighted in MIT
 * @export
 * @param {number} delay
 * @param {Function} callback
 * @param {*} scope
 * @param {boolean} immediate
 * @returns {Function}
 */
// tslint:disable-next-line:no-shadowed-variable
export function debounce(delay: number, callback: TFunction, scope?: any, immediate?: boolean): TFunction {
    let timeout: any;
    immediate = immediate || false;
    return function() {
        const me = this;
        scope = scope || me;
        const args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) {
                callback.apply(scope, args);
            }
        },
            callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, delay);
        if (callNow) {
            callback.apply(scope, args);
        }
    };
}
