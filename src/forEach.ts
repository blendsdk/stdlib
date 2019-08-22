import { isArray } from "./isArray";
import { isFunction } from "./isFunction";
import { isInstanceOf } from "./isInstanceOf";

/**
 * Loops though the given object (array, dictionary, NodeList, HTMLCollection) and runs
 * a callback on each item.
 * The callback loop will break when the callback function returns "false" explicitly!
 *
 * @export
 * @template T
 * @param {*} obj
 * @param {((item: T, index: number | string, scope: any) => any | boolean)} callback
 * @param {*} [scope]
 * @returns
 */
export function forEach<T>(
    obj: any,
    callback: (item: T, index: number | string, scope: any) => any | boolean,
    scope?: any
) {
    let key: any;
    const isHTMLCollection = (elObj: any): boolean => {
        return (
            (elObj.constructor && elObj.constructor.name && elObj.constructor.name === "HTMLCollection") ||
            elObj.toString() === "[object HTMLCollection]"
        );
    };
    const isNodeList = (elObj: any) => {
        return ((elObj.constructor && elObj.constructor.name && elObj.constructor.name === "NodeList") ||
            elObj.toString() === "[object NodeList]");
    };
    if (obj) {
        if (isFunction(obj)) {
            return;
        } else if (isArray(obj)) {
            // tslint:disable-next-line:no-shadowed-variable
            const length: number = obj.length;
            for (key = 0; key < length; key++) {
                if (callback.call(scope, obj[key], key, obj) === false) {
                    break;
                }
            }
        } else if (isHTMLCollection(obj) || isNodeList(obj)) {
            const length: number = obj.length;
            let el: HTMLElement;
            for (key = 0; key !== length; key++) {
                el = obj.item(key);
                if (callback.call(scope, el, key, obj) === false) {
                    break;
                }
            }
        } else {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (callback.call(scope, obj[key], key, obj) === false) {
                        break;
                    }
                }
            }
        }
    }
}
