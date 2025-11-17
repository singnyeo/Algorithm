const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

const result1 = A / B;

console.log(result1);