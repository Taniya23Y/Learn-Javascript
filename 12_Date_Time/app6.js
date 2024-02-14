//============================================================
// javascript Date set method()
// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.


//============================================================
// Set Date Methods
// Set Date methods are used for setting a part of a date:
/*
          Method	       ||              Description
    ---------------------------------------------------------------------
        setDate()	       ||      Set the day as a number (1-31)
        setFullYear()	   ||      Set the year (optionally month and day)
        setHours()	       ||      Set the hour (0-23)
        setMilliseconds()  ||     Set the milliseconds (0-999)
        setMinutes()	   ||      Set the minutes (0-59)
        setMonth()	       ||      Set the month (0-11)
        setSeconds()	   ||      Set the seconds (0-59)
        setTime()	       ||      Set the time (milliseconds since January 1, 1970)

*/

// The setFullYear() Method
// The setFullYear() method sets the year of a date object. In this example to 2020:

const myD = new Date();
console.log((myD.setFullYear(2020))+" "+myD.toString()); // 1581695223255 Fri Feb 14 2020 21:17:03 GMT+0530 (India Standard Time)


// The setFullYear() method can optionally set month and day:

const myD2 = new Date();
console.log((myD2.setFullYear(2020, 11, 3))+" "+myD2.toString()); // 1607010489640 Thu Dec 03 2020 21:18:09 GMT+0530 (India Standard Time)

//============================================================

// The setMonth() Method
// The setMonth() method sets the month of a date object (0-11):

const myD3 = new Date();
console.log((myD3.setMonth(11))+" "+ myD3.toString()); // 1734191289640 Sat Dec 14 2024 21:18:09 GMT+0530 (India Standard Time)

//============================================================

// The setDate() Method
// The setDate() method sets the day of a date object (1-31):

const myD4 = new Date();
console.log((myD4.setDate(15))+" "+ myD4.toString()); // 1708012148635 Thu Feb 15 2024 21:19:08 GMT+0530 (India Standard Time)

// The setDate() method can also be used to add days to a date:

const myD5 = new Date();
console.log((myD5.setDate(myD5.getDate() + 50))+" "+ myD5.toString()); // 1712245748636 Thu Apr 04 2024 21:19:08 GMT+0530 (India Standard Time)

// If adding days shifts the month or year, the changes are handled automatically by the Date object.

//============================================================

// The setHours() Method
// The setHours() method sets the hours of a date object (0-23):

const my_D6 = new Date();
console.log((my_D6.setHours(22))+" "+my_D6.toString()); // 1707929393022 Wed Feb 14 2024 22:19:53 GMT+0530 (India Standard Time)
//============================================================

// The setMinutes() Method
// The setMinutes() method sets the minutes of a date object (0-59):

const my_D7 = new Date();
console.log((my_D7.setMinutes(30))+" "+my_D7.toString()); //1707926448623 Wed Feb 14 2024 21:30:48 GMT+0530 (India Standard Time)

//============================================================

// The setSeconds() Method
// The setSeconds() method sets the seconds of a date object (0-59):

const my_D8 = new Date();
console.log((my_D8.setSeconds(30))+" "+my_D8.toString()); // 1707925830623 Wed Feb 14 2024 21:20:30 GMT+0530 (India Standard Time)

//=============================================================

// Compare Dates
// Dates can easily be compared.

// The following example compares today's date with January 14, 2100:

let text = "";
const today = new Date();
const someday = new Date();
console.log((someday.setFullYear(2100, 0, 14))+" "+someday.toString()); // 4103625763552 Thu Jan 14 2100 21:32:43 GMT+0530 (India Standard Time)


if (someday > today) {
  text = "Today is before January 14, 2100.";
  console.log(text);
} else {
  text = "Today is after January 14, 2100.";
  console.log(text);
}

// answer is: Today is before January 14, 2100.