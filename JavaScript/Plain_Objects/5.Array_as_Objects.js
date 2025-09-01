//. Array os Objects:
//> Arrays are special type of Object which uses 
//> numeric_keys(indexes) to get values(Elements)
//> also updates the property "length" as elements are added/removed.

let arr = [0,1,2,3]
/*
. Internally it looks like 
arr={
    0:0,
    1:1,
    2:2,
    3:3,
    length: 4
} 
*/

arr['four'] = 4;
console.table(arr); //> property with key 'four' gets added.


console.log("New Length: ",arr.length); //4 


