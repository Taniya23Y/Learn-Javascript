// Aithmetic operator --> +,-,*,/,%,**(Expotentially-power), ++ , --

// Example 1

let a = 3;
let b = a;

console.log(b);

// Assignment Operator --> = , += , -= , *= , /= , %= , **= 

// example 2

let x = 10;
x += 5;

console.log(x);

// Comparison Operator --> == , ===(equal value and equal type), !=, !==, > , < , >= , <= ,?(ternary operator)

// Example 3

let t = 3;
let q = 3;

console.log(t!==q); // false

// String Comparison operator --> '' and " "

// Example 4

let text1 = 'A';
let text2 = 'B';
let result = text1 < text2;

console.log(result); // true (less than hai)

// Example 5
let text = "20";
let run = "5";
let result1 = text < run;

console.log(result1); // true

// String Addition --> The + can also be used to add (concatenate) strings:

// Example 6

let j = "John";
let D = "Doe";
let jh = j + " " + D;

console.log(jh); // answer = John Doe

// Logical Operators --> &&(logical and), ||(logical or), !(logical Not)

// Example 7

let w = 6;
let u = 6;
let v = (w < 6 && u);

console.log(v); //false

// Bitwise Operator --> & , | , ~ , ^ , << , >> , >>>

// Example 8 
let p = 5;
let o = 1;

console.log(5>>>1); // 2 (>>> --> unsigned right shift)

// Practice Question 1
// what is the value of age after this code runs?

let age = 23;
age + 2;

console.log(age); // answer--> 23

// Practice Question 2
// What is thevalue of avg afetr this cod runs?

let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;

console.log(avg); // answer --> 90

// Practice Question 3
//What is the value of each Varianle in each line of code?

let num = 5;
let newNum = num++;
newNum = ++num;

console.log(newNum); // 7

/**********************/

let value = 3;
let negValue = -value;

console.log(value); // 3
console.log(negValue); // -3

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2/2); // 1
console.log(2%3); // 2
console.log(2**3); // 8

/* tricky things */
let str1 = "hello";
let str2 = "Anya";
let str3 = str1 + str2;

console.log(str3); // helloAnya

// problem kaha aati hain
console.log("1" + 2);    // 12  
console.log(1 + "2");    // 12
console.log("1" + "2");    // 12
console.log("1" + 2 + 2);    // 122
console.log(1 + 2 + "2");    // 32

console.log( (3 + 4) * 5 % 3);    // 32

console.log(true); // true
console.log(+true); // 1 // bad practice
// console.log(true+); // error
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // bad practices

let gameCounter = 100;
gameCounter++;
// ++gameCounter;
console.log(gameCounter); // 101
console.log(gameCounter); // 101