//. push()
//> To insert an value as last element in the array
//> Syntax: Array_name.push(element1,...,elementN)
//Note: .push() returns the new length of array after inserting the value


//. Merging two arrays using .push
//- Array_first.push(... Array_second)

let a = [1,2]

console.log(a.push(3));

let b = [4,5]
a.push(...b)
console.log("New Merged array:",a);

