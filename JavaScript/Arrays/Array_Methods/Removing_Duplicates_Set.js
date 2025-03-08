//. Set() : to remove duplicates
let arr = [1,0,0,1,1]
let unique_elements = new Set(arr)

//x without new you cannot create a set

console.log(unique_elements);
//Set(2) { 1, 0 }

//. Convert set to array
    //. use Array.from
    let unique_array =  Array.from(unique_elements)
    console.table(unique_array)

    //. spread operator
    let unique_array_2 = [...unique_elements]
    console.table(unique_array_2)
