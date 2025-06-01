//Tip: Learn about Execution Context
// Tip: https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/

checkOne()
// checkTwo()
function checkOne(){
console.log("One Executed");

}

let checkTwo = function (){
console.log("Two Executed");

}

//. What's the difference between these two
//- When direct declaration is encountered whole function is stored in Memory Part in creation phase
//- where as checkTwo is initialized with a variable it gets stored as undefined

//x Function hoisting only works with function declarations — not with function expressions.


//. Arrays and Objects in functions
//> functions could change the value of array and objects

let array = ['one','two','three']
let obj = {
    1: 1,
    2: 2
}

console.log(`Before -> array[0]:${array[0]} and obj.2 = ${obj[2]} ` ) // array[0]:one and obj.2 = 2 
demo(array,obj)
function demo(arr,obj){
    arr[0] = '1'
    obj[2] = 'two'
}
console.log(`After -> array[0]:${array[0]} and obj.2 = ${obj[2]} ` ) //array[0]:1 and obj.2 = two
//> Values got changed

//. Functions as Objects
//> In JS, functions are themselves objects.(first-class objects)
//> they have method likes .call() and .apply()

//. call(obj)
//> used to pass object as a parameter and access properties using this[property]
function call_func(){
console.log(this[1])
}
call_func.call(obj)

//. apply(thisArg, array)
//> used to pass array as an parameter 

function apply_array(thisArg,array){
  array.forEach((e)=>{
    console.log(`Hello ${e}`)
    
  })
}


apply_array(null, [1,2,3,4,5]);

//. Immediately Invoked Function Expression
//>  JavaScript function runs as soon as it is defined. 
//> It is also known as a self-executing anonymous function.

//> Syntax: Function enclosed in the parenthesis ( ) and immediately called
/* 
>Step by step Syntax:
    1. (       )
    2. function-> ( function demo(){
                                
                        }   )
    3. Immediate Call  .........()

    Tip: You can pass the arguments during call 
    x Not a good practice to pass arguments in IIFE

    - make sure that line before IIFE has a semi colon other wise ASI will concatenate IIFE with the previous statement
*/

(function noCall(){
    console.log("IIFE: I have executed at my definition itself")
})()



//. function vs method
//> function: which can be called on its own
//> method:  a function which is called on a object