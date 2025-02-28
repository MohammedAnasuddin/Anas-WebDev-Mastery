//Tip: Refer this from misc to understand the below


//. Arrow Functions
//>Syntax:
/* 
>  () => {}
*/


//Tip: 
//- Parenthesis can be omiited if only single parameter
 let a = a=>{
    return a+5
 }
 console.log("Single Parameter: ",a);

 //-Flower brackets can be omitted if only single statement in the function body
 //-the result of single output is returned.

 a = (a) => a*a;
 console.log("Single body: ",a);

 //. Giving name to a Arrow Function
 //> Assign the function to a variable and use it
 //Tip: Use const for this variable since function declaration 
 //Tip: is not changed after declaration
 let arrow1 = ()=>{
    console.log("Hello Arrow");
    
 } 
 arrow1()


 //. Usage of arrow function
 //> Single line for one line functions
 //> To use functions without names
 //> To create IIFE


 //. Working with this in Arrow Functions

 //> Normal behaviour of this
 //- reperesents the object

 let obj_normal = {
    id:1,
    showThis: function(){
        console.log("Regular:",this.showThis);
        
    }
 }
 obj_normal.showThis();

 console.log(obj_normal.id.this)


//> Arrow functions inherit the context from surrounding scope
//Note: Surrounding Scope closest enclosing function that is NOT an arrow function.

let global_arrow = ()=>{
    console.log('Global Arrow: ',this);
    
}
global_arrow() //>Global Object

let obj_arrow_1 = {
    showThis:  ()=>{
            console.log("Arrow:",this)
        }
    
    }

    obj_arrow_1.showThis()

let obj_arrow_2 = {
    showThis: function(){
        const  arrowThis= ()=>{
            console.log("Surrounding Scope:",this)
        }
        arrowThis()
    
    }}

obj_arrow_2.showThis()