import { createReadStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToRead = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = createReadStream(fileToRead);
  readStream.on("data", (chunk) => process.stdout.write(chunk + "\n"));
};

await read();
