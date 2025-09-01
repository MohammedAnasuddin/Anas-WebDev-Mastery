//. Objects(key-value)
//> JavaScript object is a data-type that can store multiple data in key-value pairs.
//> A collection of key-value pairs used to store and manage data in JavaScript.

//. Creating a Object:
    //. 1. using Object Literals:
        //> All the key-value pairs are wrapped using { } and each key-value pair is separated by "," comma.
        let obj_1 = {
            Key_1:"value_1",
            Key_2:"value_2",
            Key_3:"value_3",
        }
        console.log("obj_1 is a: ",typeof obj_1) //object
        //Note: Each key-value pair has ":" semicolon as a separator.
    
    //. using Object Instance
        //>Syntax: const new_object = new Object(existing_object)
        //> The Object() constructor turns the input into an object.
        //Note: Behavior depends upon input given: 
            //> 1. Input-> null or undefined: Returns an empty Object
            //> 2. Input-> object : Returns a Object.
        //Note: Object() can be called without new but it may work unexpectedly in some cases.

        const clone_obj = new Object(obj_1);
        console.log("clone_obj is a: ",typeof clone_obj) //object
        
        //> "clone_obj" has got all the properties of "obj_1"
        console.log(clone_obj.Key_2); //value_2
        
     //. using constructor functions
        
        function constructor_obj(){
            this.Key_1="value_1";
            this.Key_2="value_2";
            this.Key_3="value_3";
        }
        
        let demo_obj = new constructor_obj();
        console.log("demo_obj is a: ",typeof demo_obj) //object


    //. using Object.create()
        //> used to create new object by using other objects as prototype

        //> Syntax: Object.create(base_object,properties_Descriptors)
        let create_obj = Object.create(obj_1);

        //> "obj_1" is added to prototype of "create_obj"
        //> "create_obj" can use the properties of "obj_1"
        //- Hence Inheritance achieved.
        console.log("create_object is empty: ",create_obj) //{}
        console.log("but can create_obj.Key_1: ",create_obj.Key_1); //value_1 
        console.log("since my prototype is: ",create_obj.__proto__)

        //Note: Object.create() allows to pass new properties to the new Object 
        //- created using property descriptors
    
    //. using Object.assign()
        //> appends the properties from source_ObjectS to a single target_object
        //> then the target_object is returned
        //>Syntax: Object.assign(target,source1,....,sourceN)

        let obj_3 = {
            key_4:"value_4",
            key_5:"value_5",
            key_6:"value_6",
        }
        let obj_4 = {
            key_7:"value_7",
            key_8:"value_8",
            key_9:"value_9",
        }
        let target = Object.assign(obj_1,obj_3,obj_4)
        console.table(obj_1); 
        //> All the properties of "obj_3" and "obj_4" are appended to "obj_1"
        //Note: Properties in the target object are overwritten by properties in the sources if they have the same key.
        //Note: Only appends the Enumerable and Own Properties of the "source_objects" to the "target_object"

//. Storage of Object:
//> Objects (and arrays) are not copied — they are referenced.
//> Any modification in copy also reflects in original 