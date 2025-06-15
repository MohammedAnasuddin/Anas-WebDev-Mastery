let obj = {
    key_1:"value_1",
    key_2:"value_2",
    key_3:"value_3",
}

let demo = {
    ... obj
}

console.log(demo)
demo.key_5 ="value_5"
//> Creates a shallow copy changes in copy_obj will not reflect in original_obj.
console.log(demo)
console.log("original: ",obj) // No, property with key "Key_5"

//. Conditionally adding properties
let complex_obj = {
    ... (1>0)? {key_1:"value_1"} : null,
    ... (1<0)? {key_2:"value_2"} : null
    
}

console.log("complex_obj: ",complex_obj) // Only key_ property is added

