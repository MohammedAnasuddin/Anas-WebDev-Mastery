//. setTimeout()
//> method of the Window interface sets a timer 
//> which executes a function or specified piece of code once the timer expires.
//Note: SetTImeout Executes the callback asap after delay only if callback is empty

//> Syntax: setTimeout(funcRef,delay,param)
//- params are the values to the mentioned function Reference

setTimeout(()=>{
    console.log("parameter from setTimeout: ",param)
},0, param="I'm beside delay")
// parameter from setTimeout:  I'm beside delay

//. delay parameter
//> By default 0 and should only be a Number, which represents milliseconds
//> Any other Datatype used, it will be converted to 0 (i.e, immediate execution no delay)
//- fact: delay is 32-bit Integer hence max delay possible is 24.8 days

//Note: The delay of execution won't be exactly as mentioned in parameter they might be latency 
        //> 1. After every 5 nested setTimeouts , browser will perform delay of 4 milliseconds
        //> 2. To reduce the load on background tabs a minimum delay is performed.
        //> 3. A delay is performed if the page is playing an audio.

//. Return value
    //> setTimeout() returns a unique id(a Number) knows as "timeout ID"
    //- using timeout ID we can cancel the timer by passing it clearTimeout(id)
    //Note: The above in Browser, in NodeJS it returns a object
    const timeoutId =setTimeout(function (){},3000)
    console.log("timeout Id:",timeoutId); 

//. Asynchronous Nature
//> setTimeout() function will not pause execution of other functions in the functions stack.
//> setTimeout() cannot be used to create a pause. 


//. What if delay is set to 0ms
console.log("First")

setTimeout(() => {
    console.log("Second from Timeout")
    
}, 0);

console.log("Third")

/* 
> Output
First
Third
Second from Timeout
*/

// - The callback of setTimeout will only execute if callStack is empty 
//> Here even though delay is 0ms the callback is added to queue and next line is executed. 