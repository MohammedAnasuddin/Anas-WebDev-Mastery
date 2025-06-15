//. Spread Operator ....
//> Used to distribute the elements of a iterable object into individual values.
//Note: Many objects are not iterable, including all plain objects that lack a Symbol.iterator method
//> 

let num = [1,2]
//> Add the missing numbers upto 6.


//. 1. Method 0ne : Using array
let missing_num_array = [3,4,5,6]
let method_1 =num.slice()
method_1.push(missing_num_array) 
console.log(method_1)
//- This created a multi dimensional array adding missing_number as whole array 

//> The output is [ 1, 2, [ 3, 4, 5, 6 ]

//- To solve this use ...
//> Syntax :  [... iterable_object]
let method_2 = num.slice()
method_2.push(...missing_num_array)
console.log(method_2)

// [ 1, 2, 3, 4, 5, 6 ]
//- Here the elements of iterable object are added as individual values. 
//Tip: Used to distribute and then used as parameters


//. Creating Shallow Copies
let original = [1,2,3]
let copy = original //> Share he same memory reference
copy.push(4) //- This adds in the source array as well 
console.log(original)  // [ 1, 2, 3, 4 ]  

let copy_2 = [...original] //x Does not share the same memory
copy_2.push(5) //- only inserted in copy_2 array 
console.log(original)  // [ 1, 2, 3, 4 ]  
console.log(copy_2)  // [ 1, 2, 3, 4, 5 ]  

//. Adding elements based on conditions

let even_nums_1 = [2,4,...(6%2==0)? [6] : []]
console.log(even_nums_1); //[ 2, 4, 6 ]
//Note: Use  values in [] and then spread it other wise it will throw error

let even_nums_2 = [2,4,...(5%2==0)? [6] : []]
console.log(even_nums_2); [ 2, 4 ]

