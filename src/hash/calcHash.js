import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createHash } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  const stream = createReadStream(filePath);

  stream.on("data", (data) => {
    hash.update(data);
  });

  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });

  stream.on("error", (err) => {
    console.error("Error reading file:", err);
  });
};

await calculateHash();
