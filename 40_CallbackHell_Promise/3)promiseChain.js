// Creating a own promise
// Error handling
// promise chaining

const cart = ["shoe", "pant", "kurta"];
/*
// consumer part
const promise = createOrder(cart); // async api and returns a orderId
console.log(promise);


promise
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(oderId);
  })

  // handling an error by catch()
  .catch(function (err) {
    console.log(err.message);
  });

*/

// more optimised code of above code
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
    // proceedToPayment(oderId);
  })
  .then(function (oderId) {
    return proceedToPayment(oderId);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo); 
  })
  // handling an error by catch()
  .catch(function (err) {
    console.log(err.message);
  });

///////////////////////////////
// Producer part
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // logic to create an order
    // validate Cart
    // order Id

    if (!validateCart(cart)) {
      const err = new Error("cart is not validate");
      reject(err);
    }
    // logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
      // resolve(orderId);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true; // promise res0lve
  //   return false; // promise reject
}

function proceedToPayment(oderId){
  return new Promise(function(resolve, reject){
    resolve("Payment Successful!")
  });
};

//--------------------------------------------------------------------
// Promise chaining by proceedToPayment()

