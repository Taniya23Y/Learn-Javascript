// Ecommerce cart
const cart = ["shoe", "pant", "kurta"];

// api 
// These Two api are asynchronous and they are dependent on each order

createOrder(cart,function (orderId){
    proceedToPayment(orderId);    
}); // orderId

const promise = createOrder(cart);
// {data: undefined | ' '}
// after promise done then we have 
// {data: orderDetails}

promise.then(function (orderId){
    proceedToPayment(orderId);    
});

//-------------------------------------------------------
const GITHUB_API = 'https://api.github.com/users/askaymarch7'

const user = fetch(GITHUB_API);
console.log(user);
user.then(function(data){
    console.log(data );
})

//--------------------------------------------------------------
// QNA
//* what is promise:- Object as a placeholder for a certain period of time until we receive a value form a async operation
//* another one, a container for a future value

//* mdn docs definition:- A promise is an object representing the eventual completion or failure of a async operation. Since most people are consumers of already-created promise


//---------------------------------------------------------------
const cart2 =  ["shoe", "pant", "kurta"];
// create an order and then
// proceed to payment
// order summary
// update the wallet

createOrder(cart2,function (orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        })
    });    
}); // orderId

// showOrderSummary(paymentInfo);

// updateWalletBalance();

createOrder(cart)
.then(function (orderId){
    return proceedToPayment(orderId);    
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo); 
})
.then(function (paymentInfo){
    return updateWalletBalance(paymentInfo); 
})

// by arrow function
createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) =>  showOrderSummary(paymentInfo))
.then((paymentInfo) =>  updateWalletBalance(paymentInfo));    
