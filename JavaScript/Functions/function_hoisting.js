
try{
    One()
    Two() //X Throws Error

}catch(error){
console.error("Can't call Assignment function before defining it")
}


function One(){
    console.log("No.1");
}

let Two = function (){
    console.log("No. 2");
}

//Tip: One can be called before defining the function as well where as two should be called after defining
//- This happens because of Function Hoisting
//- Hoisting : Moving declaration to the top of the scope
//> When One() is moved on top all the function body with initialization  is moved
//> where as for Two() only the variable Two moves at the top scope with an value of undefined 

Two()