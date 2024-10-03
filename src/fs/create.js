import { writeFile, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const __dirname = dirname(process.argv[1]);

const filePath = join(__dirname, "files", "fresh.txt");

const create = async () => {
  if (existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  writeFile(filePath, "I am fresh and young", (err) => {
    if (err) console.error(err);
  });
};

await create();
