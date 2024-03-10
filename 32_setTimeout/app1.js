// setTimeout()

//*   call Stack        Example:-                                 Web API's
//*                 _________________________________            windows:- 
//*    |     |     |   console.log("Start")          |         (1) setTimeout()
//*    |     |     |   setTimeout(function cb(){     |         (2) DOM API's
//*    |     |     |        console.log("Callback"); |         (3) fetch()
//*    |     |     |   }, 5000);                     |         (4) console
//*    |     |     |                                 |         
//*    |     |     |   console.log("End");           |         
//*    | GEC |     |_________________________________|
//*    |_____|
//*            _____________
//*           |             |
//*           |  Event Loop |
//*           |_____________|
//*                                     CallBack Queue:-       
//*                                    ___________________________________________
//*                                   |                                           |
//*                                   |     _____                                 |
//*                                   |    | cb  |                                |
//*                                   |    |_____|                                |    
//*                                   |                                           |
//*                                   |___________________________________________|


// Code demonstration of the setTimeout delay
console.log("Start");

setTimeout(function cb() {
    console.log("CallBack1");
}, 5000);

console.log("End");

//* Answer:- Start End 

// Million codes
// this while loop is waiting for 10secs

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate <= startDate+10000) {
  endDate = new Date().getTime();
}

console.log("while expires");

//* Answer:- Start End while expires CallBack

// Discussion about setTimeout(0):-delaying a function with zero milliseconds

console.log("Start");

setTimeout(function cb0() {
    console.log("CallBack2");
}, 0);

console.log("End");

//* Answer:- Start End CallBack

//Differ

console.log("Start!!!!!");

function differ(){
    console.log("CallBack");
}
differ();

setTimeout(function differ(){
    console.log("CallBack3");
}, 0);

console.log("End!!!");

/*
//* Final Answers is:-
      Start
      End
      while expires
      Start
      End
      Start!!!!!
      CallBack
      End!!!
      CallBack1
      CallBack2
      CallBack3
*/
