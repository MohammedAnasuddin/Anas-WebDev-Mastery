//. new operator
//> create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

//>Syntax:  new Constructor(arguments)

//Note : Here Constructor is a class or function that specifies the type of the object instance.



//. Working of new

let digit = new Number(1)

//> 1. Creates a blank JS object referred as new Instance

//> 2. If the Constructor prototype is Object, current instance points to prototype of Constructor 
//>   else points to the Object.prototype

//> 3. Executes Constructor function using newInstance(digit) as the this context 


//. Return value of new
    //> if the return non-primitive(Object, Null, Undefind etc)
        //> the non-primitive value is returned

        function np_return(){
            let arr = []
            return arr
        }

        let check_np = new np_return()
        console.log("Non-Primitive Return:",check_np); //[]
    
    //> If Construtoe returns no value or returns a primitive 
    //> new returns the Instance

    function p_return(name){
        this.name = name
        return name;
    }

    function no_return(){
    }

    let check_p_return = new p_return("Check_p_Return") // p_return { name: 'Check_p_Reurn' }
    //>Note: Don't get confused by Constructor is being logged its how JS logs instances.
    
    let check_p_return_2 = new p_return("Check_p_Return_2") // p_return { name: 'Check_p_Reurn' }
    console.log("Primitive Return:",check_p_return);
    console.log("Primitive Return:",check_p_return_2); //p_return { name: 'Check_p_Return_2' }

    let check_no_return = new no_return()
    console.log("No Return:",no_return);



//. Check for new keyword on a function call
//> use new.target


function check_new(){
    if(new.target==false){
        return 'Function called without new'
    }
    // console.log( 'Function called with new')
    return 'Function called with new'
}

console.log("No new: ",check_new()); // No new:  Function called with new
console.log("with new: ",new check_new()); // Return Instance since string is a primitive

