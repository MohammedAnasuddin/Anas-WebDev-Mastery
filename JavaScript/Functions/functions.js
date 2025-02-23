//Tip: Learn about Execution Context
// Tip: https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/

checkOne()
checkTwo()
function checkOne(){
console.log("One Executed");

}

let checkTwo = function (){
console.log("Two Executed");

}

//. What's the difference between these two
//- When direct declaration is encountered whole function is stored in Memory Part in creation phase
//- where as checkTwo is initialized with a variable it gets stored as undefined