import { promises, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const link = import.meta.url;
const __filename = fileURLToPath(link);
const __dirname = dirname(__filename);
const sourceFolder = join(__dirname, "files");
// console.log(sourceFolder);
const list = async () => {
  try {
    if (!existsSync(sourceFolder)) {
      throw new Error("FS operation failed");
    }
    const files = await promises.readdir(sourceFolder);
    files.forEach((el) => console.log(el));
  } catch (error) {
    console.log(error);
  }
};

await list();
