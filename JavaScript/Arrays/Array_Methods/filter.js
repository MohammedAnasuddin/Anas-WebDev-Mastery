//. filter()
//. Creates a new array with elements passed the condition in the callback function
//Note: callback function should return a boolean ie, it return statement should be a condition

//Note: The elements are added by evaluating condition based on truthy or falsy value

//> Syntax: .filter(callback_Function(element,index,array),thisArg)

const nums = [1,2,3,4,5,6,7,8,9]
let even_nums = nums.filter(function (e){ 
                                        return e%2==0
                                    })
console.table(even_nums)

//> filter() does not change the source array
console.table(nums)

//x filter() skips the empty slots
