// Polyfill for bind method

// Polyfill is a browser fallback
//* A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
//* Polyfills are written in JavaScript and are typically used to implement new features in browsers that do not yet support them. They can also be used
//* to provide support for features that are not widely supported, such as those that are only available in a specific browser or version of a browser.
//* Polyfills are typically used by developers who want to use new features in their code without having to worry about whether or not the browser that
//* the user is using supports them. This can be especially important for developers who are working on web applications that need to be compatible with a wide range of browsers.

//* Here are some examples of polyfills:
//* 1). The Array.prototype.includes() method was added to JavaScript in ES6, but it is not supported by all browsers. A polyfill for this method can be used to provide support for it in older browsers.
//* 2). The Object.assign() method was also added to JavaScript in ES6, and it is not supported by all browsers. A polyfill for this method can be used to provide support for it in older browsers.
//* 3). The fetch() API is a new API that was added to JavaScript in ES6, and it is not supported by all browsers. A polyfill for this API can be used to provide support for it in older browsers.

let name = {
  firstname: "Taniya",
  lastName: "yadav",
};

let printName = function (homeTown, state, country) {
  console.log(
    this.firstname + " " + this.lastName + " " + homeTown + " " + state + " " + country
  );
};

// Task is to make own bind function
// But this is traditional bind function
let printMyName = printName.bind(name,"delhi","uttarakhand");
console.log(printMyName); // whole fnc
printMyName("India");

// our bind code
Function.prototype.myBind = function (...args) {
  let obj = this;
  // to handle the extra params
  params = args.slice(1);
  return function (...args2) {
    // printName();
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "delhi", "uttarakhand");
printMyName2("India");
