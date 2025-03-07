//. map
//> Creates a new array from the returned values by the callback function which is called on every element of the array
//> Syntax: .map(callback_Function(element,index,array),thisArg)

const arr = [1,2,3,4]
let squares_arr = arr.map((e)=>{
    return e*e
})
console.table(squares_arr)

//x map() skips empty slots

//TIp: Use .map() if you need new resultant array 
//> Otherwise use .forEach() to traverse the array
