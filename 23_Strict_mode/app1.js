//============ JavaScript Use Strict ===================
//to activate the ESLint checking, uncomment the following line.
"use strict";
// "use strict"; Defines that JavaScript code should be executed in "strict mode".

// The "use strict" Directive
// The "use strict" directive was new in ECMAScript version 5.
// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

//+++++++++++++++++++++++++++++++==
// Declaring Strict Mode
// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):

"use strict";
x = 3.2;   // SyntaxError: Assignment to variable x
console.log(x); //ReferenceError: x is not defined

"use strict";
myFunction(); // Invoking the function

function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
}


// Declared inside a function, it has local scope (only the code inside the function is in strict mode):

x = 3.14;       // This will not cause an error.
myFunction(); // ReferenceError: y is not defined

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}