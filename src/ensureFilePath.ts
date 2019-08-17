import mkdirp from "mkdirp";
import * as path from "path";

/**
 * Ensures path of a file exists
 *
 * @export
 * @param {string} filePath
 * @returns {string}
 */
export function ensureFilePath(filePath: string): string {
    const dirName = path.dirname(filePath);
    mkdirp.sync(dirName);
    return filePath;
}
