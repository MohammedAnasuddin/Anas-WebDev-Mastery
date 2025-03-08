//> JS is prototype based programming language
//> THE OOPS of JS is a mask on th proto;type based programming 
//> created to help the dev for easy development

//> JS is OOPL but bts its Prototype based itself

//. Prototype mean extra properties and functionalities given for the data type
    //> Prototypes are the mechanism by which JavaScript objects inherit features from one another.
    //> Prototype are built-in properties  

//. Prototype Chain
    //> Prototype is a object it also have its own prototype properties make a prototype chain 
    //> the chain ends when a prototype object is reached with null as prototype property.
    //Note: Property of an object pointing to prototype properties of that object is not a prototype property
    //> Basic Sample Chain: My DT Variable->__proto__prototype Object of DT->__proto__->Object Prototype->__proto__null
    //- myArr[]->__proto__ Array -> __proto__ Object ->__proto__null

//. Accessing the properties
    //> On Accessing a property:
        //> 1. Initially searched  n the object itself
        //> 2. If not found , search in prototype of that object
        //> 3. Even not found , search in the prototype of prototype object
        //> 4. 2 and 3 are continued until end of property vhain
        //> 5. if property not found "undefined" is returned.

//Tip: To get all properties of a dt use dt_name and hit enter to list all prototypes 

//. Accessing the prototype
    //> uses Dunder (2 consecutive underscores) 
    //> Syntax: dt_name.__proto__
    let computer = {brand:"dell"}
    console.log("computer",computer.__proto__);
    //- NodeJS shows null to default prototype properties
    //- If a object linked it shows all the custom properties(Refer dell log below section)

//. Adding a prototype to a object
//> Syntax our_obj = Object.create(prototype)
let mac = Object.create(computer)
console.log("Custom added prototypes for mac:",Object.getPrototypeOf(mac))

//. Linking objects 
    //. Using Dunder __
    //x This is deprecated
    //> Syntax: __proto__:source_object
    let computer_1= {cpu:12,
        RAM:6}
        let dell = {model:13, 
            __proto__:computer_1}
            
            //> Now dell could access all the properties of computer
            console.log(dell.__proto__) //12 6
        
        //> Prototype is the medium through which properties are added in the objects
        //- Here prototype of dell access the prototype of computer
    
    //. Using setPrototypeOf()
    //> Syntax: Object.setPrototypeOf(obj,prototype)
    let source={id:"12344"}
    let obj = {model:13}
    Object.setPrototypeOf(obj,source)
    //Note: The first parameter should be object only it returns nothing if it's a Number , String
    //Note: prototype should be a Obj and can't be null
   let a =10
   Object.setPrototypeOf(a,source)
   console.log("Number setPrototype:",a.__proto__) //{}
   
    //.To access the prototype 
            //> Syntax: Object.getPrototypeOf(obj_name)
            //Note: parameter should be a object only
            console.log("obj's prototype",Object.getPrototypeOf(obj)); //{ id: '12344' }
            //- it only shows prototype properties 





//. To check for inherited property
    console.log(obj.hasOwnProperty('model')) //-true: it's is own specified property
    console.log(obj.hasOwnProperty('id')) //- false: Since it is inherited form source object 
            

//. Adding custom properties in prototype of a object
//> use obj.prototype.property = value
//Note: this only exist to constructors not instances
let demo = new Number(3)
//demo.prototype.toWord = function(){return 'three'} //x is wrong since demo is instance
//- use Number(Here Constructor) 

    //- if you just use Obj.prototype = new_obj  whole prototype is  changed and refernce constructor is lost
        let animal = function(){}
        console.log(animal.prototype.constructor);   //[Function: animal]
        let living_creature = function(){}
        animal.prototype = new living_creature()
        console.log(animal.prototype.constructor); ///[Function: living_creature]

    