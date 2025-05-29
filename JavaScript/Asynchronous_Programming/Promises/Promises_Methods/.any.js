

const f1s = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Fulfilled after 1s")
    }, 1000);
})

const f3s = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Fulfilled after 3s")
    }, 3000);
})

const r1s = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Rejected after 1.5s")
    }, 1500);
})


const r3s = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Rejected after 3s")
    }, 3000);
})

//. Promise.any()
//> returns a promise with first fulfilled 
//x if all promises fail returns a Aggregator Error
//Note: Aggregator Error: Array of reason/errors of rejected promises

Promise.any([r1s,r3s,f1s,f3s])
.then((result)=>{
    console.log("First Fulfilled: ",result)
})
// First Fulfilled:  Fulfilled after 1s (f1s)



//. when every promise is rejected
Promise.any([r1s,r3s])
.catch((error)=>{
    console.log(error)
})

/* [AggregateError: All promises were rejected] {
  [errors]: [ 'Rejected after 1.5s', 'Rejected after 3s' ]
} */