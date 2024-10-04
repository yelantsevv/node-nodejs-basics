import { promises, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourceFolder = join(__dirname, "files");
const targetFolder = join(__dirname, "files_copy");
const copy = async () => {
  try {
    if (existsSync(targetFolder) || !existsSync(sourceFolder)) {
      throw new Error("FS operation failed");
    }
    await promises.cp(sourceFolder, targetFolder, { recursive: true });
  } catch (error) {
    console.log(error);
  }
};

await copy();
