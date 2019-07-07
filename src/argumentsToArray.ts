import { forEach } from "./forEach";

/**
 * Converts the function arguments to an array.
 *
 * @export
 * @param {IArguments} args
 * @returns {Array<any>}
 */
export function argumentsToArray(args: IArguments): any[] {
    const result: any[] = [];
    forEach(args, (item: any) => {
        result.push(item);
    });
    return result;
}