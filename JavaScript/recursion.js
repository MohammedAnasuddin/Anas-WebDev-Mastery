//. Recursion
//. Components of Recursion
    //> function definition
    //> base condition
    //> recursive call

//> base condition is used to stop the recursion

function recursive(count){
    count--
    if(count == 0){
        console.log("Recursion ended");

    }
    else{
        console.log(count);
    
        recursive(count)
    }
   
}
recursive(5)



//. Not using a base condition
//> will result in infinite recursion and functions exceeds the maximum call stack

function recursionNoBase(){
    console.count("Called");
    recursionNoBase();
}
recursionNoBase();
//x RangeError: Maximum call stack size exceeded

//> Call Stack keeps track of what functions are currently running and the functions that are within them.
//> call stack has a limit.
/*
   > Node.js: 11034
    > Firefox: 50994
    > Chrome: 10402

    > To check for other engines run the below code
     function computeMaxCallStackSize() {
        try {
            return 1 + computeMaxCallStackSize();
        } catch (e) {
            // Call stack overflow
            return 1;
        }
    }

*/

//Tip: Properly handle the base condition to stop the recursion
function stopBase(count){
    if(count==0){
        console.log("Recursion Terminate");
    }
    console.count("Recursive")
    count--
    stopBase(count)
    //- this will execute even though count is 0 since  its outside the if 
}


stopBase(5)
