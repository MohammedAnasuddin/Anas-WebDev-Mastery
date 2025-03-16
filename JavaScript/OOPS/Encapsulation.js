//. Encapuslation
//> Restricting direct access to the data object

//> use # before the values to encapsulate

class Bank{
#user_pin =''
        
        constructor(pin,name){
            this.#user_pin=pin
            this.name = name
        }
    

    getName(pin){
        if(this.#user_pin==pin){
            return `Welcome ${this.name}`
        }
        else{
            return `Wrong Pin Try Again`
        }
    }
}

let Anas = new Bank("0987","Anas")
//> On provided wrong pin it returns wrong
console.log(Anas.getName("1234"));  //Wrong Pin Try Again


//> on right pin it returns welcome
console.log(Anas.getName("0987")) //welcome Anas

