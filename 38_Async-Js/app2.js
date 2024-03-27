const interval_1 = setInterval(function (){
    console.log("JS", Date.now());
}, 1000);
clearInterval(interval_1);

const sayDate = function (str){
    console.log(str ,"JS", Date.now());
}

const intervalId = setInterval(sayDate, 1000, "Hi");
clearInterval(intervalId);

//++++++++++++++++++++++++++++++++++++++++++++++++++++
let interval_var;
let myDate = new Date();
const startBtn = document.querySelector('#StartBtn').addEventListener('click', () => {
    interval_var = setInterval(function(){
    console.log('hello Tanu', myDate.toLocaleString());
    }, 3000);
});

const stopBtn = document.querySelector('#StopBtn').addEventListener('click', function(){
   clearInterval(interval_var);
   console.log('Stopped!');
})