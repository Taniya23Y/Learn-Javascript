// Date

// Creating Date Objects
// Date objects are created with the new Date() constructor.

// There are 9 ways to create a new date object:
/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/


// JavaScript new Date()
// new Date() creates a date object with the current date and time:

const myDate = new Date();
console.log(myDate); // 2024-02-11T12:58:06.041Z

// new Date(date string)
// new Date(date string) creates a date object from a date string:

const myDate2 = new Date("November 23, 2023 11:13:00");
console.log(myDate2); // 2023-11-23T05:43:00.000Z
const myDate3 = new Date("2022-03-25");
console.log(myDate3); // 2022-03-25T00:00:00.000Z

// new Date(year, month, ...)
// new Date(year, month, ...) creates a date object with a specified date and time.

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

const myDate4 = new Date(2022, 10, 24, 11, 63, 70, 0);
console.log(myDate4); // 2022-10-24T011:63:70.0.000Z

/*
  Note***
  JavaScript counts months from 0 to 11:
  January = 0.
  December = 11.
*/

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
// Specifying:

const a = new Date(2018, 15, 24, 10, 33, 30);
console.log(a);//2019-04-24T05:03:30.000Z
//Is the same as:

const b = new Date(2019, 3, 24, 10, 33, 30);
console.log(b); //2019-04-24T05:03:30.000Z
//Specifying a day higher than max, will not result in an error but add the overflow to the next month:
//Specifying:

const d2 = new Date(2018, 5, 35, 10, 33, 30);
console.log(d2); // 2018-07-05T05:03:30.000Z
// Is the same as:

const d3 = new Date(2018, 6, 5, 10, 33, 30);
console.log(d3); // 2018-07-05T05:03:30.000Z

// ===================================================================

// Using 6, 4, 3, or 2 Numbers
// 6 numbers specify year, month, day, hour, minute, second:

const d4 = new Date(2018, 11, 24, 10, 33, 30);
console.log(d4);

// 5 numbers specify year, month, day, hour, and minute:

const d5 = new Date(2018, 11, 24, 10, 33);
console.log(d5);

//4 numbers specify year, month, day, and hour:

const d6 = new Date(2018, 11, 24, 10);
console.log(d6);

// 3 numbers specify year, month, and day:

const d7 = new Date(2018, 11, 24);
console.log(d7);

// 2 numbers specify year and month:

const d8 = new Date(2018, 11);
console.log(d8);

//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

const d9 = new Date(2023);
console.log(d9);

// ===================================================================

// Previous Century
//One and two digit years will be interpreted as 19xx:

const date2 = new Date(99, 11, 24);
console.log(date2);

const date3 = new Date(9, 11, 24);
console.log(date2);

// JavaScript Stores Dates as Milliseconds
// JavaScript stores dates as number of milliseconds since January 01, 1970.
// Zero time is January 01, 1970 00:00:00 UTC.
//One day (24 hours) is 86 400 000 milliseconds.
//Now the time is: 1707658000157 milliseconds past January 01, 1970

// ===================================================================

// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as milliseconds plus zero time:

//01 January 1970 plus 100 000 000 000 milliseconds is:

const date11 = new Date(100000000000);
console.log(date11);
//January 01 1970 minus 100 000 000 000 milliseconds is:

const date12 = new Date(-100000000000);
console.log(date12);
//January 01 1970 plus 24 hours is:

const date13 = new Date(24 * 60 * 60 * 1000);
console.log(date13);
// or
const date14 = new Date(86400000);
console.log(date14);
//01 January 1970 plus 0 milliseconds is:

const date15 = new Date(0);
console.log(date15);

// ===================================================================