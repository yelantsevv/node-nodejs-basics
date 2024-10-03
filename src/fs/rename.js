import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFile = path.join(__dirname, "files", "wrongFilename.txt");
const targetFile = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  if (fs.existsSync(targetFile) || !fs.existsSync(sourceFile)) {
    throw new Error("FS operation failed");
  }

  fs.rename(sourceFile, targetFile, (err) => err && console.log(err));
};

await rename();
