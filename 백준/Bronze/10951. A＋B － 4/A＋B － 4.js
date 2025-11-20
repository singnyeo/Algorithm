const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim())
  if(input == " ") {
      rl.close();
  }
});

rl.on("close", () => {
    input.forEach(pair => {
    const [a,b] = pair.split(" ").map(Number);
    console.log(a+b)
  })
});