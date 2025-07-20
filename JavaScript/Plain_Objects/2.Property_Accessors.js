//. Properties
//> property is a member of an object that associates a key with a value.

//. Components of a Property: 
    //. key:
        //> A string literal used to identify a property.
        //Note: JS internally treats all the key as String literals, even if we don;t specify under the " " .
        //- If any other type(boolean,number) is ues as key, they are directly coerced to string.
        //x If multiple keys exist with same , the value is overwritten to value of last occurred property
    
     //. value:
        //> data or a function the property holds
        //- If a property holds a function as a value it known as a "METHOD"
    
    //. attributes:
        //> specify how the property can be read and written.
        
  
    //- objects are sometimes called associative arrays — they map strings to values 
    //> in the same way that arrays map numbers to values.
            let obj = {
                      Key_1:"value_1",
                      Key_2:"value_2",
                      Key_3:"value_3",
                      // Key_3:"value_03",
                  }
                  console.table(obj)
//.Accessing Properties
        //Tip: Think of an object as an associative array (a.k.a. map, dictionary, hash, lookup table). 
        //Tip: The indexes in this array are the keys of the object's properties. 
    
    //. dot notation
    //> Syntax: Object.property_Key
    //> Get's the value of the property of specified key

    //. bracket notation: Array like access
    //> Syntax: Object[expression]
    //> Passing expressions that evaluate to property key 
    //> will do the same thing as directly passing the property key as String.
    
    //Tip : You can have a space between Object [key]
    console.log("Space is allowed: ",obj ["Key_1"]) 

    //Tip: SUe this when the key of an property is incorrect indentifier
    //> for example if key is @type , JS will throw error 
    //- so use .["@type"] toa cess the property without error.
    
    //Note: Using expression can cause 
    //
    //Note: beware of using square brackets to access properties 
    //x whose keys are given by external input. 
    //x This may make your code open to object injection attacks.
    //Refer: https://github.com/eslint-community/eslint-plugin-security/tree/main/docs
    //the-dangers-of-square-brackets

//. Creating Properties using Property Descriptor
    //> Use Object.defineProperty(source_obj,'key',propDescriptor)
    //Note: if property with same key exists it gets overwritten by new value
        
        //.property Descriptor
            //> attributes that define how a property of an object behaves. 
            //> They provide a way to control the characteristics of a property
                  //. Attributes Include:
                    //> 1, value: data or function associated with the property.
                    //> 2. writable: boolean, which indicates a property value can be changed or not.
                    //> 3. enumerable: boolean , which indicates whether the property is counted(considered) in Object properties or not.
                                        //Note: Check out Traversing Properties 
                    //> 4. configurable: boolean indicating whether attributes(other than value and writable) of an properties can be changed or not
                                        //> Also decides whether a property can be deleted or not.
                                        //Note: Checkout Deleting_Objects.js 
            
                Object.defineProperty(obj,'descriptor',{
                    value:"I'm, Created using descriptor",
                    writable: false,
                    enumerable: true,
                    configurable: true
                })

                console.table(obj) // property with key 'descriptor has been added
                //Trying to change the property
                // obj.descriptor = 'Hello' 
                //x Error: Cannot assign to read only property 'descriptor' of object '#<Object>'
                
