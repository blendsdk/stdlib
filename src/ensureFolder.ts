import mkdirp from "mkdirp";

/**
 * Ensures that a folder is created
 *
 * @export
 * @param {string} fileOrPath
 * @returns {string}
 */
export function ensureFolder(folder: string): string {
    mkdirp.sync(folder);
    return folder;
}
