//. finally()
//>  schedules a function to be called when the promise is settled (either fulfilled or rejected)


//> Syntax: .finally(callback)

//> .finally's callback function don't have arguments(value/reason) 
//- So as to make it Independent of the Promise state
//> For example if error is passed as argument then what's difference between .finally() and .catch()




function toss(choice){ 

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



.then(    
(value)=>{
    console.log("✅ Toss WON -> Team Chooses to BAT ",value)
}
)

.catch(
    (reason)=>{
    console.error("❌ Toss LOST -> Team has to BOWL ",reason)
}
)

.finally(()=>{
    console.log("Who cares? I came to see MSD ")
})