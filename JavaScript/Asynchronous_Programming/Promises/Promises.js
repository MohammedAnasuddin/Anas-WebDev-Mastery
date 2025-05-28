//. Promises
//> def: object representing  the completion or failure of an event of an asynchronous operation
//> The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error).
//> used to handle async operations

//> When either of these options occur, the associated handlers queued up by a promise's then method are called.
//- passing callbacks are not a reliable way 
const cart = ["shoes","pants","kurta"]

// const promise = createOrder(cart) //creates a orderId
// //>promise: returns a object with empty data for now,
// //>         After a time, this object is updated with the value


// //> Once the data is updated we can proceed to next operation
// //> By attaching a callback to promise object
// //- Hence, terminating the Inversion of Control

// promise.then( function(){
//     proceedToPayment(orderId)
// })


//. Exploring Promise Object
// const url = "https://api.restful-api.dev/objects"

// const user = fetch(url);
//fetch returns a promise(i.e, object)

//> Two components of Promise
//> PromiseState: Represent the current state of Promise(pending,fulfilled,rejected)
//> PromiseResult: 
// console.log(user) 

//> Logs pending but the PromiseState of PromiseObject is fulfilled how?
//- console logs the state at the moment of execution where as the PromiseState in object represents the final state hence the difference
//x this only happens in chrome console


//> Promise Object are immutable i.e, the PromiseResult can't be changed once assigned


//. Promise Chaining
//> The promise methods then(), catch(), and finally() are used to associate further action with a promise that becomes settled.
//- Always return the promises in .then() to pass it next .then()


//. Creating Promises


function createOrder(cart){

   const pr = new Promise(function(resolve,reject){

    if(cart.length<=0){
        const err = new Error("Cart cannot be Empty")
        reject(err);
    }
    else{
        setTimeout(() => {
            const orderID = "23erdpfgdhjvldcvn2e"
            resolve(orderID);
        }, 5000);
    }
   });
   return pr;
}


function proceedToPayment(orderId){
    return 2000;
}

function generateReceipt(amount){
    console.log(`Total Amount: ${amount}. Thanks for Shopping with us`)
    //> The amount is undefined in log since
    //- since it was not returned in the previous .then() 
}


 


const carts = [1,3]

const promise = createOrder(carts)


.then(function(ordId){
    let amount = proceedToPayment(ordId)
    return amount;
})

.then(function(bill_amount){
    generateReceipt(bill_amount);
})

.catch(function(err){
    console.log("Sorry,Something went wrong on our side",err)
})
.finally(()=> console.log("Do visit again"))


//> .catch(): only handles the errors occurring in .then() top of it in chain.
//> .then() below the .catch()  will definitely be called no matter what