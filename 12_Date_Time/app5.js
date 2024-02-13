//=====================================================

// JavaScript Get Date Methods
// The new Date() Constructor
// In JavaScript, date objects are created with new Date().

// new Date() returns a date object with the current date and time.

// Get the Current Time
const date = new Date();
console.log(date);

//=====================================================

// Date Get Met

/*
              Method	            ||                Description
        --------------------------------------------------------------------------
              getFullYear()	        ||        Get year as a four digit number (yyyy)
              getMonth()	        ||        Get month as a number (0-11)
              getDate()	            ||        Get day as a number (1-31)
              getDay()	            ||        Get weekday as a number (0-6)
              getHours()	        ||        Get hour (0-23)
              getMinutes()	        ||        Get minute (0-59)
              getSeconds()	        ||        Get second (0-59)
              getMilliseconds()	    ||        Get millisecond (0-999)
              getTime()	            ||        Get time (milliseconds since January 1, 1970)
*/

/*
    Note 1**
        The get methods above return Local time.
        Universal time (UTC) is documented at the bottom of this page.
*/

/*
    Note 2***
        The get methods return information from existing date objects.
        In a date object, the time is static. The "clock" is not "running".
        The time in a date object is NOT the same as current time.
*/

// The getFullYear() Method
// The getFullYear() method returns the year of a date as a four digit number:


const myDate1 = new Date("2021-03-25");
console.log(myDate1.getFullYear()); // 2021

const myDate2 = new Date();
console.log(myDate2.getFullYear()); // 2023

/*
        Warning !
            Old JavaScript code might use the non-standard method getYear().
            getYear() is supposed to return a 2-digit year.
            getYear() is deprecated. Do not use it!
*/

//==========================================================

// The getMonth() Method
// The getMonth() method returns the month of a date as a number (0-11).

/*
        Note**** 
           In JavaScript, January is month number 0, February is number 1, ...
           Finally, December is month number 11.
*/

const myDate3 = new Date("2021-03-25");
myDate3.getMonth();
const myDate4 = new Date();
myDate4.getMonth();

/*
Note***
You can use an array of names to return the month as a name:
*/


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months);
const myDate5 = new Date("2021-03-25");
let month = months[myDate5.getMonth()];
console.log(`The month is ${month}`); // The month is March

const months1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month1 = months[d.getMonth()];
console.log(`The month is ${month1}`); // The month is February

//==================================================================

// The getDate() Method
// The getDate() method returns the day of a date as a number (1-31):

const myDate6 = new Date("2021-03-25");
console.log(myDate6.getDate()); // 25
const myDate7 = new Date();
console.log(myDate7.getDate()); // 12

//====================================================================

// The getHours() Method
// The getHours() method returns the hours of a date as a number (0-23):

const myDate8 = new Date("2021-03-25");
console.log(myDate8.getHours()); // 5
const myDate9 = new Date();
console.log(myDate9.getHours()); // 3

//====================================================================

//The getMinutes() Method
// The getMinutes() method returns the minutes of a date as a number (0-59):

const myDate10 = new Date("2021-03-25");
console.log(myDate10.getMinutes()); // 30
const myDate11 = new Date();
console.log(myDate11.getMinutes()); // 10

//====================================================================

//The getSeconds() Method
// The getSeconds() method returns the seconds of a date as a number (0-59):

const myDate12 = new Date("2021-03-25");
console.log(myDate12.getSeconds()); // 0
const myDate13 = new Date();
console.log(myDate13.getSeconds()); // 49

//====================================================================

// The getMilliseconds() Method
// The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

const myDate14 = new Date("2021-03-25");
console.log(myDate14.getMilliseconds()); // 0
const myDate15 = new Date();
console.log(myDate15.getMilliseconds()); // 356

//====================================================================

// The getDay() Method
// The getDay() method returns the weekday of a date as a number (0-6).

/*
Note
In JavaScript, the first day of the week (day 0) is Sunday.
Some countries in the world consider the first day of the week to be Monday.
*/

const myDate16 = new Date("2021-03-25");
console.log(myDate16.getDay()); // 4
const myDate17 = new Date();
console.log(myDate17.getDay()); // 1

/*
Note
You can use an array of names, and getDay() to return weekday as a name:
*/

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const myDate18 = new Date("2021-03-25");
let day = days[myDate18.getDay()];
const days1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(day); // Thursday

const my_Date = new Date();
let day1 = days[my_Date.getDay()];
console.log(day1); // Monday

//============================================================================

// The getDay() Method
// The getDay() method returns the weekday of a date as a number (0-6).

/*
Note
In JavaScript, the first day of the week (day 0) is Sunday.
Some countries in the world consider the first day of the week to be Monday.
*/


const myDate19 = new Date("2021-03-25");
myDate19.getDay()
const myDate20 = new Date();
myDate20.getDay()

/*
Note
You can use an array of names, and getDay() to return weekday as a name:
*/

const xDate = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const my_Date1 = new Date("2021-03-25");
let day2 = xDate[my_Date1.getDay()];
console.log(day2); // Thursday

const days2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const my_Date2 = new Date();
let day4 = xDate[my_Date2.getDay()];
console.log(day4); // Monday

//===============================================================================

//The getTime() Method
// The getTime() method returns the number of milliseconds since January 1, 1970:

const myDate21 = new Date("1970-01-01");
console.log(myDate21.getTime()); // 0
const myDate22 = new Date("2021-03-25");
console.log(myDate22.getTime()); //1616630400000
const myDate23 = new Date()
console.log(myDate23.getTime()); //1707688734594

//============================================================================

// The Date.now() Method
// Date.now() returns the number of milliseconds since January 1, 1970.

let ms = Date.now();
console.log(ms);   // 1707688734594
//Calculate the number of years since 1970/01/01:

const minute = 1000 * 60;
const hour = minute * 60;
const dayss = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);

// Date.now() is a static method of the Date object.

// You cannot use it on a date object like myDate.now().

// The syntax is always Date.now().

// UTC Date Get Methods

/*
            Method	              ||     Same As	Description
        -------------------------------------------------------------------------
            getUTCDate()	      ||        getDate()	 Returns the UTC date
            getUTCFullYear()	  ||        getFullYear()	Returns the UTC year
            getUTCMonth()	      ||        getMonth()	Returns the UTC month
            getUTCDay()	          ||        getDay()	Returns the UTC day
            getUTCHours()	      ||        getHours()	Returns the UTC hour
            getUTCMinutes()	      ||        getMinutes()	Returns the UTC minutes
            getUTCSeconds()	      ||        getSeconds()	Returns the UTC seconds
            getUTCMilliseconds()  ||	    getMilliseconds()	Returns the UTC milliseconds
UTC methods use UTC time (Coordinated Universal Time).
*/

// UTC time is the same as GMT (Greenwich Mean Time).

// The difference between Local time and UTC time can be up to 24 hours.

//===========================================================================

// The getTimezoneOffset() Method
// The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:

let diff = d.getTimezoneOffset();
console.log(diff);
