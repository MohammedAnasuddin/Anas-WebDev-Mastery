//- In JS, the operator decides the data type of operands in the expression.
//- The operator only converts the the operand for teh expression itself not completely
//Tip: Refer this article https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/


let operand = 1234
let expression = operand+'56789'
console.log("Type Result", expression, typeof expression) //123456789 string
console.log("Operand after Evalaution", typeof operand) //number


//. String Coercions
//> Activates when + operator is used , converts both operands into String.

let num = 123
let result = 123 + 'Four'
console.log(result, typeof result);
console.log("Operand Type", typeof num)


//. Boolean Conversions
//> Activates if || and && are used
let result2 = 221 && '123'
console.log("Boolean Coercion", result2, typeof result)
//- These return the values itself


//. Numeric Coercions
//> Activates when aritmetic, bitwise, comparions operators are used in the Expression


//. == and ====
//> == known as loose equality operator 
//> === known as Strict quality operator i.e does not allow implicit conversions while comparing

let value1 = '5'
let value2 = 5;
console.log(value1==value2) //- true, the value1 is converted to number 5 
console.log(value1===value2) //- false, does not  datatype conversions number!=string

/*
. There are two special rules to remember:

-When applying == to null or undefined, numeric conversion does not happen. null equals only to null or undefined, and does not equal to anything else.
>null == 0               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true

-NaN does not equal to anything even itself:
if (value !== value) { console.log("we're dealing with NaN here") }

*/