/*
    Basic String Methods
    Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.
    
        (1)  String length
        (2)  String charAt()
        (3)  String charCodeAt()
        (4)  String at()
        (5)  String [ ]
        (6)  String slice()
        (7)  String substring()
        (8)  String substr()
        (9)  String toUpperCase()
        (10) String toLowerCase()
        (11) String concat()
        (12) String trim()
        (13) String trimStart()
        (14) String trimEnd()
        (15) String padStart()
        (16) String padEnd()
        (17) String repeat()
        (18) String replace()
        (19) String replaceAll()
        (20) String split()


*/

const name = "AnyaForger";
const repoCount = 5;

// this is older version 
console.log(name + repoCount + "Value"); 

// This is newer version
// string interpoliation
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);

// Another way to delcare string
const gameName = new String('AnyaForger');

console.log(gameName); // [String: 'AnyaForger']
console.log(gameName[0]); // A
console.log(gameName.__proto__); // {}


// JavaScript String Methods 
console.log(gameName.length); // 10
console.log(gameName.toUpperCase()); // ANYAFORGER
console.log(gameName.toLowerCase()); // anyaforger

/*
   Extracting String Characters
    There are 4 methods for extracting string characters:

        (1) The at(position) Method
        (2) The charAt(position) Method
        (3) The charCodeAt(position) Method
        (4) Using property access [] like in arrays
*/

//The charAt() method returns the character at a specified index (position) in a string:
console.log(gameName.charAt(2)); // y

// The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(gameName.charCodeAt(3)); // 97

// The at() method allows you to use either the index or the Unicode value as an argument
console.log(gameName.at(5)); // o

console.log(gameName.indexOf('r')); // 6


/*
    Extracting String Parts
       There are 3 methods for extracting a part of a string:

        (1) slice(start, end)
        (2) substring(start, end)
        (3) substr(start, length)
*/

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
const newString = gameName.substring(0, 4); // it ignores negative values
console.log(newString); // Anya(4 value is not included)

// slice() extracts a part of a string and returns the extracted part in a new string.
// If a parameter is negative, the position is counted from the end of the string:
const anotherString = gameName.slice(-8, 4); // also include negative values
console.log(anotherString); // ya

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
const anotherString1 = gameName.substr(0,9);
console.log(anotherString1); //AnyaForge


// concat() ==> concat() joins two or more strings:
// The concat() method can be used instead of the plus operator.
const title = "Proper";
const title1 = "Way";
console.log(title.concat(" " , title1)); // Proper Way


// trim => The trim() method removes whitespace from both sides of a string:
const newStringOne = "     Anya    ";
console.log(newStringOne.length); //13
console.log(newStringOne);//     Anya
console.log(newStringOne.trim()); //Anya 

// trimStart() => The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(newStringOne.trimStart()); //Anya

// trimEnd() => The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log(newStringOne.trimEnd()); //     Anya

//JavaScript String Padding
// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// padStart() => The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
let text5 = "5";
console.log(text5.padStart(4,"0")); //0005
//----> The padStart() method is a string method.
//      To pad a number, convert the number to a string first.

let numb = text5.toString();
console.log(numb.padStart(4,"o"));//ooo5

// padEnd() => The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.
let text = numb.toString();
let padded = text.padEnd(4,"0");
console.log(padded); // 5000

// repeat() => The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.
let texts = "Hello world!";
let result = texts.repeat(4);
console.log(result);//Hello world!Hello world!Hello world!Hello world

// replace() => The replace() method replaces a specified value with another value in a string:
// The replace() method replaces only the first match.
let new1 = "I am so lucky to have a master!"
console.log(new1);
console.log(new1.replace("master", "teacher"));

// If you want to replace all matches, use a regular expression with the /g flag set.
let text12 = "Please visit Microsoft and Microsoft!";
console.log(text12.replace(/Microsoft/g, "Google"));

// Replace() => The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown
let show = "js have so much string methods and have their own js string rules.";
console.log(show.replaceAll("js", "Javascript"));
console.log(show.replaceAll("string", "str"));


const url = "https://www.google.com/anya%20Forger";
url.replace('%20', '-');
console.log(url.replace('%20', '-')); // https://www.google.com/anya-Forger


// Ask a Question
url.includes('anya');
console.log(url.includes('anya')); // true

//+++++++++++++++++
// convert string into array
let str = "Oppenheimer|Barbie";
console.log(str.split('-')); // [ 'Oppenheimer', 'Barbie' ]
console.log(str.split('|')); // [ 'Oppenheimer', 'Barbie' ]