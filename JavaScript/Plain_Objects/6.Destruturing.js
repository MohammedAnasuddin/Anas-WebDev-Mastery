//. Destructuring
//> used to unpack values from arrays, or properties from objects, into distinct variables.
//Note: If property/element does not exist, destructuring does not throw a Error ,this value becomes undefined

//. Destructuring Objects:
    //> Syntax: const/let { key_1:alias , key_2:alias} = source_obj
    //Note: { } are used to indicate we are unpacking from an Object 
    //x Destructuring always requires let.const or var
    //x we don't create a object here
    //Note: For Object Destructing, keys in { } should match the key in objects.
    //- alias can be used to create the new variables with custom name.
    

    let obj = {
        key_1:"property_1",
        sub_obj:{
            sub_key: "sub_property"
        }
    }

    let {key_1: prop_1 , sub_obj:{sub_key: prop_2} } = obj
    console.log(prop_1, prop_2);

    //> if a key holds a object as value it can be further destructured using { } on that key
    ///> Syntax: let/const { parent_key:alias, obj_key: {sub_key:alias}}

//. Array Destructing
    let arr = [1,2,3,4]
    //> Syntax: let/const [identifier_1, identifier_2] - array_name
    //Note: The position of Identifier represents the index.(Order sensitive)

    let [a,b]= arr
    console.log(a,b)
    //> TO skip a element jsut leave blank space
    let [, , c , d] = arr
    console.log(c,d)

    //. Destructuring Arrays oa Objects
    //> syntax: let/const {index: identifier } = arr
    let {0:zero} = arr
    console.log(zero);