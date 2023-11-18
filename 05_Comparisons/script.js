// easy comparisons 
console.log(2 > 1); // true
console.log(2 >= 1);  // true
console.log(2 < 1);  // false
console.log(2 <= 1);  // flase
console.log(2 == 1);  // flase
console.log(2 != 1);  // true


console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null);  // null 
console.log(null > 0); // false
console.log(null == 0); // false  
console.log(null >= 0); // true

console.log(undefined);
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0); // false

// The reason is that comparison > < >= <= and equality check == work differently
// Comparison convert null to a number, treating it as 0.
// that's why null >= 0 is true and (1) null > 0 is false.

// strict check (===) it also checks its datatypes

console.log("2" === 2); // false

