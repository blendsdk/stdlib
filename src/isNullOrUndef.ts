/**
 * Tests whether the given value is null or undefined.
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isNullOrUndef(value: any): boolean {
    return value === null || value === undefined || value === "undefined";
}

/**
 * Tests whether the given value is null or undefined and returns
 * a default value in case.
 *
 * @export
 * @template ReturnType
 * @param {ReturnType} value
 * @param {ReturnType} defaultValue
 * @returns {ReturnType}
 */
export function isNullOrUndefDefault<ReturnType>(value: ReturnType, defaultValue: ReturnType): ReturnType {
    return isNullOrUndef(value) ? defaultValue : value;
}