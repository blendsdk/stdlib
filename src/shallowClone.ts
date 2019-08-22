import { isArray } from "./isArray";

/**
 * Makes a shallow clone of an object by copying the
 * properties from one object to another.
 * ONLY USE THIS FUNCTION WITH OBJECTS HAVING NON-OBJECT AND
 * NON-ARRAY PROPERTIES
 *
 * @protected
 * @param {*} src
 * @returns {*}
 * @memberof ScrollableContainer
 */
export function shallowClone(src: any): any {
    const dst: any = {};
    for (const k in src) {
        if (isArray(src[k])) {
            dst[k] = [];
            src[k].forEach((i: any) => {
                dst[k].push(i);
            });
        } else {
            dst[k] = src[k];
        }
    }
    return dst;
}
