import { isString } from "./isString";

/**
 * Tests whether the given value is an instance of another class/function
 * in an optional scope. The scope defaults to `window`
 *
 * @export
 * @param {*} obj
 * @param {*} clazz
 * @param {*} [scope]
 * @returns {boolean}
 */
export function isInstanceOf(obj: any, clazz: any): boolean {
    if (obj === null || obj === undefined) {
        return false;
    }

    const hc = "[object HTMLCollection]";
    if (obj.toString() === hc && clazz === "HTMLCollection") {
        return true;
    } else {
        if (isString(clazz)) {
            const fn = new Function(
                "",
                " try { return " +
                clazz +
                " } catch(e) { if(console && console.log) {console.log(e);};  return null };"
            );
            clazz = fn();
        }
        try {
            const res = obj instanceof clazz;
            return res;
        } catch (e) {
            return false;
        }
    }
}
