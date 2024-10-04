import { promises, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourceFile = join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    if (!existsSync(sourceFile)) {
      throw new Error("FS operation failed");
    }

    await promises.rm(sourceFile);
  } catch (error) {
    console.log(error);
  }
};

await remove();
