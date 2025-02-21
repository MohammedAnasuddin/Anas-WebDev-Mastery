//. forEach
//> Is a method to iterate over all the elements of an array
//> It's a Iterative method which calls the provided function for each element in ascending order
//Note: forEach always returns undefined

//> Syntax:
//> .forEach(function(element,index,array))


let arr = ["one","two","three","four"];

//. Arguments of function in  .forEach()

//> element : .forEach(function(element)) 
    //> Passes the current element as argument
    arr.forEach(function(element){
        console.log("Current element: ",element)
    })

//> index : .forEach(function(_,index))
    arr.forEach(function(index){
        console.log("Current index: ",index)
    })
    //- this prints the elements rather than indexes since index is passed as a first argument

    //x The parameters are position sensitive should be passed at respective position

    //- correct usage
    //Tip: To skip arguments use placeholder variable _
    arr.forEach(function(_,index){
        console.log("Current index: ",index)
    })

//> array: .forEach(function(_,_,array)):
    //Tip: use when you want to use other elements of the array 

    arr.forEach(function(_,index,array){
       console.log("Current Element: ",array[index]," Next Element: ",array[++index])
    })


//. Using External Functions and Asynchronous functions
    //x No arguments should be used while calling 
    //- Use them at function declaration
    //x .forEach() does not wait for promises or async functions
    //Note: Uncomment the code and execute to observe

    try{
        arr.forEach(waitFor2s());
    } catch(error){
        console.log("Error: ",error);
        
    }

    // async function waitFor2s(element){
    //     setTimeout('20000');
    //     console.log("Element: ",element)
    // }

//. Empty elements
//> .forEach skips the empty elements 
let array = [1,2, ,4,5]
array.forEach((element) => {
    console.log(element)
    //- Skips the third element 
})