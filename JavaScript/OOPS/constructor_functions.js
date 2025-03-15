//. Constructor Functions
//> Used to create blueprints to create Instances


//.Best Practices to create Construction Functions
    //> used to differentiate between normal and constructor functions

    //> 1. 1st Letter of function name should be capital
    //> 3. The variables in constructor function should be initialized using  this keyword as follows "this.name = value"
    //> 2. All the variables holding parameters value should name exactly as parameter.

        //.Sample:
        function Person(name,age){
            this.name = name
            this.age = age
        }

//. Creating Instances
//> use new keyword 
//> syntax : let obj_name = new ConstructorFunction()

let me = new Person("Myself","21")
console.log("me:",me); //Person { name: 'Myself', age: '21' }

let me_2 = Person("Myself","21") 
console.log("me:",me_2); //undefined

//> To create the instance we need ot access variables within constructorFunction
//> the new and this link up the context to access the variables and create an instance


function Car(brand){
    this.brand = brand
    this.getBrand= function(){
        return `Your car brand is ${this.brand}`;
                             //- Here this is important to get value of brand from current context
       //- this makes every instance unique so that each instance uses their own values  provided during creation. 
       //- For example if Tata Obj it only going to hav tata Values and If rolls Royce it ony gonna have its value
    }
}

let myCar = new Car("Tata")
console.log(myCar.getBrand());


//. Prototypes nad Constructor Function
//Tip: Use .prototype for constructor functions
//- Since .setprototypeOF() works only for objects

Car.prototype.type = this.type
Car.prototype.getType= function(){ return `You got a ${this.type} car`}

let myCar2 = new Car("Rolls Royce","Luxury")
console.log("myNewCar-type:",myCar2.getType());


//. Checking wheter a Instance is created using a new keyword or not
//> use !new.target in a if statement if true throw an error

let CheckingNew  = function(){
    if(!new.target){
      
        throw new Error("Your Instance is not created using New")
    }
    else{
        console.log("You have Create the object using new keyword");
        
    }
}

let withNew = new CheckingNew()
let noNew = CheckingNew()
