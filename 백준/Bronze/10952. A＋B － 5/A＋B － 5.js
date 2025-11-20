const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  const result = line.trim();
  if (result === "0 0") {
    rl.close();
    return;
  }
  input.push(result);
});

rl.on("close", () => {
  input.forEach(pair => {
    const [a, b] = pair.split(" ").map(Number);
    console.log(a + b);
  });
});
