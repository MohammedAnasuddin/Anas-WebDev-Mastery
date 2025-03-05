//. Mutating Methods
//> Some methods creates a new array raher than working upon array called on.

//> They create shallow copies(same values with different references) and perform their respective Operations
//> these are known as Non-Mutating Methods


//. Converting Mutating to Non-Mutating
//Tip : use when we to store store the result of Mutating Method without
// Tip:changing the original array
    
    //. 1 Slicing
    //- Slice the complete array and then apply NM function
    let arr = [1,2,3,4]
    let arr_2 = arr.slice()
    arr_2.pop()
    console.table(arr)
    console.table(arr_2)

    //. 2. Using Spread Operator 
    let arr_3 = [...arr]
    console.table(arr_3)