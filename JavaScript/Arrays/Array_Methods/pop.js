//. .pop()
//> Removes the last element and returns it

let positions = ['first','second','last']
console.log("Last Element is:",positions.pop())

console.table(positions) //Removed the last element

//Tip: To get the last element without changing the orginal array
let last_element = positions.slice().pop()
console.log("Last Element: ",last_element); //second
console.table(positions) //Removed the last element
//- But second still exists in the original array

