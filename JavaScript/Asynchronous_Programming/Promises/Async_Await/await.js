//. await in js
//> turns attached expression into a promise
//> pauses the execution of the surroundings until attached promise is settled.
//> await returns the promise result.

//- returns the value if resoled or throws the error if rejected

//Note: await is valid only in 2 spots
    //>1. Inside a async function
        //- await pauses the execution of the function, regular function cannot be paused.
    //>2. At top level of module( so as to export and import asynchronous code)

function toss(call){
    
 let flip = Math.random(0,2)
        flip = Math.round(flip)
   
    if(flip==call){

        return 'toss won'
    }
    else{
      return new Error("Lost. Better luck next time")  
    } 
}

    async function demo(){
        console.log("demo in action")
        let call = Math.random(0,2)
        call = Math.round(call)
        const result = await toss(call)
        console.log(result)
    }
demo()
//> Here, await converts toss() into a Promise 

//- whenever await is encountered the code control returns to the caller function and proceeds
//- when the promise attached gets settled the control returns backs to await

console.log("The control was given to caller demo() I'm next to the caller hence got executed")