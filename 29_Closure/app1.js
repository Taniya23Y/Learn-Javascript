//Closures=> closures basically means that a function bind together with its lexical environment.
// Function along with the lexical scope makes|forms a closure

// mdn Definition => 
/*
    A Closure is the combination of a function bundled together(enclosed) with references to its surrounding
    state(the lexical environment). In the other words, a closure gives you access to another function's scope 
    from an inner function. In js, closures are created every time a function is created, at function creation time.
*/

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
    // console.log(y());
}
x();
// console.log(x());

//Example-1 -> Grab the function y() and assign it to var a = 7;
function x(){
    var a = function y(){
        console.log(a);
    };

    y();
    // console.log(y());
}
x();
// console.log(x());

//Example-2 -> Grab the function y() and pass it into a function x() as a parameter.
function x(){
    var a = 7;
    y();
    // console.log(y());
}
x(function y(){
    console.log(a);
});
// console.log(x());

//Example-3 -> Grab the function y() and return y() function as a function().
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
    // console.log(y());
}
var z = x();
console.log(z); // f y(){clg(a);}
z(); // 7 

//Example-4
function x(){
    var a = 7;
    return function y(){
        console.log(a);
    }
}
x();

//-----------------------------------------
// corner cases:
// case-1 
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y; // remembers a reference to that variable not a value
}
var z = x();
console.log(z);
//........
z();// 100

//case: 2
function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y(); // remembers a reference to that variable not a value
    }
    x();
}
z();

//----------------------------------------
//Uses of Closures
/*
  --> Module Design Pattern
  --> Currying
  --> Function like Once
  --> memorize
  --> maintaining state in async world
  --> setTimeouts
  --> Iterators
  --> and many more!
*/