# Complexity

## Time Complexity

Used to mesaure efficeny of the algorithm(solution) in terms of speed as the input grows

### Binary Search

We need to divide the array , and check which sub-array the required elemen lies in  until there si only one element in sub-arrays and anyone would have the required element   

```
n/2 -> (n/2)*1/2 -> ((n/2)*1/2)*1/2 -> .... n/2^x  = 1
```

```
n/2^x = 1

n = 2^x
```

Here , `x` represents how may times we need to divide in order to get the element

x -> No .of Iterations

## Types of Time Complexity

1. `O(n)` : A for loop

2. `O(log n)`: Binary Search

3. `O(n^2)`: Double for loop

4. `O(n logn)`: A `O(log n)` inside a loop `O(n)`

Efficieny Order and Graph

![](.\Diagrams\Time%20Complexities%20Graph.png)

### Calculating Big O

For Independent loops it's `n + n` so O(2n) -> `O(n)`

>  Why numbers are eliminated form final ocmplexity?
>  They do not play that signiifcant rule

Foe nested loops we multiply `n*n` and the power is cosidered.

## Space Complexity

> `Note`
> 
> Calcualte only for the extea spaced used

If the variables are countable then: `O(1)`

If an iterable of size-n is created:     `O(n)`

If an 2D array is created then :         `O(n^2)`
