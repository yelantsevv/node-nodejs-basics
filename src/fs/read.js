import { promises, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourceFile = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    if (!existsSync(sourceFile)) {
      throw new Error("FS operation failed");
    }
    const readFile = await promises.readFile(sourceFile, { encoding: "utf8" });
    console.log(readFile);
  } catch (error) {
    console.log(error);
  }
};

await read();
