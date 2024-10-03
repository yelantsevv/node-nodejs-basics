import { existsSync, unlink } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourceFile = join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  if (!existsSync(sourceFile)) {
    throw new Error("FS operation failed");
  }

  unlink(sourceFile, (err) => err && console.log(err));
};

await remove();
