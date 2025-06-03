//. Error Object
//> Error objects are thrown when errors occur.
//> The Error object can also be used as a base object for user-defined exceptions.

//- JS provides ways to create Specific errors using their own constructors eg: SyntaxError() , TypeError(), etc





//. cause property:
    //> Includes the original error when throwing error
    //> helps us to understand the type of custom error
    //> Syntax: {cause: error_object}


    try{
        // hero
    }
    catch(e){
        throw new Error("I don't know what kind of error is thrown")
        // Error: I don't know what kind of error is thrown
    }


    try{
        // hero2
    }
    catch(e){
        throw new Error("Checkout the original error",{cause: e})
        // Error: Checkout the original error
        //> [cause]: ReferenceError: hero2 is not defined
    }
//. name property
//> used to access and manipulate title of the error
//> predefined errors have their own names like Syntaxerror , Reference Error
//> name can't be used during creation, should be assigned after error has been created

//. stack property
//> returns a stack tracing down the origins of the error.



//. Creating Our Own Error Object
//> use the constructor : Error()
//Note: Error() can be called with or without new
//- Since it can be called as Normal Function or a Constructor Function
//- there would be no difference in the output.

/* 
>    Syntax: Error("message",{
                > cause: OriginalError
                > })
*/


let my_error = new Error("Bhai Boldiye Error",{cause: ReferenceError()});
my_error.name = "Bhai ki Marzi"


try{
    throw my_error
}
catch(e){
   
}

