# Optimization

## Single Responsibility Principle

Every Component should only perform a single task.

Makes the code Maintainable, testable and reusable.



## Custom Hooks

Currently Our Components has 2 responsibilities

1. Fetching the data 

2. Rendering the component using the data

Assume we have a custom hook  to fetch the data after this our component does not need to care about fetching the data it would be handled by custom hook.

Component now has single responsibility of rendering.



### Creating a custom hooks

Since these are utility (helper functions) place them in the utilities function.

> Create a individual file for each hook, name exactly as the hook name
> 
> Note: Hooks start form "use....."



1. Create the function with required parameters

2. return the required value.

3. program the logic to get the required return value.

 
































