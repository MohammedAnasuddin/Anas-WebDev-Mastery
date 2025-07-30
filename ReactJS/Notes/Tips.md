# Tips

This file contains all the misc do's and dont's

## Event Handlers

1. Don't use `()` while specifiting a handler in `OnClick`, it will directly call the function

2. To pass parameters to the handlers use an wrapper callback and then call the handler with the parameters in it.
   
   ```jsx
   <p onClick-{handler("parameter")}  />  //x Wrong
   
   <p onClick={()=> {handler(parameter"} }  //Correct
   ```

## Mutating Redux States

`state = ["one"]` does not change the state, it just changes the  reference. It will just change the value locally.
