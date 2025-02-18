//. for
//> Executes a block of code until the conditions gets false
//Note: Use when you want to have control over looping

//> Syntax:
/*
> for(initialization; condition; afterIteration){
>   Statements;
> }

Note: initialization and afterIteration is optional
*/

//. components of for
//> Initialization: this can be any statement
let loop = true
for(console.log("First Loop"); loop;){
    loop = false
}

//> condition: Mandatory component if not mentioned then default value is true
for(console.log("Checking Condition"); ;){
    console.log("I'm have executed because condition default value is true")
    break;
}