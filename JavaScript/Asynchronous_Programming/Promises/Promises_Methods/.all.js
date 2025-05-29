
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


//. Promise.all()
//> Method that take array of promises as input and returns a single promise.
//> typically used when there are multiple related asynchronous tasks that the overall code relies on to work 
//> successfully — all of whom we want to fulfill before the code execution continues.

//- returned promise gets fulfilled  when all input promises are fulfilled 
//-     and receives a array of fulfilled values as result

///x returned gets rejected when anyone of the input promise gets rejected
    //x the result will be first rejection reason/error 

//> this behavior is known as fail-fast behavior

//> case-1: all promises are fulfilled:

Promise.all([f3s,f1s])
.then((result)=>{
    console.log(".all() resolve output: ",result)
})

.catch((reason)=>{
    console.log(".all() reject output: ",reason)
})


//> returns a array of fulfilled values
// .all() resolve output:  [ 'Fulfilled after 3s', 'Fulfilled after 1s' ]
//Note: the returned array contains fulfilled values as same order in the input array
//- Even though f1s is fulfilled first but its value is still second coz f1s is in second position in input array

//> case-2: first rejection

Promise.all([f3s,f1s,r1s,r3s])
.then((result)=>{
    console.log(".all() resolve output: ",result)
})

.catch((reason)=>{
    console.log("case-2: .all() reject output: ",reason)
})

// case-2: .all() reject output:  Rejected after 1.5s
//> At 1.5s , r1s gets rejected hence thats the final output

//Tip: Bypassing  rejection
//> to skip and treat rejection as normal in .all 
//- catch and return the reason/error in the input array itself
//> the error will be treated as fulfilled value in returned result

Promise.all([f1s,f3s,r1s.catch((reason)=> reason)])
.then((result)=>{
    console.log("bypassing a rejection: ",result)
})
//[ 'Fulfilled after 1s', 'Fulfilled after 3s', 'Rejected after 1.5s' ]
//> rejection value is with fulfilled value(i.e, skipped the rejection)
// 
.catch((reason)=>{
    console.log("As you can see .all selected second rejection: ",reason)
})
    