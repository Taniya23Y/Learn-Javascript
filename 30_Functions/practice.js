// Question 1):- Create a function using the "function" keyword that takes a string as an argument
///               & returns the number of vowels in the string.?

// approach 1
function countVowel(str) {
  let store = "str";
  if (store === "str") {
    return str.split("").filter((v) => {
      return "aeiou | AEIOU".includes(v);
    }).length;
  } else {
    console.log("Error: Argument must be a String");
  }
}

countVowel("Hello World");

// approach 2

function countVowel1(str) {
  let vowelsRegex = /[aeiou | AEIOU]/gi;
  let strMatches = str.match(vowelsRegex);
  if (strMatches) {
    console.log(`The string is: ${strMatches} and Number is: ${strMatches.length}`);
  } else {
    console.log("Not find");
  }
}
countVowel1("HelloWoAld");

// approach 3

function countVowel2(str) {
  if (typeof str === "string") {
    return str.split("").filter((v) => {
      return "aeiou".includes(v.toLowerCase());
    }).length;
  } else {
    console.log("Error: Argument must be a String");
  }
}

console.log(countVowel2("HellAo World")); // Output: 5
