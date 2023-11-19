// Practice Question 
// Question 1) Create a traffic light system taht shows what to do based on color.
//      red = stop
//      yellow = slow down
//      green = go


let color = "green";
// traffic light system
if(color == "red"){
    console.log("stop");
}
if(color == "yellow"){
    console.log("show down");
}
if(color == "green"){
    console.log("Go");
}

// Question 2) Create a system to calculate popcorn prices based on the size customer asked for:
//      if size is'XL', price is Rs. 250
//      if size is'L', price is Rs. 200
//      if size is'M', price is Rs. 100
//      if size is'S', price is Rs. 50

let size = "XL";

if(size === "XL"){
   console.log("Price is Rs. 250");
} else if(size === "L"){
    console.log("Price is Rs. 200");
}else if(size === "M"){
    console.log("Price is Rs. 100");
}else{
    console.log("Price is Rs. 50");
}

// Question 3) A "good string" is a string that starts with the   letter 'a' & has a 
//          length>3. Wriet a program to find if a string is good or not.

let str = "apple";

if((str[0] === 'a') && (str.length > 3)){
    console.log("good string");
} else{
    console.log("Not a good string")
}

// Question 4) predict the output of following code
let num = 12;
if ((num%3 === 0) && ( (num+1 == 15) || (num-1 == 11) ) ) {
    console.log("safe");
} else {
    console.log("Unsafe");
}

// answer => safe

// Question 5) Use switch statement to print the day of the week using number variable 'day' with values 1 to 7.

let day = 10;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("thursday");
        break;

    case 5:
            console.log("Friday");
            break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("WrongDay");
}