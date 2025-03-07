//. some
//> Used to check at least one value exist which satisfies the condition of the callback Function.
//> Return value: By default false, if an element passed the condition then immediately returns true 
//> Syntax: .some(callback_Function(element,index,array),thisArg)
let arr = [1,2,2,3]
let containsTwo = arr.some((e,i) =>{
                            console.log("Current Index:",i)
                            return e ==2
                                })
console.log(containsTwo); //true
//Note: function returned true and stopped after the first element passed the test
//- use some() as "there exists"

//x some() skips empty slots
