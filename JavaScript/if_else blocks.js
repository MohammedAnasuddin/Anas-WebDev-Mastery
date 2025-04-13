//. if-else Blocks
//Note: Here conditions refer to Statements. These can be any statement.

if(console.log("Im not a condition")){
    console.log("It's a statement but can be used condition")
    //> This does not execute since it does not come in truthy elements
    //- it returns undefined which is falsy
}



//> if: Executes the code block if the condition provided is truthy.
//> else: Executes the code block if the condition provided is falsy.

//> In JS, Truthy:  All values are truthy unless they are defined as falsy. falsy values includes false, 0, -0, 0n, "", null, undefined, NaN, and document.all.
//> Falsy: A false value.


//Tip: Boolean Object is always considered true even if its value is false.

let isFalseObject = new Boolean(false)

if(isFalseObject){
    console.log("isFalseObject: I'm Considered truthy because I'm object")
}



//. dangling else
//> The "dangling else" problem occurs in nested if statements where it's unclear to which if an else clause belongs.

//> In JS,  the else clause will be connected to the closest if clause.


let a =1 , b=2
if(a==1)
    console.log("a1")
    if(b==3)
        console.log("b3")
else
console.log("a!=1")

//> We assumed the first_if is associated to else
//> But JS associated else to second_if since it's close to it 
//Tip: always use block statements(use {}), especially in code involving nested if statements.
//> This is to avoid dangling else.



//. else if
//x there is no elseif (in one word) keyword in JavaScript.
//>To check for other condition if if fails
//Tip:  write it with a space between else and if:


//x You can assign values in the if condition but its better to avoid