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

Condition: Inner loop needs to fill descending order from No of rows  specfied as the outer loop moves in decreasing no .of rows.

```js
for(let i = n;i>=1;i--){
   let row = ""
   for(let j = i ; j>=1;j--){
      row = row+" "+j
   }
   console.log(row)
}
```

## Pattern-3 : Spaced Mirrored Right Angled Triangle

> Visulaize the Pattern assuming the empty space also as a pattern filled with Space(better _) and understand the relation with spaces and the Visible pattern for the rows. Use two Inner Loops to print space and pattern coumns obeying the relation. First loop Prins tehSpaces then Second loop starts from the end of First Inner Loop and Prints the Pattern

![](.\Diagrams\Spaced%20Diagrams.png)

For the above pattern relation is :
`no of Spaces = No.of Rows - Current Row` i.e, `_ = n-i`



```js
for(let i =1 ;i<=n;i++){
   let row = ""
   let s=0;
   for( s = 1; s<=(n-i);s++){
      row = row+" "
   }
   for(let j=s;j<=n;j++){
      row = row+"*"
   }
   console.log(row)

}
```



## Pattern 4 : Alternate Pattern

Use a toggle variiable as the pattern's value

```js
let p =0;

for(let i=1;i<=n;i++){
   let row=""
   for(let j=1;j<=i;j++){
      row = row+p
      p>0 ? p-- : p++
   }
   console.log(row)
}
```
