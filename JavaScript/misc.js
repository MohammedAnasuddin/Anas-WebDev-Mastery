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
//Tip: start of the block until code execution reaches the place where the variable is declared and initialized.
{
    /*
    This is TDZ you cant access the variable here
    
    
    */
   let b4 = "Anas"
}

