//. reverse
//> reverses the array elements and returns the refernce of the same array
//Tip : use .toReversed() to get a new array whch does not have same refernce

let nums = [0,1,2,3,4]
console.log("Before reversing");
console.table(nums)

console.log("After reversing");
let reversed = nums.reverse()
console.table(reversed)

//Note: Any changes in reversed array will reflect in original array as well
console.log(`At 0: Reversed= ${reversed[0]} , Original: ${nums[0]} `);

//- This output 4 , 4 since nums is also changed

//> Reverses treats empty slots as normal elements during reversing 
