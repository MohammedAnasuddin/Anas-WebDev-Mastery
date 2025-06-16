//. JSON.parse(valid_json_string,reviver)
///> parses a JSON string, constructing the JavaScript value or object described by the string
//- Parsing is the process of analyzing and converting data or text into a structured and usable format

//> Returns a JS obj 

const JSON_String =   `{
"key_1":"value_1",
"key_2":"value_2",
"key_3":"value_3",
"key_4":"value_4"
}`


const JSON_obj = JSON.parse(JSON_String);
console.log(JSON_obj);
console.log(`JSON_String: ${typeof JSON_String} JSON_Obj: ${typeof JSON_obj}`) // string object

//Note: If string is directly inserted , use single quotes to delimit the string
//- to avoid clashes with double quotes of a key in JSOn_string

let num = JSON.parse('{"num": 123}')
console.log(num,typeof num)

//Note: .parse any valid data which is supported by JSON
let name = JSON.parse('"Anas"')
console.log(name,typeof name) //Anas string
let arr = JSON.parse('[1,2,3]')
console.log(arr,typeof arr) //Anas string

//. Reviver Function
//> callback allows to transform(modifies) parsed values from JSOn_string before returning.
//> it loops over every key:value pair in the JSON_String.
//> Syntax: JSON.parse(json_string, (key,value) => {    })
//> named reviver since it get revives data to modify it.


    let user_string =  `{
"id":456562646,
"name": "Anas",
"email":"exmaple@gmial.com",
"password":"example@123"
}`


const user_obj = JSON.parse(user_string,(key,value)=>{

    //. used to modify the values
    if(key==="name"){
        return value.toUpperCase()
    }

    //. to Remove Properties ,filter
    //. assign undefined to value reviver function removes it final obj
    if(key=="password"){
        value=undefined 
        return value
    }

    return value;
    //Note: Only returned values will be considered in the final object
})

console.table(user_obj) // name     │ 'ANAS'  password │ ' '  