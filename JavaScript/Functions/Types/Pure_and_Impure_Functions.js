//.Pure FUnctions
//> always returns the same output as given the same input parameters.

function sum(a,b){
    console.log(a+b);
}

sum(1,2) //3
sum(1,2) //3
sum(1,2) //3
//- OFr the same input the output is always same

//. Impure Functions
//> Impure functions are functions that can modify the state of the application or have side effects.
    //. Side Effects
     //> Side effect/leaking does happen when the function tries to utilize 
     //> any external code inside the function, which in turn, 
     //> impacts the ability of the function to perform
     //>  that specific task for which the function is built.

     let counter =0;

     function increment(num){
        counter++
        console.log(`input: ${num}: count: ${counter}`)
     }

     increment(1)  //input: 1: count: 1
     increment(4) //input: 4: count: 2
     increment(1) //input: 1: count: 3
     //- Offer the same input 1 the output is different in two cases
