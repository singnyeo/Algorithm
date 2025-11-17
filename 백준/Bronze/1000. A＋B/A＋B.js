const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a+b);