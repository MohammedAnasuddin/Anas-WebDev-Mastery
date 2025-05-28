//. catch()

//> schedules a function to be called when the promise is rejected.
//> returns a new Promise


//> Syntax: .catch(onRejected(reason))

function dummy(){
    return new Promise((resolve,reject)=>{
        let i = 2;
        if(i>2){
            resolve("i is greater")
        }
        else{
            reject("Lesser value")
        }
    })
}

dummy()
.then((value)=>{
    console.log("I got selected: ",value)
})

.catch((reason)=>{
    console.log("I got Rejected: ",reason)
    
})

//Note: .catch() only handles the rejections of Promises above it in the chain

.then(()=>{

    //> something happen rejecting promise
    return Promise.reject("Rejection from Below .then()")
})

.catch(()=>{
    console.log("This rejection is handled by second .catch()")
})


//> throwing errors will call .catch()

dummy()
.then(()=>{
    return new Error("Hey checkout .catch()")
})

.catch((e)=>{
    console.log("I'm called because error is returned")
})