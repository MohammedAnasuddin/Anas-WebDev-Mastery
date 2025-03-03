//. Accessing Elements of Array
//> Array is object , but it cannot be accessed as traditional objects using (.) dot operator

//>To access elements we need to use NON-NEGATIVE Indexes
//x JS does not support reverse accessing using -1,-2

//> Elements should be accessed using index ina bracket Notation[]
//> These indexes start from 0 and goes upto length-1

//. Working with indexes
let array = [0,1,2,3,4]
console.log("First Element: ",array[0])
console.log("Last Element: ",array[array.length-1])
//Tip: Indexes can be string as well
console.log("First Element with String Index: ",array['0'])



console.log(array['2'] == array['02']) //false
//>JS , implicitly converts given index integer into string to access the elements.
//- Hence 2 and 02 does not refer to the same element