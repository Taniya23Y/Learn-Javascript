//* Debouncing in JavaScript is a technique for reducing the frequency of function calls. 
//* When a function is debounced, it will only be called after a certain amount of time has 
//* passed since the last time it was called. This can be useful for preventing functions from being 
//* called too often, which can lead to performance problems.

//* For example, imagine you have a function that updates the search results on a website as the user types. 
//* If you call this function on every keystroke, it can cause the website to slow down. Instead, you can debounce 
//* the function so that it is only called after the user has stopped typing for a certain amount of time. This will 
//* improve the performance of the website and prevent it from becoming unresponsive.

// Debouncing in Javascript

let counter = 0;
const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data..", counter++);
}

const debounce = function(fn, delay){
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            // getData.apply(context, arguments);
            fn.apply(context, args);
        }, delay)
    }
}
//* This function takes two arguments: the function to be debounced and the wait time in milliseconds. 
//* The wait time is the amount of time that must pass since the last time the function was called before it will be called again.
//* To use the debounce function, you simply pass the function that you want to debounce to it as the first argument. 
//* The second argument is the wait time in milliseconds.

const betterFunction = debounce(getData, 300);
//* This will ensure that the updateSearchResults function is only called after the user has stopped typing for at least 300 milliseconds.