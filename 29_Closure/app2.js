//setTimeout + Closure Interview Questions

function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    },1000);
}
x(); // after 1 sec it prints value of i is 1

//------------------------------------------------------
function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    },1000);
    console.log("heyy!!");
}
x();

/* Answer is: 
   heyy!!
   1 // after 1 sec it prints 1
*/

//----------------------------------------------
// To print in the console 1 2 3 4 5 after each and every sec

function x(){
    // var i = 1;
    for(let i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        },i*1000); 
        // console.log(i);
    }
    console.log("heyy!!");
}
x();

// second approach:
function x(){
   for(var i = 1; i <= 5; i++){
       function close(i){
            setTimeout(function(){
                console.log(i);
            },i*1000); 
        }
        close(i);
   }
}
x();