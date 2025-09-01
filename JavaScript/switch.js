//. switch
//> evaluates an expression, matching the expression's value against a series of
//>  case clauses, and executes statements after the first case clause 
//> with a matching value, until a break statement is encountered.
//Note: Executes the statements from first matched case until a break statement.

switch("1"){
    case 1:
        console.log("It's a Number");
    case "1":
        console.log("It's a String");
    case true:
        console.log("It's a Boolean");  
}

//Note: Why didn't JS converted "1" to Number 1 for matching case 1
//- Switch uses strict equality operator === hence it checks for data types as well.


//. Same Cases in switch
    //>if a match is already found, subsequent case clause expressions will not be 
    //> evaluated
switch("1"){
 case "1":
    console.log("First");
    break;
 case "1":
    console.log("Second");
    
}
//- Here Expected output should First and Second since they both match the condition 
//- but only first matched case is executed.


//. Fall -Through
//> When the switch statement finds this first case that matches the expression,
//>  it does a fall-through where it runs the remaining cases after the matched case

//Note: To avoid fall through use break statement

switch(1){
    case 0:
        console.log("0");
    case 1:
        console.log("1") //> No break fall-through occurs
    case 2:
         console.log("2") 
         break;          //> break execution stops here
    default:
        console.log("Number") 
        
}

//Note: If there are no break statements even default will execute
switch(1){
    case 1:
        console.log("1")
    default:
        console.log("In default since no break");
        
}


//. default
//> If no match is found, execution will start from the default clause, 
//> and execute all statements after that.

switch(false){
    case 1:
        console.log("1");
    default: 
        console.log("Working with default");
    case false:
        console.log("I'm after default and still executed due to fall-through")
                
}

//- Default can be positioned anywhere in the switch-case

//. Scopes in switch
//> all the variables declared in the cases are created with respect to the 
//> scope of switch body

try {

    switch (1) {
        case 1:
            let message = "Hello"
            console.log("First case");
            case 2:
            let message ="Hi"
            console.log("Second case");
            break;
    }
} catch() {
    console.log("Error: Varaible already exists in the switch scope")
}

//- To avoid these define each case there own scopes using {}
switch (1) {
    case 1:{
        let message = "Hello"
        console.log("First case");
    }
        case 2:{
            let message ="Hi"
            console.log("Second case");
        }
}