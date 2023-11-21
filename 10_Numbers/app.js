// Numbers

const score = 400;
console.log(score); // 400

// number as objrcct
const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 23.7890;
console.log(otherNumber.toPrecision(4)); // 23.78

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 10,00,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000