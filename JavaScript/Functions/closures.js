//. Closures 
//> A closure in JavaScript is created when a function is defined within another function.

//> It allows the inner function to access the variables and parameters of the outer function, even after the outer function has finished executing.

function greet(name){
    let welcoming = "Hello"

    return function inner_function(){
        console.log(welcoming,name);
        
    }
}


//> Call the Outer_function
let outer_function = greet('Anas')
console.log(outer_function)  //[Function: inner_function]
//> this variable has reference to inner_function

//- Here execution of outer_function is complete and it's context is erased.

//> Now Calling inner_function using the variable
outer_function() //Hello Anas

//> How the output is Hello Anas the values of the outer_function,
//> outer_function context is already erased on line 21.

//Tip: Here a closure is formed where the inner_function can access the outer_function varibles even after outer_function
//Tip : finished executing.

