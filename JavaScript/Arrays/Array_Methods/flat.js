//. flat()
//> Returns a new aray by concatenting sub array eleemts upto specfied dept.
//> Default dept 1
let nested_array = [1,2 ,[3,4, , [5,6,7]]]
console.log(nested_array.flat(1));

//[ 1, 2, 3, 4, [ 5, 6, 7 ] ]
//x As yo can see .flat() removes empty slots

console.log(nested_array.flat(2));
/* [
    1, 2, 3, 4,
    5, 6, 7    
  ] */
//> Second level sub set also concatenated

//Tip: Use Infinity as depth to concatenate all sub levels