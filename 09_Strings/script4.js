/*
   JavaScript Template Strings-
    (1) string Templates
    (2) Template Strings
    (3) Template Literals
*/

//Back-Tics Syntax
//Template Strings use back-ticks (``) rather than the quotes ("") to define a string
let text = `Hello World!`;
console.log(text);

// Quotes Inside Strings
// Template Strings allow both single and double quotes inside a string.
let text1 = `He's often called "Johnny"`;
console.log(text1);

// Multiline Strings
// Template Strings allow multiline strings.
let text2 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);

// Interpolation
// Template String provide an easy way to interpolate variables and expressions into strings.
// The method is called string interpolation.
// The syntax is:
// ${...}

// Variable Substitutions
// Template Strings allow variables in strings.
let firstName = "John";
let lastName = "Doe";
let text3 = `Welcome ${firstName}, ${lastName}!`;
console.log(text3);

// Automatic replacing of variables with real values is called string interpolation.
// It allows you to include variable values directly within a template literal by using the ${ } notation.

// Expression Substitution
// Template Strings allow expressions in strings
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);