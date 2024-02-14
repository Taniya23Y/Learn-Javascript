// Conditional statements are used to perform different actions based on different conditions

//------------------------------------------------------------
// Conditional Statements
/*
    Very often when you write code, you want to perform different actions for different decisions.
    You can use conditional statements in your code to do this.
    In JavaScript we have the following conditional statements:
    Use if to specify a block of code to be executed, if a specified condition is true
    Use else to specify a block of code to be executed, if the same condition is false
    Use else if to specify a new condition to test, if the first condition is false
    Use switch to specify many alternative blocks of code to be executed.
*/

// The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

/*
Syntax
if (condition) {
  //  block of code to be executed if the condition is true
}

*/
// Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

// Make a "Good day" greeting if the hour is less than 18:00:

let hour = new Date().getHours();
// console.log(hour);

if (hour < 18) {
  greeting = "Good day";
  console.log(greeting);
}
else{
    console.log("object");
}

// The result of greeting will be:

//----------------------------------------------
// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.

/*
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
*/
// Example
// If the hour is
//  less than 18, create a "Good day" greeting, otherwise "Good evening":

let hrs = new Date().getHours()
console.log(hrs);

if (hrs < 18) {
  greetingS = "Good day";
  console.log(greetingS);
} else {
  greeting_s = "Good evening";
  console.log(greeting_s);
}


//------------------------------------------------------------
// The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.
/*
Syntax
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
*/

// Example
// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

let time = new Date().getHours();

let wish;
if (time < 10) {
  wish = "Good morning";
  console.log(wish);
} else if (time < 20) {
  wish = "Good day";
  console.log(wish);
} else {
  wish = "Good evening";
  console.log(wish);
}

// answer is: good morning