//. throw expression
//x throw keyword and expression should be on same line only

//> Execution of the current function will stop (the statements after throw won't be executed), 
//> and control will be passed to the first catch block

try{
    throw new Error("Missing variable",{cause: ReferenceError()})
    //> cause should be a constructor_function call
}
catch(e){
    console.log(e);
}