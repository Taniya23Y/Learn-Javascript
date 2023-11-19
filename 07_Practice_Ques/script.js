// Practice Question 
// Question 1) Declare your name as a string and print its length in js.

let name = "Anya Forger";
console.log(typeof name);
let len  = name.length;
console.log(len); // 11


// Question 2) Declare your first name as a string and print its first character.

let firstName = "Anya";
console.log(firstName[0]); // A

// Question 3) Declare your first name as a string and print its last character.
let lastName = "Anya";
let length = lastName.length;
console.log(lastName[length-1]); // a

// Question 4) What is the output of the following code. 
///+++++++++++++   "AnyaForger"+123

console.log("AnyaForger"+123); // AnyaForger123

// Question 5) what are lengths of an empty string & a string with a single space?
let empty = "";
let lengthy = empty.length;
console.log(lengthy); // 0

let space = " ";
let spaceLength = space.length;
console.log(spaceLength); // 1


//+++++++++++++++++++++++++++++++++++++++++
/* Template literals: (They are used to add embedded expression in a string.)
   let a = 5;
   let b = 10;

   console.log(`Your pay ${a+b} rupees`);
*/
let pencilPrice = 10;
let erasorPrice = 10;

console.log("The total price is : ", pencilPrice + erasorPrice, "Rupees");//The total price is :  20  Rupees

let output = "The total price is : " + (pencilPrice + erasorPrice) + "rupees.";
console.log(output); // The total price is : 20rupees.
