//. Event Listeners
//> a method called whenever a event occurs on  specified target
//- a specific target can have multiple listeners  without same name
//x if multiple listeners exit with same name all the listeners will be executed


//> syntax: .addEventListener(type,listener,useCapture)
/*
> type : event_type ad its ase-sensitive
> listener: callback function or a Object with handleEvent() menthod
- this in listener refers to the target(HTML Element)

> useCapture:  decides the type of event propagation
*/

document.getElementById("cap").addEventListener("click",function(){
    console.log("I will activate when clicked")
})

document.getElementById("cap").addEventListener("click",function(){
    console.log("I will also activate when clicked")
})


//> sub listenrs will only execute after parent listener is completly executed

document.getElementById("cap").addEventListener("click",function() {
    document.getElementById("cap-c").addEventListener("click",function(){
        console.log("I m a listener insde a listener")
    })
//- If click the div with id cap-c this handler wont be activated only after upper handler is completly executed
//- and below log is printed thenif I click it then it's handler will be activated 
    console.log("Upper Listener: I have completely executed now")
})


//. Evenr Propagation 
//> decides the order of elements on the handler

    //. Bubbling: 
    //>Inner elemnts jandler are execute first and then outer elements
    //Tip: Just like water bubbles rising to the surface hence the name

    //. Capturing
    //> Hanlders of outer most elemnts are exceuted first and then inner elements handlers
 
//>Set the the the type of propogaton by useCapture parameter in the addEventListener()
//> default value is false i.e uses bubbling
//> set to -> true to use capturing     



document.getElementById("cap").addEventListener("focus",function(){
console.log("Capturing Demo");

},true)

document.getElementById("cap-c").addEventListener("focus",function(){
console.log("Capturing Demo: Child");

})
