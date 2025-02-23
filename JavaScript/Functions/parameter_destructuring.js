//.Destructuring
//> Destructuring in JavaScript is used to unpack or segregate values from arrays or properties from object literals into distinct variables

const arr = [1,2]
let [a,b] = arr
console.log(`a: ${a} b: ${b} `)


//. Parameter Destructuring
//. Passing an an Array
let array = [1,2,3,4]
function pd_one([one,two,three,four]){
    console.log(`a:${one} b:${two} c:${three} d:${four} `)
}

pd_one(array) //a: 1 b: 2 c: 3 d: 4
//- The array elements unpacked into independent variables

//Note: These are postioned senstive
let wrong_array = [1,4,2,3]
pd_one(wrong_array) //a: 1 b: 4 c: 2 d: 3 

//Tip: TO skip a array element just leave a comma spearated blank space
function pd_skip([one,two, ,four]){
    console.log(`a:${one} b:${two}  d:${four} `)

}

pd_skip(array) //a:1 b:2  d:4 


//. Object
let obj_1= {
    "one":1,
    "two":2,
    "three":3,
}

function pd_obj_one({one:a,two:b,three:c}){
    console.log(`a:${a} b:${b} c:${c}`)
}
//Note: It's reverse assignment taker on right giver on left
//>Syntax: value_to_pass(property): parameter_of_function 
//Tip: Think like what do you want: where do you want to store it


pd_obj_one(obj_1)

let nested_obj ={
    one:1,
    two: {
        decimal: 2,
        binary: 10
    },
    three:{
        decimal: 3,
        binary: 11
    }
}

function pd_obj_nested({ one: binary_one , two:{binary: binary_two}}){
    console.log(`binary_one: ${binary_one} binary_two: ${binary_two}`)
}
//> Syntax For Nested Objects: proprty: {nested_property: parameter}

pd_obj_nested(nested_obj)

//. Returns from a function
function pd_return(){
    return{
        name: "user",
        type: "Guest",
        mail: "123@gmail.com"
    }
}

let {type: user_status} = pd_return();
console.log(user_status);
