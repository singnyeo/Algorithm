const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
    const input = Number(line.trim());
    let result = [];
    for ( let i = 1; i <= input; i++) {
      result.push(i);
    }
    console.log(result.join("\n"));

    rl.close();
});
