//. Promise.allSettled()
//> method takes an iterable of promises as input and returns a single Promise

//> typically used when you have multiple asynchronous tasks that are not 
//> dependent on one another to complete successfully, 
//> or you'd always like to know the result of each promise.

//- Returns  a Object having each promise_status and result  


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



Promise.allSettled([f1s,f3s,r1s,r3s])
.then((result)=>{
    console.log("Resultant Object: ",result)
})

/* 
Resultant Object:  [
  { status: 'fulfilled', value: 'Fulfilled after 1s' },
  { status: 'fulfilled', value: 'Fulfilled after 3s' },
  { status: 'rejected', reason: 'Rejected after 1.5s' },
  { status: 'rejected', reason: 'Rejected after 3s' }
]
*/