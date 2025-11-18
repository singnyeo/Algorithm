const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const number1 = Number(input[0]);
const number2 = Number(input[1]);

let result;

if (number1 > number2) {
    result = ">";
} else if (number1 == number2) {
    result = "==";
} else {
    result = "<";
}

console.log(result);