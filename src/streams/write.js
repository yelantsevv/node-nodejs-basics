import { createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToWrite = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const stream = createWriteStream(fileToWrite, "utf-8");
  process.stdin.pipe(stream);
  stream.on("finish", () => console.log("Finished writing file."));
};

await write();
