import { cp, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourceFolder = join(__dirname, "files");
const targetFolder = join(__dirname, "files_copy");
const copy = async () => {
  if (existsSync(targetFolder) || !existsSync(sourceFolder)) {
    throw new Error("FS operation failed");
  }

  cp(
    sourceFolder,
    targetFolder,
    { recursive: true },
    (err) => err && console.log(err)
  );
};

await copy();
