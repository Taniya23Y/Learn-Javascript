const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (button){
   console.log(button);
   button.addEventListener("click",  function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'pink'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'aqua'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
    }
   })
})