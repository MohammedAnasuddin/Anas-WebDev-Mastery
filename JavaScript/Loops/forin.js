//. for-in loop 
//> Used to to iterate on properties of a object.
/* 
>Syntax: for( variable in object){
>           Statements
>        }
*/

//. components of for - in
//> variable:
    //> used ot iterate over properties
    //Note: let,const can be used to declare variable
    

    let user_schema = {
        1: "Name",
        2: "mail",
        3: "password"
    }
    let iterator;
    for(iterator in user_schema){
        console.log(iterator,user_schema[iterator])
    }

    //Note: break and continue can be used
    for(iterator in user_schema){
        if(iterator == 2){
            continue
        }
        if(iterator == 3){
            break
        }
        console.log(iterator,user_schema[iterator])
    }


//. New Propertes in a object
    //x for-in does not traverse properties added during the traversal
    //- since it creates a copy of all properties present in the obj before starting the loop

    for(iterator in user_schema){
        user_schema[4] ="age"
        console.log(iterator,user_schema[iterator])
        //- the age property is not shown despite we added it
    }

    console.log(user_schema)
    //- Here we can see the age property
    //Tip: Don't add or remove properties while using for-in    

//. Iterating only on user defined properties
//> By default, for-in traverse on all properties of a object including prototypes
//- Check using Obj_name.hasOwnProperty(property) to only traverse user defined properties

console.time("Looping over all properties")
for(iterator in user_schema){
    console.log(iterator,user_schema[iterator])
}
console.timeEnd("Looping over all properties");

console.time("Looping only on user defined properties");
for(iterator in user_schema){
    if(user_schema.hasOwnProperty(iterator)){
        console.log(iterator,user_schema[iterator])
    }
}
console.timeEnd("Looping only on user defined properties");

//> In first case it takes 4.27ms and second case 3.99ms
//X Not always works sometimes time in second case is grater than first one