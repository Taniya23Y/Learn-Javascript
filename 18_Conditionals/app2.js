// switch conditional statements.

// JavaScript Switch Statement
// The switch statement is used to perform different actions based on different conditions.

// The JavaScript Switch Statement
// Use the switch statement to select one of many code blocks to be executed.
/*
Syntax
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
*/

// Example

let day = new Date().getDay();
console.log(day);
switch (day) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
       console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");

    default: 
    console.log("You are in heaven");
  }

//---------------------------------------------------------------
/*
The break Keyword
When JavaScript reaches a break keyword, it breaks out of the switch block.
This will stop the execution inside the switch block.
It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case. 
*/

//---------------------------------------------------------------

// The default Keyword
// The default keyword specifies the code to run if there is no case match:

// Example
// The getDay() method returns the weekday as a number between 0 and 6.

// If today is neither Saturday (6) nor Sunday (0), write a default message:

let date = new Date().getDay();
// console.log(date);
switch (date) {
  case 6:
    console.log("Today is Saturday");
    break;
  case 0:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Looking forward to the Weekend");
}

// The default case does not have to be the last case in a switch block:
switch (date) {
    default:
        console.log("Looking forward to the Weekend");
        break;
    case 6:
      console.log("Today is Saturday");
      break;
    case 0:
      console.log("Today is Sunday");
      break;
}

//-------------------------------------------------------------------
// Common Code Blocks
// Sometimes you will want different switch cases to use the same code.
// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

// Example
switch (date) {
  case 4:
  case 5:
    console.log("Soon it is Weekend");
    break;
  case 0:
  case 6:
    console.log("It is Weekend");
    break;
  default:
    console.log("Looking forward to the Weekend");
}

//------------------------------------------------------------------------
// Switching Details
// If multiple cases matches a case value, the first case is selected.
// If no matching cases are found, the program continues to the default label.
// If no default label is found, the program continues to the statement(s) after the switch.

//--------------------------------------------------------------------------
// Strict Comparison
// Switch cases use strict comparison (===).

// The values must be of the same type to match.

// A strict comparison can only be true if the operands are of the same type.

// In this example there will be no match for x:

// Example
let x = "0";
switch (x) {
  case 0:
    console.log("Off");
    break;
  case 1:
    console.log("On");
    break;
  default:
    console.log("No value found");
}