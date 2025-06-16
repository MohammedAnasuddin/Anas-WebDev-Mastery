//. Prevent Extensions
//> prevents new properties from ever being added to an object
//> It also prevents the object's prototype from being re-assigned.

//- An object is extensible if new properties can be added to it. 


//. Freezing Objects
//> An object is frozen if and only if it is not extensible.
//> Freezing an object prevents extensions and makes existing properties 
    //- non-writable {writable: false}  -> Properties values cannot be changed
    //- non-configurable {configurable: false} -> properties cannot be removed
    //- Property descriptors cannot be modified.
    //- Object's prototype cannot be re-assigned.
    //x Cannot Add or Remove Properties -> TypeError
//Note: Accessor Properties (getter and setters) and private_properties are not affected by Freezing  

//>Syntax: object.freeze(obj_name)
//Note: Returns the same obj does not the creates a copy.k

//Note: Nested Objects are not freezed if PArent object is freezed
let obj = {
    sub_obj:{
        key:"value"
    }
}

Object.freeze(obj);
//- To check for frozen objects use Object.isFrozen()
console.log("obj is frozen? ",Object.isFrozen(obj)) //true
console.log("sub_obj is frozen? ",Object.isFrozen(obj.sub_obj)) //false

obj.sub_obj.key="I'm not Frozen"
console.table(obj); // "I'm not Frozen" 

//. Sealing an Object
//>  Sealing an object prevents extensions and makes existing properties non-configurable.
//- but it allows updating values of existing properties 
    //> only the {configurable} attribute is set to false
    //- {writable} attribute is not modified , hence properties can be modified as long as {writable} is set to true
//Note: Everything else same like freeze you cannot add new or delete existing properties
//Note: You cannot change the prototype as well

let obj_2 ={
    key:"value"
}

Object.seal(obj_2);
//> To check: Object.isSealed(obj) 
//> Returns the original rather than a copy
obj_2.key="I'm updatable since seal allows it"
console.log("obj_2 is sealed? ",Object.isSealed(obj_2))  //true
console.table(obj_2)  // "I'm updatable since seal allows it"

 obj_2.key_2="value_2" //x TypeError
