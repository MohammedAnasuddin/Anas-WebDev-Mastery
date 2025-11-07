let n =5;

let p =0;

for(let i=1;i<=n;i++){
   let row=""
   for(let j=1;j<=i;j++){
      row = row+p
      p>0 ? p-- : p++
   }
   console.log(row)
}



