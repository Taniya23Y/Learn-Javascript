//Practice Question

// Question 1
// For a given array with marks of students-> [85, 97, 44, 37, 76, 60]
// find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

// for loop
for (let val of marks) {
  sum += val;
}

let avg = sum / marks.length;
console.log(`Average marks = ${avg}`); // Average marks = 66.5

// Question 2
// For a given array with the prices of 5 items-> [250, 645, 300, 900, 50] All items
// have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
  console.log(`Value of index ${i} = ${val}`);
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`Value after offer = ${items[i]}`);
  i++;
}

/*
  Answer is: 
  Value of index 0 = 250
  Value after offer = 225
  Value of index 1 = 645
  Value after offer = 580.5
  Value of index 2 = 300
  Value after offer = 270
  Value of index 3 = 900
  Value after offer = 810
  Value of index 4 = 50
  Value after offer = 45
*/

//------------------------------------------------
// Question 3
// Create a array to store companies-> "Bloomerg", "Microsoft", "Uber", "Google" , "IBM", "Netflix"
// a. Remove the first company from the array.
// b. Remove Uber & add ola in its place
// c. Add Amazon at the end.

let companies = ["Bloomerg", "Microsoft", "Uber", "Google" , "IBM", "Netflix"];
// a. Remove the first company from the array.

console.log(companies.shift()); // Bloomerg
console.log(companies); // [ "Microsoft", "Uber", "Google" , "IBM", "Netflix"]

// b. Remove Uber & add ola in its place
console.log(companies.splice(1, 1, "Ola")); [ 'Uber' ]
console.log(companies); // [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix' ]

// c. Add Amazon at the end.
console.log(companies.push("Amazon")); // 6
console.log(companies); // [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon' ]