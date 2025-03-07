//. slice()
//> Return a new array by extracting the elements between provided indexes
//> Syntax: .slice(start,end)

//Tip: Remember it as start: first index to start slicing and end: first index at which slicing should stop
//> Hence end is not considered in the output

let num_words = ['zero','one','two','three','four','five']
let first_two = num_words.slice(0,2)
console.log(first_two)


 
//. Indexing Criteria

//x start cannot be greater than length of array 
let nums = [0,1,2,3,4,5]
console.log(nums.slice(6)); // []

//- returns [] if start<end
console.log("s<e:",nums.slice(4,3)); // []


//. Working with negative indices
console.log(nums.slice(-2)); // [ 4, 5 ]
// -2 => 6+(-2)=4 slice(-2)== slice(4)
//> extracts all the elements from 4th index 

//. positive start , negative end
console.log(nums.slice(1,-3)); // [ 1, 2 ]
//> -3 : 6+(-3) 3 

//> Getting whole array from back
//> provide length in negative index
console.log(nums.slice(-7))



///NOte: slice() includes empty slots
let spaces = [,1,2, , , ,3]
console.log(spaces.slice(0,6));




