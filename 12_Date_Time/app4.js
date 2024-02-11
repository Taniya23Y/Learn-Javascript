//============================================================
//                     JavaScript Date Formats


// JavaScript Date Input
// There are generally 3 types of JavaScript date input formats:

/*
              Type	       ||              Example
        ---------------------------------------------------------------
            ISO Date	   ||   "2015-03-25" (The International Standard)
            Short Date	   ||   "03/25/2015"
            Long Date	   ||   "Mar 25 2015" or "25 Mar 2015"
*/

// The ISO format follows a strict standard in JavaScript.
// The other formats are not so well defined and might be browser specific.


//===============================================================

//     JavaScript Date Output
// Independent of input format, JavaScript will (by default) output dates in full text string format:
// Example:---
//    Mon march 11 2021 00:27:28 GMT+0530 (India Standard Time)

//===============================================================

//   JavaScript ISO Dates
// ISO 8601 is the international standard for the representation of dates and times.
// The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

// Example (Complete date)
const myDate = new Date("2015-03-25");
console.log(myDate); // 2015-03-25T00:00:00.000Z

// The computed date will be relative to your time zone.
// Depending on your time zone, the result above will vary between March 24 and March 25.

//===============================================================

//    ISO Dates (Year and Month)
// ISO dates can be written without specifying the day (YYYY-MM):

const myDate3 = new Date("2015-03");
console.log(myDate3); // 2015-03-01T00:00:00.000Z
//Time zones will vary the result above between February 28 and March 01.

//===============================================================

// ISO Dates (Only Year)
// ISO dates can be written without month and day (YYYY):

const myDate4 = new Date("2015");
console.log(myDate4); // 2015-01-01T00:00:00.000Z

// Time zones will vary the result above between December 31 2014 and January 01 2015.


//===============================================================

// ISO Dates (Date-Time)
// ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

const myDate5 = new Date("2015-03-25T12:00:00Z");
console.log(myDate5); // 2015-03-25T18:30:00.000Z

// Date and time is separated with a capital T.

// UTC time is defined with a capital letter Z.

// If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:

const myDate6 = new Date("2015-03-25T12:00:00-06:30");
console.log(myDate6); // 2015-03-25T18:30:00.000Z
//UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

//Omitting T or Z in a date-time string can give different results in different browsers.


// ============================================================================

//    Time Zones
// When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
// When getting a date, without specifying the time zone, the result is converted to the browser's time zone.

// In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.

//           JavaScript Short Dates.
// Short dates are written with an "MM/DD/YYYY" syntax like this:

const myDate7 = new Date("03/25/2015");
console.log(myDate7);//2015-03-24T18:30:00.000Z
//----------------------------
// WARNINGS !
// In some browsers, months or days with no leading zeroes may produce an error:

const myDate8 = new Date("2015-3-25");
console.log(myDate8);//2015-03-24T18:30:00.000Z

// The behavior of "YYYY/MM/DD" is undefined.
// Some browsers will try to guess the format. Some will return NaN.

const myDate9 = new Date("2015/03/25");
console.log(myDate9); //2015-03-24T18:30:00.000Z

// The behavior of  "DD-MM-YYYY" is also undefined.
// Some browsers will try to guess the format. Some will return NaN.

const myDate10 = new Date("25-03-2015");
console.log(myDate10); // Invalid Date

// ====================================================================

//   JavaScript Long Dates.
//Long dates are most often written with a "MMM DD YYYY" syntax like this:

const myDate11 = new Date("Mar 25 2015");
console.log(myDate11); // 2015-03-24T18:30:00.000Z
//Month and day can be in any order:


const myDate12 = new Date("25 Mar 2015");
console.log(myDate12); //2015-03-24T18:30:00.000Z
//And, month can be written in full (January), or abbreviated (Jan):


const myDate13 = new Date("January 25 2015");
console.log(myDate13); // 2015-01-24T18:30:00.000Z

const myDate14 = new Date("Jan 25 2015");
console.log(myDate14); // 2015-01-24T18:30:00.000Z
//Commas are ignored. Names are case insensitive:


const myDate15 = new Date("JANUARY, 25, 2015");
console.log(myDate15); // 2015-01-24T18:30:00.000Z

//=========================================================

//Date Input - Parsing Dates
//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

//Date.parse() returns the number of milliseconds between the date and January 1, 1970:


let mSec = Date.parse("March 21, 2012");
console.log(mSec); // 1332268200000
//You can then use the number of milliseconds to convert it to a date object:


let milliSec = Date.parse("March 21, 2012");
const d = new Date(milliSec);
console.log(d); // 2012-03-20T18:30:00.000Z

