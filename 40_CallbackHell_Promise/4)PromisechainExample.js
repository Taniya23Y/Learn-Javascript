const cart = [
  {
    itemName: "shoes",
    price: 1000,
  },
  {
    itemName: "pant",
    price: 1000,
  },
  {
    itemName: "kurta",
    price: 2000,
  },
  {
    itemName: "jeans",
    price: 2000,
  },
];

let balance = 30000; // initial amount in the bank account.

// createOrder,
// proceedToPayment,
// showOrderSummary,
// updateWallet

// async api for above four methods of ecommerce

// createOrder(cart);
// proceedToPayment(orderId);
// showOrderSummary(orderId);
// updateWallet(orderId);

// const promise = createOrder(cart);

createOrder(cart)
  .then(function (orderId) {
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (balance) {
    return updateWallet(balance);
  })
  .then(function (resBalance) {
    console.log(resBalance.balance);
  })
  .catch(function err() {
    console.log(err.message);
  });

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

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      resolve({
        paymentStatus: true,
        message: "Payment Successful!",
      });
    } else {
      reject(new Error("Payment Failed!"));
    }
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    if (paymentInfo.paymentStatus) {
      resolve({
        status: "success",
        order: "cart",
      });
    } else {
      reject(new Error("Something went wrong"));
    }
  });
}

function updateWallet(history) {
  return new Promise(function (resolve, reject) {
    if (history) {
      if (history.status == "success") {
        let amount = 5000;
        balance = balance - amount;
        resolve({
          balance: balance,
          message: "Updated Balance",
        });
      }
    } else {
      reject(new Error("wallet not updated"));
    }
  });
}

function validateCart(cart) {
  return true;
}

//------------------------------------------------------------------------------------------------


const cart1 = ['shoes', 'pants', 'kurta'];

createOrder(cart1)
  .then(function(orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function(orderID) {
    return proceedToPayment(orderID)
  })
  .then(function({ message, amt }) {
    console.log(message, 'of amount:', amt);
    return showOrderSummary(message, amt);
  })
  .then(function({ message, amt }) {
    console.log('Your wallet has been debited by:', amt);
  })
  .catch(function(err) {
    console.log(err.message);
  })
  .then(function() {
    console.log('No matter what happens, I will get executed');
  });



function createOrder(cart1) {
  const pr = new Promise(function(resolve, reject) {
    // create order
    // Validate Cart
    // orderId
    if (!validateCart(cart1)) {
      const err = new Error('Cart is not valid!');
      reject(err);
    }
    // logic for createOrder
    const orderId = '12345';
    if (orderId) {
      setTimeout(function() {
        resolve(orderId);
      }, 5000)
    }
  });

  return pr;
}

function proceedToPayment(orderID) {
  // Logic for handling payment.
  // This function returns a promise
  return new Promise(function(resolve, reject) {
    // logic
    resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
  })
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function(resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
    } else {
      reject(new Error('Please buy more for discount'));
    }
  })
}

function validateCart(cart1) {
  // code to validate cart.
  return true;
  // return false;
}