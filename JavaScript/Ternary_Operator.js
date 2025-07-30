//. Ternary ? Operator
//> Single line alternative to if-else blocks
//> Syntax:  condition ? exprIfTrue : exprIfFalse
//Note: Conditions are evaluated based on Truthy and Falsy rules.

//Tip: Use this Initialize variables with a default when the required value is not available.

let user ={
    name:""
}
let user_name = user.name ? user.name : "Guest"
console.log("Current User: "+user_name); //Current User: Guest
//- Since user.name is empty string which is Falsy

let Bool_False = new Boolean(false);
console.log(Bool_False? "True": "False")
//> True since Bool_False is object which comes under Truthy values.

//. Ternary Chaining
//> condition-1 ? (condition-2 ? expIfCond2 : elseCond2) : expElseCOnd-1 

