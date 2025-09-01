//. classes
//> Classes are a template for creating objects. 
//> They wrap data with code to work on that data.

//> In JS, classes can be defined as functions and store in variable

let new_class = class{

}

//- or
//> replace the function keyword with "class"
class new_class_2{

}

//. class elements
//> the properties and values  of class are known as elements
//> three characteristics of elements:
        /*
         >   type: Getter, setter, method, or field
         >   Location: Static or instance
         >   Visibility: Public or private
        */

//. static elements
//> static properties (fields and methods) are defined 
//> on the class itself instead of each instance.
//> static elements should be accessed using classname since they belong to class not object 
//> classname.static_element;

//- a element static by prefixing "static" keyword 


//. field elements
//> similar to object properties
//x Don't use let,var and const to declare fields
//- can use modifiers private and public
//> use  "this.field" to access value of the Instance.

//. private elements
//> use #element_name(read it as "hash element_name") to create the element
//Note: Every private element should be unique, no duplicates.

class demo{
    static id
    name
    #password
}


//. Evaluation Order of the class expression
    //> 1. Check for "extends" and should return a valid constructor
    //> 2. constructor method is evaluated
    //> 3. class elements are evaluated in order of declaration
    //> 4. Methods are installed with respect to their location
    //> 5. Class is initialized and Object is created
    //> 6. Instance fields are evaluated.