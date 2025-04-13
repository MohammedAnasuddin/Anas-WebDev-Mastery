 //> use this._variable =  variable  
 //Tip: use _ to denote that property has a getter and setter
 //- these properties are known as accessor properties
 //- they need extra functions to operate but looks and behaves like normal properties to the external code

 //Tip: getter and setter function should have property name(without _) as function name
//> use get and set keywords

//> Every property we assign in constructor can have a get and set
//x when constructor is called these are not called 

//- Properties handled by getter and setter can be used without ()

class user{
     constructor(name){
        this.name = name;
     }
     get location(){
        return `${this.name} from ${this._location}`;
     }

     set location(city){
        this._location = city;
        //- _ should be used in the class
        //- if _ is not used the setter is called recursively hence infinite loop
        // this.location = city; 
        //x RangeError: Maximum call stack size exceeded
     }
}

let u1 = new user("Anas")
u1.location = "Hyderabad" //- this calls setter
console.log(u1.location); //- this calls the getter
console.log(u1._location); //- this directly uses the value

//- getter is called on read(obj.accessor_property) and setter is called when assigned(obj.accessor_property  = new_value)
//x do not call getter and setter as functions