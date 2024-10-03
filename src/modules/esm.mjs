// const path = require('path');
import path from "path";

// const { release, version } = require('os');
import { release, version } from "os";

// const { createServer: createServerHttp } = require('http');
import { createServer as createServerHttp } from "http";

// require('./files/c');
import "./files/c.js";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { promises, readFileSync } from "fs";
const bFilePath = path.join(__dirname, "files", "b.json");
const aFilePath = path.join(__dirname, "files", "a.json");

const a = readFileSync(aFilePath, "utf-8");
const b = await promises.readFile(bFilePath, "utf-8");

// import a from './files/a.json' with { type: 'json' };
// import b from './files/b.json' with { type: 'json' };

// const random = Math.random();
const { random } = Math;
let unknownObject = random() > 0.5 ? a : b;

// if (random() > 0.5) {
//     unknownObject = a;
// } else {
//     unknownObject = b;
// }

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
