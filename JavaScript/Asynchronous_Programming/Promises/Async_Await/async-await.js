//. async function

//> prefix function with async

//> always returns a promise
    //> wraps non-promise returned value with promise
    //> If promise is returned no wrap is performed

    console.time("pc")
const p = new Promise((resolve,reject)=>{
    console.timeLog("pc","Inside P")
    setTimeout(()=>{
        console.timeLog("pc"," P Resolved")
        resolve("Promise Resolved Value")
    },10000)
    
})

const q = new Promise((resolve,reject)=>{
    console.timeLog("pc","Inside Q")
    setTimeout(()=>{
        console.timeLog("pc","Q Resolved")
        resolve("Promise Resolved Value")
    },5000)

})

//. async-await
    //> used to handle promises
//. using traditional method

function getData(){
    p.then((result)=>{
        console.log("Traditional Result: ",result)
    })
    console.log("next log of Traditional Method")
    //> This log is printed i.e, this method has not waited until promise gets fulfilled
}

// getData()
 // next log of Traditional Method
// Traditional Result:  Promise Resolved Value
//> We thought JS will wait to until promise gets resolved. 

//. using await keyword
//Note: await can only be used inside an async function
    //Note: can only be used in-front of a Promise

async function await_handling(){
    // console.log("await-handling called")
    const val = await p;
    // console.log("Await result of P: ",val)
    console.timeLog("pc","P is awaited")
    const val2 = await q;
    // console.log("Await result of Q: ",val2)
    console.timeLog("pc","Q is awaited")
    

}

await_handling()
//Await result:  Promise Resolved Value
// next log of await-handling

//. Working of await 
//> waits for the attached promise to be resolved if pending 

//. Error handing in async-await
//> we don't have .catch() for await hence use try and catch