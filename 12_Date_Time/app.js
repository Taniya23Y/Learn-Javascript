// +++++++++ Date AND Time ++++++++++++++

// Dates

let myDate = new Date();
console.log(myDate); // 2023-10-28T12:08:32.829Z
console.log(myDate.toString()); // Sat Oct 28 2023 17:39:07 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sat Oct 28 2023
console.log(myDate.toISOString()); // 2023-10-28T12:11:50.361Z
console.log(myDate.toLocaleDateString()); // 28/10/2023
console.log(myDate.toLocaleString()); // 28/10/2023, 5:41:50 pm

console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate); // 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreatDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatDate); // 2023-01-22T23:33:00.000Z
console.log(myCreatDate.toString()); // Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)

let myDates = new Date("2023-01-14");
console.log(myDates); // 2023-01-14T00:00:00.000Z

let Dates = new Date("01-14-2023");
console.log(Dates); // 2023-01-13T18:30:00.000Z

//+++++++++++++++++++++++++++++++++++++++++++++

// Times

// let myTimesStamp = new Date()
let myTimesStamp = Date.now();
console.log(myTimesStamp); // 1698495511733
console.log(myCreatedDate.getTime()); // 1674412200000
console.log(Date.now()); // 1698495633099
console.log(Date.now()/1000); // 1698495671.071 (Decimal values occurs)
console.log(Math.floor(Date.now()/1000)); // 1698495736


/////////////////////////////

let newDate = new Date();
console.log(newDate); // 2023-10-28T12:22:48.428Z
console.log(newDate.getDate()); // 28
console.log(newDate.getMilliseconds()); // 533
console.log(newDate.getMonth()); // 9
console.log(newDate.getDay()); // 6
console.log(newDate.getHours()); // 17
console.log(newDate.getFullYear()); // 2023
console.log(newDate.getSeconds()); // 15
console.log(newDate.getHours()); // 17

/// Suppose for full time

`${newDate.getDay()}`;
console.log(`${newDate.getDay()}`); // 6

newDate.toLocaleString('default', {
    weekday: "long"
});