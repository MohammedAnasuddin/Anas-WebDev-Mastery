//. unshift()
//>  It inserts a new values at the beginning of the array
//Note: Unlike shift() which returns element unshift() returns the new length of array

//Tip: All the inserting methods return new length push() and unshift()
//Tip: All the deleting methods return deleted element like pop() and shift() 

//> Multiple values are inserted in the same order they are passed
let arr = [4,5,6]
arr.unshift(3,2,1)
console.table(arr)