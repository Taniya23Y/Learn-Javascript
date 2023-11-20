const name = "AnyaForger";
const repoCount = 5;

// this is older version 
console.log(name + repoCount + "Value"); 

// This is newer version
// string interpoliation
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);

// Another way to delcare string
const gameName = new String('Anya-Forger');

console.log(gameName); // [String: 'AnyaForger']
console.log(gameName[0]); // A
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 10
console.log(gameName.toUpperCase()); // ANYAFORGER
console.log(gameName.toLowerCase()); // anyaforger
console.log(gameName.charAt(2)); // y
console.log(gameName.indexOf('r')); // y

const newString = gameName.substring(0, 4); // it ignores negative values
console.log(newString); // Anya(4 value is not included)

const anotherString = gameName.slice(-8, 4); // also include negative values
console.log(anotherString); // ya

// trim
const newStringOne = "     Anya    ";
console.log(newStringOne);//      Anya
console.log(newStringOne.trim()); // Anya 

const url = "https://www.google.com/anya%20Forger";
url.replace('%20', '-');
console.log(url.replace('%20', '-')); // https://www.google.com/anya-Forger

// Ask a Question
url.includes('anya');
console.log(url.includes('anya')); // true

//+++++++++++++++++
// convert string into array

console.log(gameName.split('-')); // [ 'Anya', 'Forger' ]