//. reduce()
//> Returns a single value by calling reducer_(callback FN) on every element of the array
//> Syntax: (Callback_Function(accumulator, current,index,element), initialValue)

//- accumulator is the collective value of all the previous elements and passed in callback Fn
//Note: InitialValue is optional 
//> On first cal on first element of array there is no value of previous return
//- If initialValue it will act as previous return value to the first call.
//-x If not provided first element is used as initial value and iteration proceeds to next element 

// Calculating sum of N natural Numbers
let num = [1,2,3,4,5]
let sum = num.reduce((acc,e,i,arr)=>{
        console.log(i,e,acc)
        acc = acc+e
        return acc            
})
console.log("Sum:",sum)
//- 1 2 1: Indicates here the iteration has started from 2nd element
//- and acc value was first element (i.e, 1)

//. Passing the initial Value
//x Don't pass the initialValue in the callbackFunction its a parameter of reduce()

let iValue =0;
let sum2 =  num.reduce((acc,e,i,)=>{
    console.log(i,e,acc)
    acc = acc+e
    return acc            
}, iValue) //- Pass it here

//- 0 1 0 : Indicates First element is iterated and performed and acc is returned
console.log("Sum:",sum)

