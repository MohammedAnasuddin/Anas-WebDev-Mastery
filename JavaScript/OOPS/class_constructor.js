//. class constructor
//> method to create and Initialize the object of the class
//> Syntax: constructor(args)
//Note: It follows all features of methods like default,rest parameters,destructing etc 

//x A class can only have a single constructor

//> A constructor helps in custom initialization of an object before any operation on the object.

class demo{
    id; 
    constructor(){
        this.id = (Math.random()%100)*100;
        console.log("A object is created of demo class",this.id)
    }
}

const new_obj_1 = new demo()
const new_obj_2 = new demo()


//Note: no constructor then default constructor is used to initialize the object 
//> default: constructor() {}

//. Working of sub/derived class
//> First of all the sub class constructor should call the 
//> the constructor of parent_class using super() 



//x Async methods cannot be a constructor
//x A constructor cannot be a private element

class demo_async{
   async constructor(){

   }


  #constructor()
}
