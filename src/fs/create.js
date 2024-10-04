import { promises, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    // if (existsSync(filePath)) {
    //   throw new Error("FS operation failed");
    // }

    try {
      await promises.access(filePath);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
    await promises.writeFile(filePath, "I am fresh and young");
  } catch (error) {
    console.log(error);
  }
};

await create();
