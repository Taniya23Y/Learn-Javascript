// Conversion and Operation
// variable decalare karte hai

let score = 33;

// type
console.log(typeof score); // number
console.log(typeof(score)); // number

let num = "33";

console.log(typeof num); // string

// score{string} is converted into number
let valueInNumber = Number(num);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // number

// "33" => 33
// "33abc" => Nan(Not-a-Number)
// true => 1
// false => 0
// null => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// isLoggedIn = 1  => true
// isLoggedIn = 0  => false
// isLoggedIn = ""  => false
// isLoggedIn = "anya"  => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); // 3
console.log(typeof(stringNumber)); //string

