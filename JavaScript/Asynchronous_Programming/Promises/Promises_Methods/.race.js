//. Promise.race()
//> returns a single Promise with result being eventual state of the first promise in the iterable to settle

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


Promise.race([f1s,f3s,r1s,r3s])
.then((result)=>{
    console.log("1st Race: Who's first: ",result)
})

// 1st Race: Who's first:  Fulfilled after 1s

Promise.race([r1s,f3s,r3s])
.then((result)=>{
    console.log("2nd Race: Who's first: ",result)
})

.catch((reason)=>{
    console.log("2nd Race: Who's first: ",reason)
})

// 2nd Race: Who's first:  Rejected after 1.5s