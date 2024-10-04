import { promises, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourceFile = join(__dirname, "files", "wrongFilename.txt");
const targetFile = join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    if (existsSync(targetFile) || !existsSync(sourceFile)) {
      throw new Error("FS operation failed");
    }

    await promises.rename(sourceFile, targetFile);
  } catch (error) {
    console.log(error);
  }
};

await rename();
