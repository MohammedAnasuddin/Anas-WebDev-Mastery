//. First class Functions
//>a function can be passed as an argument to other functions, 
//> can be returned by another function and 
//> can be assigned as a value to a variable.



//. functions as arguments
function greet(){
 return 'Hello'    
}

function welcome(prefix, name){
//> THe function argument can be named anything 
//- here greet function is named as prefix 


    console.log(prefix(),name) //Hello Anas
    
    
    // > console.log(prefix,name) 
    //x Don't just specify he function argument we need to call it

}

welcome(greet,"Anas")
//- the function passed as argument is known as callback function
//>here greet is the callback function


//. Returning functions
//> used to create dynamic functions based on necessary

function greet_user(status){
    if(status=='joined'){
        return (name)=>{
            console.log(`Hey ${name} Got any plans today???`);
        }
    }
    
    else{
        return (name)=>{
            console.log(`Sad to see you go ${name} Bye`);
        }
    }

}

const user_message = greet_user("leaving")
//> user_message has the function with Bye message
//> we can call it now
user_message('Anas') //Sad to see you go Anas Bye

//. functions in variable
//> Above the function is stored in user_message variable
//Tip: Always use const for storing functions since we dont wan tot change the declartion
//- If stored in variable the function can only be called using variable_name()


//. Higher order functions
//> the functions which can take functions as arguments and return functions


