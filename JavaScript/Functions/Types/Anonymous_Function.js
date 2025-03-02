//. Anonymous Function
//> A function without a name 
//> used to pass as arguments and create IIFE

//. IIFE
(function(){
    console.log("Hi I'm          , (I got no name)");
    
})()


const demo = ()=>{
    console.log("I support arrow functions");
    console.log("And can be stored in variable to call later");
    
}

//. Passing as Arguments
setTimeout( function(){
    console.log("Wait a second");
    
},1000)

console.log("I could be passed as argument just like in above setTimeout")
demo();



