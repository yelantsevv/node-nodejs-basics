import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const script = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const child = spawn("node", [script, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(["arg1", "arg2"]);
