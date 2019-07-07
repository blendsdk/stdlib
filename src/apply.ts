import { isNullOrUndef } from "./isNullOrUndef";

import { isArray, isObject } from "util";

import { wrapInArray } from "./wrapInArray";

/**
 * Copies keys and values from one object to another.
 * This function can optionally merge arrays and overwrite objects
 * in the target parameters from the source parameter.
 *
 * @export
 * @param {*} target
 * @param {*} source
 * @param {{ overwrite?: boolean, mergeArrays?: boolean }} [options]
 * @returns {*}
 */
export function apply<T>(target: any, source: any, options?: { overwrite?: boolean; mergeArrays?: boolean }): any {
    let key: any;
    const targetKeys = Object.keys(target || {}),
        targetHasKey = (k: string): boolean => {
            return targetKeys.indexOf(k) !== -1;
        };
    options = options || {
        mergeArrays: false,
        overwrite: false
    };

    if (!isNullOrUndef(target) && !isNullOrUndef(source)) {
        if (isArray(target) && !isArray(source)) {
            target.push(source);
        } else {
            for (key in source) {
                if (key && source.hasOwnProperty(key)) {
                    if (targetHasKey(key) && isObject(target[key])) {
                        if (options.overwrite === true) {
                            target[key] = source[key];
                        } else {
                            apply(target[key], source[key]);
                        }
                    } else if (targetHasKey(key) && isArray(target[key]) && options.mergeArrays === true) {
                        target[key] = target[key].concat(wrapInArray(source[key]));
                    } else if (targetHasKey(key) && options.overwrite === true) {
                        target[key] = source[key];
                    } else if (isNullOrUndef(target[key])) {
                        target[key] = source[key];
                    }
                }
            }
        }
    }
    return target as T;
}
