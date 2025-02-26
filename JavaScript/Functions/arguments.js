//. Arguments
//> values passed during function call

//. Positional Arguments
//> Values should be passed in exact order as defined at function declaration
function args_one(first,second){
    console.log(`first:${first} second:${second}`)
}

args_one(1,2) //first:1 second:2
args_one(2,1) //first:2 second:1
//> this is wrong not the expected output

