import { existsSync, readdir } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const link = import.meta.url;
const __filename = fileURLToPath(link);
const __dirname = dirname(__filename);
const sourceFolder = join(__dirname, "files");
// console.log(sourceFolder);
const list = async () => {
  if (!existsSync(sourceFolder)) {
    throw new Error("FS operation failed");
  }

  readdir(sourceFolder, (err, files) => {
    if (err) throw err;
    files.forEach((el) => console.log(el));
  });
};

await list();
