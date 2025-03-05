//. shift()
//> Removes first element and returns it
//Note: using .shift() will decrement the indexes of elements and length of array
//- All elements will be shifted left because to fill the place of removed element hence decrease in index
//> It's a mutating method it changes the original array

let arr = [0,1,2,3,4]
console.table(arr)
console.log("First Element: ",arr.shift());
console.table(arr)

//> If length is zero .shift() returns undefined
let arr_2 = Array(0)
console.log("Shift on no elements: ",arr_2.shift()); //undefined


