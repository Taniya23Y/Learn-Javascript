//============= JavaScript Break and Continue ===============
// The break statement "jumps out" of a loop.

// The continue statement "jumps over" one iteration in the loop.

// The Break Statement
// It is used to "jump out" of a switch() statement.

// The break statement can also be used to jump out of a loop:
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "\n";
}
console.log("Break Example: ", text);

// In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.

//-----------------------------------------------------------
// The Continue Statement
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// This example skips the value of 3:
let text7 = " ";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text7 += "The number is " + i + "\n";
}
console.log(text7);

//------------------------------------------------------
// JavaScript Labels
// To label JavaScript statements you precede the statements with a label name and a colon:

/*
label:
statements
*/
// The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.
/*
Syntax:

break labelname;

continue labelname;
*/
//The continue statement (with or without a label reference) can only be used to skip one loop iteration.

// The break statement, without a label reference, can only be used to jump out of a loop or a switch.

// With a label reference, the break statement can be used to jump out of any code block:

// Example
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text8 = ' ';
list: {
  text8 += cars[0] + "\n";
  text8 += cars[1] + "\n";
  break list;
  text8 += cars[2] + "\n";
  text8 += cars[3] + "\n";
}
console.log(text8);