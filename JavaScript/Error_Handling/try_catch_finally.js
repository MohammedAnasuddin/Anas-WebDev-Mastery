//. try-catch-finally
//> These are the Exception control mechanisms 
//Note: These are blocks they can oly be used using {}

//. new stuff about try-catch
//- If there was no try-catch blocks the program will search in upper scope
//> If not found , the program gets terminated

//> hence try-catch helps in handling the exceptions without terminating the program

//- Every try should have it's own catch or finally block

//> If any statement within the try block 
// - (or in a function called from within the try block) throws an exception, 
//> control is immediately shifted to the catch block.

try{
    throwError()
}
catch(e){
    console.log("Error occurred inside the function called in try")
}

function throwError(){
    throw new Error();
}


//. finally without a catch
//> If a Exception occurred in try-finally block, the exception is thrown after the execution of finally block


//x  bad idea to have control flow statements in the finally block. Only use it for cleanup code.

//> Return value of finally block is return value of overall try-catch-finally block
//> Any return value from try-catch is overwritten by the return value of finally block.

//. Asynchronous code
//> Async Exception can aso be handled by try-catch block, while using async-await
//> Or else can use .catch()  as well.