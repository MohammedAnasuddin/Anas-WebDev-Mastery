
//. Types of Properties:
    //. Enumerable: 
        //> Properties which shows up when the Object is looped.
        //- A property is enumerable if its "enumerable" attribute is set to "true"
        
        //. Checking a property is enumerable or not.
        //> Use Object.propertyIsEnumerable("property_key")
        //Note: Object.propertyIsEnumerable("property_key") only checks for Object's OWN Properties.
    
    //. Own properties:
        //>  properties that belong directly to the object itself, not inherited from its prototype chain.


//. Traversing Objects:
    //. 1. using Object.keys, Object.values, Object.entries
    //> Returns the properties, keys as an array
    //> Object.entries returns a Array containing all the properties as Individual 2-element Array
    //> Eg: [[key_1,value_1], [key_2,value_2], ... , [key_N,value_N]]
    //Note: These methods only traverse over Enumerable Properties which are own to the object.
    
    let source_obj={
        'source_prop: ': "source_prop: I'm from source"
    }
    
    Object.defineProperty(source_obj,'src_no_loop',{
        enumerable: false
    })

    let own_obj = Object.create(source_obj)
    own_obj.own_prop= "own_prop: I'm the Object's Own property"
    Object.defineProperty(own_obj,"non_loop",{
        enumerable: false
    })

    console.table(Object.keys(own_obj))
    console.table(Object.values(own_obj))
    console.table(Object.entries(own_obj))

    //>In all 3 logs only own_prop gets logged 
    //x non-enumerable(non_loop) and non-own(source_prop) does not considered in the array.

 //. for-in Loop:
    //> Loops over all the enumerable(loopable) properties of an Objecct
    //Note: Also Loops over non-own(inherited) enumerable properties as well

    console.log("Looping using for-in")
    for(let key in own_obj){
        console.log(`${key}: ${own_obj[key]}` );
    }
    //> Only "own_prop"(enumerable property of own_obj) and "source_prop"(enumerable property of source_obj)
    //> has logged  i.,e both current and source object are considered
    //x non_loop, src_no_loop has not logged since they are not enumerable.

//. To get Both Enumerable and NOn-Enumerable properties of an Object:
    //> use Reflect.ownKeys(obj)
    //> Returns an array of keys of all properties.
    console.table(Reflect.ownKeys(source_obj))
    //> All the keys of the source_obj are printed.