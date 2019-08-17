import * as fs from "fs";
import * as path from "path";
import { ensureFilePath } from "../ensureFilePath";
import { ensureFolder } from "../ensureFolder";

test("ensureFolder sanity", () => {
    const folder = path.join(process.cwd(), "temp");
    ensureFolder(folder);
});

test("ensureFilePath sanity", () => {
    const file = path.join(process.cwd(), "temp", "test1", new Date().getTime().toString(), "file.txt");
    ensureFilePath(file);
    fs.writeFileSync(file, "hello");
    expect(fs.readFileSync(file).toString()).toEqual("hello");
});
