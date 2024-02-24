//=============== JavaScript Regular Expressions =================

// A regular expression is a sequence of characters that forms a search pattern.
// The search pattern can be used for text search and text replace operations.

//+++++++++++++
// What Is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.
// When you search for data in a text, you can use this search pattern to describe what you are searching for.
// A regular expression can be a single character, or a more complicated pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.

// Syntax
// /pattern/modifiers;
// Example
/School/i;
console.log(/School/i);

// Example explained:

// /School/i  is a regular expression.
// School  is a pattern (to be used in a search).
// i  is a modifier (modifies the search to be case-insensitive).

//-------------------------------------------------------------------
// Using String Methods
// In JavaScript, regular expressions are often used with the two string methods: search() and replace().

// The search() method uses an expression to search for a match, and returns the position of the match.
// The replace() method returns a modified string where the pattern is replaced.

//--------------------------------------------------------------------

// Using String search() With a String
// The search() method searches a string for a specified value and returns the position of the match:
// Use a string to do a search for "School" in a string:

let text = "Visit School!";
let n = text.search("School");
console.log(n); // Visit School!
n = text.search(/School/i);
console.log(n); // Visit School!

//--------------------------------------------------------------------

// Using String search() With a Regular Expression
text = "Visit School!";
n = text.replace("School");
console.log(n); // Visit undefined!
n = text.replace("School", "College");
console.log(n); // Visit College!
n = text.replace(/School/i, "College");
console.log(n); // Visit College!

//--------------------------------------------------------------------

/*
Regular Expression Modifiers
Modifiers can be used to perform case-insensitive more global searches:

            Modifier	||     Description	
        -------------------------------------------------------------
            i	        ||   Perform case-insensitive matching	
            g	        ||   Perform a global match (find all)	
            m	        ||   Perform multiline matching	
            d	        ||   Perform start and end matching (New in ES2022)
*/

let text1 = "Visit School!";
n = text1.search(/s/i);
console.log(n); // 2

//----------------------------------------------------------------

// Using the RegExp Object
// In JavaScript, the RegExp object is a regular expression object with predefined properties and methods.

// Using test()
// The test() method is a RegExp expression method.
// It searches a string for a pattern, and returns true or false, depending on the result.
// The following example searches a string for the character "e":


const pattern = /e/;
console.log(pattern.test("The best things in life are free!")); // true

//------------------------------------------------------------------------
// Using exec()
// The exec() method is a RegExp expression method.

// It searches a string for a specified pattern, and returns the found text as an object.

// If no match is found, it returns an empty (null) object.

// The following example searches a string for the character "e":

console.log(/e/.exec("The best things in life are free!"));
/*  
[
  'e',
  index: 2,
  input: 'The best things in life are free!',
  groups: undefined
]
*/
 