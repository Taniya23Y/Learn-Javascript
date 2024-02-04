/*
    String Search Methods
       (1) String indexOf()
       (2) String lastIndexOf()
       (3) String search()
       (4) String match()
       (5) String matchAll()
       (6) String includes()
       (7) String startsWith()
       (8) String endsWith()

*/

// indexOf() => The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found
let str = "Javascript language is a popular programming language.";
console.log(str.indexOf("language")); // 11
console.log(str.indexOf("language", 5)); // 11

// lastindexOf() =>The lastIndexOf() method returns the index of the last occurrence of a specified text in a string, return -1 if the text is not found.
let str1 = "Javascript language is a popular programming language.";
console.log(str1.lastIndexOf("language")); // 45
console.log(str1.lastIndexOf("language", 41)); // 11

// search() => The search() method searches a string for a string (or a regular expression) and returns the position of the match.
let str3 = "Javascript language is a popular programming language.";
console.log(str3.search(/language/)); // 11

// match() => The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let str4 = "The rain in SPAIN stays mainly in the plain";
console.log(str4.match("ain")); // 1 ain
console.log(str4.match(/ain/g)); // [ 'ain', 'ain', 'ain' ]

// matchAll() => The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
let str5 = "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(str5.matchAll("Cats")); //Object [RegExp String Iterator] {}
                                    // answer is: Cats Cats
// global flag (g) makes it return all matches instead of just one
console.log(str5.matchAll(/Cats/g));// answer is: Cats Cats
// insensitive flag (i) can be used with regex also, like this /cats/gi
console.log(str5.matchAll(/Cats/gi));// answer is: cats Cats Cats

//includes() => The includes() method returns true if a string contains a specified value. Otherwise it returns false.
let str6 = "Hello world, welcome to the universe.";
console.log(str6.includes("world")); // true
console.log(str6.includes(`worlds`)); // false

// startWith() => The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false.
let str7 = "Hello world, welcome to the universe.";
console.log(str7.startsWith("world")); // false
console.log(str7.startsWith(`Hello`)); // true

// endsWith() => The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false.
let str8 = "Hello world, welcome to the universe.";
console.log(str7.endsWith("world")); // false
console.log(str7.endsWith("world", 11)); // true
console.log(str7.endsWith(`universe.`)); // true