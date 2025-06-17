//. JSON.stringify(obj,replacer,space)
//> converts a JS Value to a JSON_string.

//Note:  Non-enumerable properties will not be considered in the final string

let num =123
let json_string= JSON.stringify(num);
console.log(`json_string: ${json_string} type: ${typeof json_string}`); 

let user_obj={
    id:"1223",
    user_name:"Anas",
    email:"example@gmail.com",
    password:"example@1234"   
}

//. Replacer parameter
//> It can be a function or an Array of Keys
    //> As a Function:
        //> It can alter the stringification process
        //> takes two parameter (key, value)
        //Note: It will only traverse ENUMERABLE and OWN properties of the Object
        let user_json_string = JSON.stringify(user_obj,(key,value)=>{
            if(key==='password'){
                value=' '
                return value
            }
            return value
        })

        console.log("user_json_string: ",user_json_string) //"password":" "
        
        //. As an Array
        //> Properties whose keys mentioned in the array will be considered in the final string
        let user_json_string_arr = JSON.stringify(user_obj,["user_name","id"])
        console.log("user_json_string_arr: ",user_json_string_arr) //"password":" "
        //{"user_name":"Anas","id":"1223"} 
        //> Password has not been considered in final string.

//. space parameter
//> Controls the spacing of the final string at every level.
//> can be a number or string:
        //> As a number:
            //> This number represents no. of a spaces to indent for the level
        //> As a string: this string is used to ident the final string.
    //Note: The limit  is 1<=limit<=10 ie number can be from 1 to 1 and and string lengh also from 1 to 10       
//Tip: use number as 2 for dev and 4 for docs

let nested_obj = {
    key_1:"value_1",
    user: {
    id:"1223",
    user_name:"Anas",
    email:"example@gmail.com",
    password:"example@1234" ,
    nested_user: {
    id:"1223",
    user_name:"Anas",
    email:"example@gmail.com",
    password:"example@1234"   
}
} 
}

let space_1 = JSON.stringify(nested_obj,null,1);
console.log(space_1);
console.log("using space as 10: ")
let space_10 = JSON.stringify(nested_obj,null,10);

console.log(space_10)

let space_string = JSON.stringify(nested_obj,null,"||||x") //Tally marks
//x Characters in space parameter is not recommended since they violate JSON grammar and cannot be parsed.
console.log(space_string)

//. Dealing with non-compatible values
//> JSON compatible values : strings, numbers, true, false, null, arrays, or another JSON object.

    //. 1. BigInt values throws TypeError
    //. 2. undefined and functions: 
            //> These values are omitted if there they properties of an Object
            //> The values become "null" if they are elements of an Array.
            //Tip: TO remove a property set its value to undefined using replacer

            let demo_obj = {
                "key_1":undefined,
                "key_2":function(){},
                "key_3":"Try removing me",
                "key_4":"All the above will be remove"
            }
            const demo_json_str= JSON.stringify(demo_obj,(key,value)=>{
                if(key=="key_3"){
                    value=undefined;
                    return value;
                }
                return value;
            }, 2)

            console.log("undefined and function output: ",demo_json_str);
            //Only property with "key_4" logs
    
    //. JS Special Number values: Infinity , NaN,:
            //> These are modified to null but never deleted
            const num_special = {
                k1:Infinity,
                k2:NaN,
                k3:1234
            }
            const num_special_str= JSON.stringify(num_special,null,2)
            console.log("Special num_values: ", num_special_str)
            // k1 and k2 has got null but they are removed


//Note: If an object has a .toJSON() method, 
// Note: JSON.stringify() calls that method first to get the value to stringify.

const special_obj = {
    toJSON: function(){
        return "Hello, This object will not be a String"
    }
}

const special_str = JSON.stringify(special_obj,null,2);
console.log(special_str)