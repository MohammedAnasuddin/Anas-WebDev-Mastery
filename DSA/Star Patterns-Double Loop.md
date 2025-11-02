# Double Loops

**Outer Loop is handles the rows and Inner Loop Handles the Columns of that Row.**

> The flow is each row is visited by Outer Loop (`i`) and Inner Loop (`j`) does the work of filling the columns of that row as per the conditions And  the row is printed at last. then Outer Loop moves to the next row.





## Pattern-1 : Right Angle Triangle

> List the requirements before coding

No .of Rows Needed  (n) : 4

Inner Loop:  Inner Loop needs to fill same amount of columns as the current row.

```js
for(let i=1; i<=n;i++){
   let row =""    
 for(let j =1 ; j<=n;j++){
    row = row+"*"
    }
console.log(row);
    
}


```

> To Print Numbers replace `*` with value which contains  the value `i/j`
> 
> ```js
> row = row + " "+j;
> ```

 



## Pattern-2 : Inverted Right Angle Triangle

   Condition: Inner loop needs to fill descending order from No of rows     specfied as the outer loop moves in decreasing no .of rows

    > 








