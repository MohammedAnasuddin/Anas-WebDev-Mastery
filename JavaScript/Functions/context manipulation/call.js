//. func.call(context_holder)
//>  method allows you to call a function with a specified this value and arguments provided individually.
//Note: The first argument to call() sets the this value for the function being called, and the remaining arguments are passed to the function as arguments.

let obj = {
 key: 123
}

//> Suppose user has a public key and its object has the private key
function printID(obj,public_key){
    console.log("Public Key: ",public_key,"Private key from the Obj: ",this.key)
}

printID.call(obj,'4354'); 
//Public Key:  undefined Private key from the Obj:  123
