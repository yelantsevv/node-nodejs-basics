import { promises } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToCompress = join(__dirname, "files", "fileToCompress.txt");
const archive = join(__dirname, "files", "archive.gz");

const compress = async () => {
  await promises.pipeline(
    createReadStream(archive),
    createUnzip(),
    createWriteStream(fileToCompress)
  );
};

await compress();
