const parseArgs = () => {
  const res = [];
  const args = process.argv.slice(2);
  args.forEach((arg, index) => {
    if (arg.startsWith("--")) {
      res.push(`${arg.slice(2)} is ${args[index + 1]}`);
    }
  });
  console.log(res.join(", "));
};

parseArgs();
