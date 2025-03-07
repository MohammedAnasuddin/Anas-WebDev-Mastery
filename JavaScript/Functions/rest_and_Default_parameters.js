//. Parameters 
//> Values passed in to the function during its declaration
//- If no value is associated with the parameter during the call then default value is undefined

function parameter_One(a,b){
    console.log(a);
    console.log(b); //undefined
}
parameter_One(2)

//Tip: Earlier parameters can be used in defining later parameters
function parameter_Two(a, b=2*a){
    console.log(a, b)
}

parameter_Two(3)// 3 6


//. Default Parameters
//> T solve above problem default parameters are used ,
//> where a default value is used if no value is passed to the parameter
//> syntax: (parameter1 = default_value1, ....,parameterN = default_valueN)

function parameter_default(a,b=2){
    console.log(a*b)
}

parameter_default(2) //2 , b is 2
parameter_default(2,3) //6, b is 3

//x default parameters cannot be assigned with await operations
//- Because the default parameter is evaluated when the function is called not at definition

//. Rest Parameters
//> allows a function to accept an indefinite(non-specified) number of arguments as an array
//> Syntax: ... (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within an Array object.

function rest_parameters_one(...restOfthem){
console.log(restOfthem)
}

rest_parameters_one(1,2,3) // [ 1, 2, 3 ]  
rest_parameters_one(1,2,3,4,5) //[ 1, 2, 3, 4, 5 ]

//> Conditions of rest parameters:
    /*
    - a function can only have single rest parameter
    Tip: rest parameters should be last 
    x They can have default value and trailing commas
    
    */
//> rest_parameters create the Array consisting the parameters and all the array operations are possible on this array

function rest_parameters_two(...restOfThem){
    console.log("Rest Parameters Count: ",restOfThem.length)
    console.log("Rest Parameters Indexing[0]: ",restOfThem[0])
    restOfThem.forEach((fruit)=>{
        console.log(fruit);
        
    })
}
rest_parameters_two("Apple","Mango","Kiwi")