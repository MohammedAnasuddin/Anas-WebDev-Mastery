//. break
//> used to terminate the loop and pass the the program control to the next statement after the loop


//. labels
//> JS allow to label the statements in the code
//> Syntax label: statement

//. break and labels
//> Syntax: break label is used to terminate at the mentioned label
//> pass the control to the next statement
//Note: this label should be in the same scope of the break




console.clear()
let romans_up = ["I","II","III","IV","V"]
let romans_low = ["i","ii","iii","iv","v"]

headings: for(let i=0;i<5;i++){
    console.log(romans_up[i])
    sub_headings: for(let j=0;j<5;j++){
        console.log(romans_low[j])
        if(j==2 && i==2){
          break sub_headings //- breaks the inner loop
        }

        if(i==2){
          break headings //- THis breaks the outerloop
          //> labels lets you control
        }
    
    } 
    console.log("---------------------")
}

//Note: break scopes is block of the loop 
canContinue = true
check: while(canContinue){
  canContinue = checkBreak()
}
function checkBreak(){

  // break;  //x you can't break the check loop from here
  //> SyntaxError: Illegal break statement
  return false
}


//x Don't use same lable s for different break statements the program control will transfer unexpectedly
//- I have 2 headings labels the break from above goes to the heading label of  
// -line 72 rather than to its required heading in line 21

//. continue
//> it skips the current iteration and [asses the control to the next iteration
//> continue does not terminate the execution of the loop entirely, but instead:

//> In a while or do...while loop, it jumps back to the condition.
//> In a for loop, it jumps to the update expression.
//> In a for...in, for...of, or for await...of loop, it jumps to the next iteration.

//Note: to use labels with the continue these labels should denote loop block

// skip: {
//   do{
//     continue skip //x SyntaxError: Illegal continue statement: 'skip' does not denote an iteration statement
//   }while(false)
// }


//> Suppose we don't want to 2nd sub heading and IV heading
headings: for(let i=0;i<5;i++){
  console.log("*************")
  console.log(romans_up[i])
  sub_headings: for(let j=0;j<5;j++){
    if(i==3){
      continue headings //completely skips the IV heading
    }
    
    if(j==1){
      continue sub_headings
    }
    console.log(romans_low[j])
  
  } 
}