const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let T = 0;
let count = 0;
let result = 0;

rl.on("line", (line) => {
  if (T === 0) {
    T = Number(line.trim());
  } else {
    input.push(line.trim());
    count++;
    if (count === T) {
      rl.close();
    }
  }
});

rl.on("close", () => {
	let result = ""
  input.forEach(pair => {
    const [a, b] = pair.split(" ").map(Number);
    result += (a + b) +"\n";
  });
	console.log(result.trim())
});
