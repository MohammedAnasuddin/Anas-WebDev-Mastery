//. bind(thisContext,args)
//> returns a new function by connecting the context provided to teh function mentioned

let person={
 name:'Lorem'
}

function printname(){
    console.log(this.name)
}


let enhancedPintName = printname.bind(person)

enhancedPintName();
//> The new context attached function is referred as "bound function"