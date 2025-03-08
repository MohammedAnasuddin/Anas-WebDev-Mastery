//> JS is prototype based programming language
//> THE OOPS of JS is a mask on th protype based programming 
//> created to help the dev for easy developement

//> JS is OOPL but bts its Prototype based itself

//. Prototype mean extra properties and functionalities given for the data type

//. Accessing the prototype
//> uses Dunder (2 consecutive underscores)
//> Syntax: dt_name.__proto__
let computer = {brand:"dell"}
console.log("computer",computer.__proto__);
//- NodeJS shows null to default prototype properties
//- If a object linked it shows all the custom properties(Refer dell log below section)


//. Linking objects 
    //. Using Dunder __
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
    //> Syntax: Object.setPrototypeOf(obj,source)
    let source={id:"12344"}
    let obj = {model:13}
    Object.setPrototypeOf(obj,source)
            //.To access the prototype 
            //> Syntax:
            console.log("obj's prototype",Object.getPrototypeOf(obj)); //{ id: '12344' }
            //- it only shows prototype properties 

//. To check for inherited property
console.log(obj.hasOwnProperty('model')) //-true: it's is own specified property
console.log(obj.hasOwnProperty('id')) //- false: Since it is inherited form source object 
            