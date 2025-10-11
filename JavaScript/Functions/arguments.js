//. Arguments
//> values passed during function call

//. Arguments v/s Parameters
/*
Here's a quick mnemonic that might help:

- Parameters are **Placeholders**.
- Arguments are **Actual values**.
> So, when you are defining the function, you are setting up the placeholders (parameters). 

> When you are calling or invoking the function, you are providing the actual values (arguments).


*/


//. Positional Arguments
//> Values should be passed in exact order as defined at function declaration
function args_one(first,second){
    console.log(`first:${first} second:${second}`)
}

args_one(1,2) //first:1 second:2
args_one(2,1) //first:2 second:1
//> this is wrong not the expected output

