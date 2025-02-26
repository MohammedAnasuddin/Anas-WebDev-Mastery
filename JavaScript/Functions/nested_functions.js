//. Nested Functions

function outer(){
console.log("I'm Outer Function");
inner()
    function inner(){
        console.log("I'm Inner Function and can access over-variable");        
    }

}

outer()

//. Accessing values
//> inner functions can access outer function values 

function outer_math(a,b){
sum(a,b)
    function sum(){
        console.log("Result: ",a+b);
    }
}

let result= outer_math(2,3)

