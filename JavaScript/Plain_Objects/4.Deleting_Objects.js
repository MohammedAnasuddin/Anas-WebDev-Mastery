//. Deleting Object Properties
//> used to remove a property from an object and returns a boolean.
//> Syntax: delete object.property_key
//Note: if property_key does not exist then no effect happens and returns true 

    //. conditions of delete
        //> 1. Only deletes OWN properties not Inherited
        //> 2. Non-configurable({configure: false}) properties cannot be deleted

let source = {
    source_prop: "I'm an Inherited property"
}
let obj = Object.create(source)
Object.defineProperty(obj,"can't_delete",{
    configurable: false
})

obj.own = "I'm an own property"



    // delete obj["can't_delete"] //x Type_EEror since "can't delete" is Non-configurable property
    console.log(delete obj.source_prop) //- true: since property_key does not exist hence does nothing and returns true
    console.table(Reflect.ownKeys(obj))


    //Note: You cannot delete any variable created using let/const/var

    // delete obj; //x SyntaxError

//. delete with array
//> Elements can be removed using delete but it creates a sparse array(empty slots)
let arr = [0,1,2,3,4]
delete arr[2];
console.log(arr)  //x [ 0, 1, <1 empty item>, 3, 4 ]
