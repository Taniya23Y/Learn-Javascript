// ===================================================================
//                   Date Methods()
// Date Methods
// When a date object is created, a number of methods allow you to operate on it.
// Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.


//    Displaying Dates
// JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone. The format is specified in the ECMAScript specification:

// Mon Feb 12 2024 00:09:25 GMT+0530 (India Standard Time)
// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.


const myDate = new Date();
console.log(myDate.toString());

// The toDateString() method converts a date to a more readable format:

const myDate2 = new Date();
console.log(myDate2.toDateString());

//The toUTCString() method converts a date to a string using the UTC standard:

const myDate3 = new Date();
console.log(myDate3.toUTCString());

// The toISOString() method converts a date to a string using the ISO standard:

const myDate4 = new Date();
console.log(myDate4.toISOString());
