//> console is a object which provides access to the debugging console of the browser

//> console.assert(boolean_expression,{variable, message_to_print})
//- Prints the message if the boolean expression results false

let num = 2
console.assert(num == 2, "num not equals to 2")

//> console.directxml(DOM_selector)
//- Prints all the elements selected by the selector ina tree manner  

//Tip: Works in HTML not in NodeJS Environment
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

