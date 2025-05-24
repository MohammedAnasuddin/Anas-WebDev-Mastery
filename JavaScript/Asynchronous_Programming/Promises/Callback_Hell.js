 //> Time,Tide and JS waits for none

 //. Waiting for a operation 
 //> 1. wrap operation in callback 
 //> 2. pass it to settimeout
 
 console.time("start")

 console.timeLog("start"," Waiting for operations") //0.192 ms
 
 function cb(){
     console.timeLog("start"," Printed after 5 Seconds using Callback") 
     //> The output was 5.032s
    //x .032s extra milliseconds due to timer creation
 }
 setTimeout(cb, 5000);
 //> setTimeout executes the callback passed after the delay mentioned


 const cart = ['shoes','kurta','pants']
 //> First order is made then payment is made there exist a dependency 
 //> first order should be completed then payment
 //- ie. there is a direct dependency and order between functions

  createOrder( cart, function () {
    
 

     proceedToPayment( function(){

            orderSummary( function(){

                        updateWallet()
                    })
        } )
 })



//> Here you go you have made a callback hell
//- Condition were code starts growing horizontally rather than vertically
//- Though to maintain


//. Issue-2: Inversion of Control
createOrder( cart, function () {
     proceedToPayment()
})

//> Consider this snippet,
//> createOrder() function has total control over payment method
//> It can use it (call it) whenever and however it need
//- If there exist a bug in createOrder() it affects the payment method
//- Example: Payment is asked twice since  createOrder() has called payment twice 