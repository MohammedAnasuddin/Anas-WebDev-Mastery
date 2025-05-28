//.then()
//> schedules a function to be called when the promise is fulfilled.

function toss(choice){ //> A Promise which have 50%-50% chance for resolve and reject

    return new Promise((success,failed)=>{
        console.log("Flipping the Coin.....")
        setTimeout(()=>{
             let decider = Math.random(0,2)
        decider = Math.round(decider);
        if(decider==choice){
            success(decider)
        }
        else{
            failed(decider)
        }
    },3000)
    
})
}


let choice = Math.random(0,2)
choice = Math.round(choice);
console.log("CAll: ",choice)
toss(choice)

//. .then() -> Resolved Promise Handler
//> stores callback for both cases resolved and rejected(optional)
//- Returns a new Promise, always pending regardless of parent promise during return.

//> Syntax: 
//>   .then(onFulfilled(value),onRejected(reason))
//Tip: Always handle rejections using .catch()

//. No Parameters in .then()
//- phir, the value is passed forward in the chain.
.then(()=>{
})


.then(    //> Returns a 2nd Promise handled by 2nd then
//- Success    
(value)=>{
    console.log("✅ Toss WON -> Team Chooses to BAT ",value)
    return Promise.resolve("BAT")
    //> Promise.resolve(value) -> to resolve the promise, the value i passed to success handler of the promise 
    //- Always return this methods 
    
    
    //x Failed
},
(reason)=>{
    console.error("❌ Toss LOST -> Team has to BOWL ",reason)
    return Promise.reject("BOWL")
    //> Promise.reject(reason) -> to reject the promise and pass the reason to failure handler 
    //- Always return this methods 
})


//> 2nd handler(Implementing using function keyword)
.then(
  function(value){ //> resolve
    console.log(`TEAM has to ${value}, Get the Openers`)
},
function(action){ //> reject
    console.log(`TEAM has to ${action}, Plan the fielding`)
  }

)

