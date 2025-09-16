//. every()
//> The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. 
//> It returns a Boolean value.

//Note: filter returns the elements passing the condition, every returns the status 

//> Syntax
// array.every((element,index,array_itself) => {
//     if(condition){
//         return true
//     }
//     else{
//         return false
//     }
// })

//Note: It calls a provided callbackFn function once for each element in an array, 
//Note: until the callbackFn returns a falsy value. Iteration will stop

//> callbackFn is invoked only for array indexes which have assigned values. 
//x It is not invoked for empty slots in sparse arrays.
