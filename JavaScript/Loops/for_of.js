//. for-of js
//> Used to iterate on a iterable object
//>Iterable Objects: such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections)

let user_name = 'user1234'
for( let character of user_name){
    console.log(character);
    
}
//> Iterator can be const if it's not reassigned in the statements again 
//- i.e, a new variable is created for every iteration



//Note: Syntax similar to for-in
//> for-in allows continue and break


for(let char of user_name){
  if(char == 'u'){
    continue;
  }
  if(char=='1'){
    break
  }
  console.log(char)
  //- only ser in new lines will be printed
}

//. Asynchronous operations in for-of

async function printFor2s(char){
setInterval('2000')
console.log(char)
}

for(let item of user_name){
 await setTimeout( async ()=>{
  console.log(item)
 },2000);
}
