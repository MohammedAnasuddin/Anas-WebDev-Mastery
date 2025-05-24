function fetchuserdata(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({name:"Anas",id:124})
        },6000)
    })
}

// fetchuserdata
// .then()



// or


async function getUserData(){

    try{
        console.log("Fetching user data...")
        const userData= await fetchuserdata();
        console.log("Userdata: ",userData)
    } catch(e){
        console.log("Error: ",e)
    }
}

getUserData() 