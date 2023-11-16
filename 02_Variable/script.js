// ctl + l = to clear browser console

// investigation

const accountId = 14453;
let accountEmail = "trip@gmail.com";
var accountPassword = "12345";
accountCity = "khargone"; // terminator is not neccessory to write but it is good practice.
let accountState;

// chalo change karte hain

// accountId = 2 // okay change to kar diya hai check karte hai change hua hai ya nahi

console.log(accountId);

accountEmail = "tc@tc.com";
accountPassword = "121212";
accountCity = "pune";

// now we need to check the above code in console.
// we don't need to wriet console.log() for each one 
// write console.table([list of parameters1,....,...]) instead of conosle.log()

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Note: Prefer not  to use var 
because of issue in code scope and function scope
*/






