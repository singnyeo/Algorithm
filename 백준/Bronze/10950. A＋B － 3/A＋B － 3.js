const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let T = 0;

rl.on('line', (line) => {
  if (T === 0) {
    T = Number(line.trim());
  } else {
    input.push(line.trim());
    if(input.length === T) {
      input.forEach(pair => {
        const [a, b] = pair.split(" ").map(Number);
        console.log(a + b);
      });
      rl.close();
    }
  }
});
