const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

const result1 = A + B;
const result2 = A - B;
const result3 = A * B;
const result4 = Math.floor(A / B);
const result5 = A % B;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);