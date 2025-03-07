//. indexOf()
//> Returns the first index of the required element
//> -1 if not found

//> Syntax: .indexOf(element,fromIndex)

const arr = [1,2,3,4,5,4,3,2,1]
console.table(arr)
console.log(arr.indexOf(4)); //3 

//> If you want to start search from desired index pass the 
//> the starting index as second parameter
console.log(arr.indexOf(4,5)); //5

//Note: fromIndex is also considered in search
//>Hence here the output is 5 since '4' is on 5th index itself


//. Zero indexing of fromIndex
//> Accepts negative index and starts the search from relative zero based index
console.log(arr.indexOf(4,-2)) // -1
//- Here -2 is passed so the search will start from 7  (length)+negative index 
//- 9+(-2) = 7
console.log(arr.indexOf(2,-2)) // 7
//x Array is not searched if fromIndex >= length


//. Strict Equality
//. indexOf() uses === to compare during search.

const ones = [1,'1']
console.log("Number one Index: ",ones.indexOf(1)) // 0
console.log("String one Index: ",ones.indexOf('1')) //1


//Tip: use to check existence of an element in array , id returned -1 it does not exist

//x indexOf cannot be used to search NaN and empty slots