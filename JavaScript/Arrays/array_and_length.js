//. Arrays
//> A object enables storing collection of values in a single variable.

    //. Resizable
    //> the length is dynamic, elements can be removed and added.
    //> If the index used by the operation on array exceeds current length
    //> then JS automatically extends the length property of the array according to the operation
    
    let array = [0,1,2,3]
    console.group("Increasing the length: ")
console.log(`Before Extending Length: ${array.length}`)
array[7] = 6
array[8] = 7

for(let i=0;i<array.length;i++){
    console.log(`array[${i}]: ${array[i]}`);
}
console.log(`After Extending Length: ${array.length}`)

//>JS Fills the array with empty slots

//. empty slots and undefined
//> empty slots does not exist in the memory.
    //> Where as undefined have memory.

    //Note: Why JS prints undefined for empty slots??
    //> JS treats the values without memory as undefined when used
    //> but does not store them like usual undefined values.

console.groupEnd("Increasing the length")


//. Decreasing the length
//>This truncates the elements which are beyond the new length
console.group("Decreasing the length:",)
console.log(`Before Decreasing Length: ${array.length}`)
array.length = 4
console.log(`After Decreasing Length: ${array.length}`)
for(let i=0;i<array.length;i++){
    console.log(`array[${i}]: ${array[i]}`);
}

//> All the elements after 4th element are removed.
