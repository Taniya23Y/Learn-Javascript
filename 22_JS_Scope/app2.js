function a() {
  //    console.log(b);
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

// var b = 10;
a();
// console.log(b); // b is not defined

/*
    whenever a global execution context is created a lexical environment
    is also created.
    
    lexical environment is the local memory along with the lexical environment of its parent
*/
