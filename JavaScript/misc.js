//. semi-colons;
//- In JS , ; are de-limiters used to indicate end of a statement

const hey = 'hey'
const you = 'hey'
const heyYou = hey + ' ' + you;

['h', 'e', 'y'].forEach((letter) => console.log(letter))

//> Above code will throw error due to missing semicolon

//> Pick some rules:

//> Be careful with return statements. If you return something, add it on the same line as the return (same for break, throw, continue)
//> Never start a line with parentheses, as those might be concatenated with the previous line to form a function call, or an array element reference

//. Hoisting
//> Hoisting is JavaScript's default behavior of moving declarations to the top.

//> let, const, and class as non-hoisting, because the temporal dead zone strictly forbids any use of the variable before its declaration.
//Tip: TDZ -> start of the block until code execution reaches the place where the variable is declared and initialized.
{
    /*
    This is TDZ you cant access the variable here
    
    
    */
   let b4 = "Anas"
}



//. Scope Chain
//> If a value is not found in current scope it will be searched in the parent scope
//> This is will continue until global scope.
//> If still not found throw a reference error 


{
//> Suppose this a block scope
let a = 'a'

{
    //> Parent Scope


    {
        //> Child Scope
        console.log(`I'm have logged a global variable '${a}' in a child scope`);   
    }
}


}



//. this
//>  refers to the context where a piece of code, such as a function's body, is supposed to run.
//> represents how function is connected to the context

//Note : .this values are:
    //> direct -> global object(browser: window, nodeJS: emptyObject])
    //> regular function-> object of the project.
  
  //Note:In non–strict mode, .this is always a reference to an object. In strict mode, it can be any value. 

//>The value of .this depends on in which context it appears: function, class, or global.
        //. In functions:
        //> value of .this depends on how the function is called.
        //> Regular functions: the value of .this is the object that the function is accessed on.
        //> Arrow functions differ in their handling of .this: they inherit .this from the parent scope at the time they are defined.