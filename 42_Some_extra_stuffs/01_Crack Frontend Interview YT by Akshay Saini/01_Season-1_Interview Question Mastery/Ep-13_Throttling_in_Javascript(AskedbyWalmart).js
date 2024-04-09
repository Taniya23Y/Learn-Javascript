// Throttling
//* Our Own Throttling function
const expensive = () => {
  console.log("Express"); 
}
// suppose this function call is been made on resize event window
window.addEventListener("resize", expensive);
window.addEventListener("resize", betterExpensive);

// ⬆️ Explanation: what happens is, on each and every resize event this method expensive is called multiple times

const betterExpensive = throttleFunc(expensive, limit);
    // console.log('Better expensive');

const throttleFunc = (func, limit) => {
    let flag = true;
    // this throttleFunc will return a function again
    return function(){
        let context = this;
        args = arguments;
        if(flag){
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
              flag = true;
            }, limit)
        }      
    }

};

/**
 * In JavaScript, functions have access to a special object called this, 
 * which refers to the context in which the function is called. Similarly, 
 * the arguments object contains all the arguments passed to the function when it's invoked.
  
 * In the line let context = this; args = arguments;, the this keyword refers to the context 
 * in which the throttleFunc function is being called. Inside throttleFunc, this would typically 
 * refer to the context of where throttleFunc itself is invoked. However, since throttleFunc is an 
 * arrow function (() => { ... }), it doesn't have its own this context. Instead, it inherits the this context 
 * from its surrounding scope, which is usually the global scope or the context of the function enclosing it.

 So, let context = this; captures that context. This ensures that when the throttled function (func) is eventually called, it will have the correct context.

 * Similarly, args = arguments; captures all the arguments passed to the throttled function when it's invoked. 
 * This ensures that the throttled function (func) receives the correct arguments when it's called.

*/