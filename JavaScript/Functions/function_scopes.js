 (function parent(){
    let parent_var = "I'm a parent variable";

    (function child(){
        let child_var = "I'm a child Variable"
        console.log(`chid: I could access the parent variables: ${parent_var}`);
        
    })()


    try{
        console.log(child_var);
        
    } catch(e){
        console.error(`parent: I cannot access the child variables`);
    }

    console.log(`global variables: ${global_var}`)

 })()

 let global_var = "I'm Global"