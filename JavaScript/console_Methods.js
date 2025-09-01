//> console is a object which provides access to the debugging console of the browser
//- console allows format specifiers like %d or %o 
//- console methods return undefined after printing logs

    let demo = 14
    console.log("The Value of is: %d",14)

//Tip: use %c for styling the log message using CSS
    console.log("%cThis text is Green","color: green;")
//x Works only in browser

//> console.assert(boolean_expression,{variable, message_to_print})
//- Prints the message if the boolean expression results false

    let num = 2
    console.assert(num == 2, "num not equals to 2")

//> console.directxml(DOM_selector)
//- Prints all the elements selected by the selector in a tree structure  

//Tip: Works with HTML not in NodeJS Environment
/* <script src="console_Methods.js">
   const parent = document.getElementsByClassName("parent")
   console.dirxml(parent)
</script> 
*/

//> console.count(label)
//- Prints the no. of times the line with label has executed
//Tip: To reset the count use console.countReset(same_label)
    while (num < 4) {
        console.count("Line-1 Count")
        num++
    }
    console.countReset("Line-1 Count")
    console.log("After Resetting")
    console.count("Line-1 Count")


//. Log Levels
//> console.error(message)
    console.error("Hello Error")

//> console.info(message)
    console.info("Important Info")

//> console.warn(message)
    console.warn("This is a warning")

//> console.debug(message)
    console.debug("I'm debug")
    //- Only works if verbose is enable log level in console


//. Grouping Logs
//> console.group(label) all the console's are grouped under a single console log "label"
//Tip: use console.groupCollapsed(label) to get a button to toggle view of grouped logs
//> To stop grouping console.groupEnd(same_label)
    console.groupCollapsed("Group-1")
    console.log("Group-1 Child-1")
    console.log("Group-1 Child-2")
    console.log("Group-1 Child-3")
    console.groupEnd("Group-1")
    
    console.group("Group-2")
    console.log("Group-2 Child-1")
    console.log("Group-2 Child-2")
    console.log("Group-2 Child-3")
    console.groupEnd("Group-2")

//. Timers Logs
//> Use to calculate time taken for execution between console.time(label) to console.timeEnd(same_label)
//Tip: use console.timeLog(label,message) to print the current time of the timer
    console.time("Timer")
    console.timeLog("Timer","Hello This is the time")
    console.timeEnd("Timer")

//. Tracking Calls
//. console.trace
//>displays a trace that show how the code ended up at a certain point.
function parent(){
    child()
}

function child(){
    grand_Child()
}

function grand_Child(){
    console.log("I'm Grand Child and you can see how execution reached me below:")
    console.trace()
     //- the output will be red it's not a error
    //Tip: To get a cleaner version use log with Error().stack
    

}

parent()
   