const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
  input = Number(line.trim());
  rl.close();
});

rl.on("close", () => {
  for (let i = 1; i < input + 1; i++) {
    console.log("*".repeat(i));
  }
});