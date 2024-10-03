import { Worker } from "worker_threads";
import { cpus } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const worker = join(__dirname, "./worker.js");

const performCalculations = async () => {
  const CPUS = cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < CPUS; i++) {
    const n = 10 + i;
    workers[i] = new Worker(worker, { workerData: { n } });

    workers[i].on("message", (result) => {
      results[i] = { status: "resolved", data: result };
    });
    workers[i].on("error", () => {
      results[i] = { status: "error", data: null };
    });
  }
  await Promise.all(
    workers.map(
      (worker) =>
        new Promise((resolve) => {
          worker.on("exit", resolve);
        })
    )
  );

  console.log(results);
};

await performCalculations();
