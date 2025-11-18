const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
    const input = line.split(" ").map(Number);
    const a = input[0];
    const b = input[1];

    console.log(Math.abs(a - b));

    rl.close();
});
