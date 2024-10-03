const parseEnv = () => {
  const arrRss = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`);

  console.log(arrRss.join("; "));
};

parseEnv();
