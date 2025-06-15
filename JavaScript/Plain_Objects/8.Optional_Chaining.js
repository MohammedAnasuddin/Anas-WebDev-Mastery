//. Optional Chaining( ?. )
//> If the object accessed or function called using this operator is undefined or null, 
//> it immediately returns undefined instead of throwing an error.

//- This provides implicit test, whether the property exists before accessing it.
//- Used when unsure of the data received or function to call.

let obj={
    key_1: "value_1"
}
//x Can't apply ?. on 
    //> 1. Assignment:  Assigning new values while accessing properties with ?. is not possible
                        // obj?.key_1 = "value_one"; //x SyntaxError
    
    //> 2. Chaining with `Template Literals`:
                        // console.log(obj?.`key_1`); //x SyntaxError
    
    //> 3. using "new" keyword: 
                        // let new_one = new obj?.console //x SyntaxError