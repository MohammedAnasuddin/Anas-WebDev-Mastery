//. Array Object
let array_obj_new = new Array(1,2)
//> Creates and Initialize an array with the given parameters
//Tip: can also be created without using new new keyword
    //. Single Parameter
    //> If single parameter is passed , the parameter considered to be length
    //> Array will be created of that length with empty slots
    const array_obj_single = Array(2)
    console.log("Single Parameter Length: "+array_obj_single.length);
    
    //.Multiple Parameters
    //> THese Parameters are treated as elements and array is intialized with them
    const array_obj_multiple = Array(1,2,3,4,5)
    console.log("Multiple Parameter Length: "+array_obj_multiple.length);

//.Checking whether a Value is Array or Not?
//> use Array.isArray(Array_Name) to check passed value is array or not
        const a =10
        const b = Array(2)
        console.log("Is a array?: ",Array.isArray(a));
        console.log("Is b array?: ",Array.isArray(b));
        

//.Creating Array from set of existing values
    const c=3,d=4,e=4,f=5
    //> use Array.of(values,values) to create array from existing values
    let existing_array = Array.of(c,d,e,f)
        
        //.How its different from Array()??
            //>Single Parameter Handling
                const single_Array = Array(c) 
                //> This creates Array of length 3

                const Single_Array_of = Array.of(c)
                //> This creates array with element c

//. Array.from()
//> Creates a array from passed Map or Set

//. Array.fromAsync()
//> Creates an array from async Map or Set