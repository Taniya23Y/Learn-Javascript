// Their are four Promise API's
//* (1) Promise.all()
//* (2) Promise.allSettled()
//* (3) Promise.race()
//* (4) Promise.any()

// Settled -> got the result
//   resolve | reject
//   success | failure
// fulfilled | rejected

//----------------------------------------------------------------------
//* (1) Promise.all()

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 success"), 1000);
  //   setTimeout(() => reject("P2 fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P3 success"), 2000);
  setTimeout(() => reject("P3 fail"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
//* for success // (3) ['P1 success', 'P2 success', 'P3 success']
//* for failure // P3 fail

//============================================================================

//* (2) Promise.allSettled()
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 3000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 success"), 1000);
  //   setTimeout(() => reject("P2 fail"), 1000);
});

const pr3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P3 success"), 2000);
  setTimeout(() => reject("P3 fail"), 2000);
});

Promise.allSettled([pr1, pr2, pr3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

/*  (3) [{…}, {…}, {…}]
        0: {status: 'fulfilled', value: 'P1 success'}
        1: {status: 'fulfilled', value: 'P2 success'}
        2: {status: 'rejected', reason: 'P3 fail'}
        length:3
        [[Prototype]]: Array(0)
*/

//====================================================================

//* (2) Promise.race()
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 success"), 5000);
  //   setTimeout(() => reject("P2 fail"), 1000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 success"), 2000);
//   setTimeout(() => reject("P3 fail"), 2000);
});

Promise.race([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// P3 success

//==========================================================================================
//* (4) Promise.any() will wait for first setteled success | first resolved setteled success

// what is aggregator in promise?
/*
    In promise, an aggregator is a tool that combines promises that 
    should resolve within a specific time. For example, the aggregate(cb)
    call wraps a function that returns a promise, and then aggregates all
    calls of that function until the function is either resolved or rejected.
    All calls of the wrapper function are resolved or rejected in the same way,
    with the same arguments as the wrapped function promise.
*/

const Promise1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 success"), 5000);
    setTimeout(() => reject("P1 success"), 5000);
  });
  
  const Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 success"), 5000);
    //   setTimeout(() => reject("P2 fail"), 1000);
  });
  
  const Promise3 = new Promise((resolve, reject) => {
      setTimeout(() => reject("P3 success"), 2000);
  //   setTimeout(() => reject("P3 fail"), 2000);
  });
  
  Promise.any([Promise1, Promise2, Promise3])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
      console.log(err.errors);
    });

// P1 success
// if all reject then an aggregrator Error caught
// 6)FourPromiseExample.js:124 AggregateError: All promises were rejected
