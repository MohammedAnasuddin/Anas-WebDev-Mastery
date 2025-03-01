//. Callback Function
//>A callback function is a function that is passed as an argument to another function

function quote_generator(quote, author,printer){
    const final_quote = `"${quote}"`
    printer(final_quote,author)
}
function format_quote(quote,author){
    console.log(`${quote}
                - ${author}`)
}

quote_generator("If not now when","Eckhart Tolle",format_quote)

//. Working
    //>1. Callback function is passed as argument to the Caller Function
        //x Don't use () it will execute function here we are just passing

    //> 2. Supplying the required parameters in caller function while weare caliing callbacck function in Caller function
    
    
//Tip we could pass anonymous functions ass callback funcions in caler function