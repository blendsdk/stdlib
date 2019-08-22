/**
 * Interface describing a function type.
 */
export type TFunction = (...args: any[]) => any;

/**
 * Interface describing a key/value pair.
 *
 * @export
 * @interface IDictionary
 */
export interface IDictionary {
    [key: string]: any;
}

/**
 * Interface describing a generic key/value pair.
 *
 * @export
 * @interface IDictionaryOf
 * @template T
 */
export interface IDictionaryOf<T> {
    [key: string]: T;
}
