const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(Number(line));
  const year = input;
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(1);
  } else console.log(0);
    rl.close();
});
