# Folder Structure

React makes dev Experience easy by giving superpowers

> [!WARNING]
>
>  Code files should not contain large number of lines

> [!TIP]
>
> Make individual file's of each component



React does not ask for specific folder-structure

Avoid complex nested of files in the structure.

### `src-folder`

All the files with react code inside this folder. Stands for source code this is a industry practice.

### `components-folder`:

All the files with the code of components .

> [!TIP]
>
> Name the file exactly as the component it holds (.js and .jsx does not matter )

These Individual components need to be exported to be used in UI
use:

```js
function Component_name(){
return (
JSX
)
}

export default Component_name
```

using the compoent

```js
import Component_name from 'path/to/file/of/Component'

```

> [!CAUTION]
>
> Never store hard coded data in the components folder(even strings)

### `utils folder`

Stores all the utilities we require (hardcoded data)  whic are used all across theproject

> [!TIP]
>
> Name all the files in this folder in lowercase since they are not components

> [!TIP]
>
> Name All the constants in UPPER_SNAKE_CASE
>
> 

Use default export if a single value being exported

Use Named exports if multiple values being exported





# React Hooks

Task: On click of a button top rated restaurants should be displayed

we have an attribute onClick={callback_function}

If the data changes then the UI changes

so the data used to create the UI should change based on the filter then React will only render the available data i,e filtered data



Changing data:

```js
 filtered_list_restaurants = filtered_list_restaurants.filter((restaurant)=>{
            return restaurant.data.avgRating>=4
          })
```

But the ui does not update yet.

## States in React

States give super power to data

Hook is normal JS function with super powers form react

#### Important Hooks

1. useState()

2. useHooks()

3. > [!TIP]
   >
   > Always import Hooks as Named Imports( i.e,  using  {  } )

Local State Variable : State variable with scope being the component.

We can't modify State Variables in a normal way , To modifiy the value these varqaile we need a function which is passed as 2nd parameter

> [!TIP]
>
> It's good practice that these functions name are prefixed with `set` and exac name of the value they modify(1st parameter) 

Syntax: Creating state Variable

```js
const [variable_name,setVariableName] = useState([default_value])
```

the new modified data needs to be passed into this function to update in the original data

This syntax shown is **Array Destructing**

```js
let arr = useState(Default_value);
//useState returns an array

const [variable,setVariable] = arr

or 

const variable = arr[0];
const setVariable = arr[1]
```



```js
setVariablename(new_data)
```

Now , these variables keep the data layer and UI layer in sync 

whenever a state variable is updated React re-enders the component

(whenever the setVariableName function is called)



### Reconciliation Algorithm

Also known as React Fiber(started from React 16)

React creates Virtual DOM(Representation of an Actual DOM(tags and elements)) 

i.e, Represents the React Elements (JS Objects)



##### Diff Algorithm

Finds the difference between old virtual dom and  current DOM hence updates the Actual DOM accordingly.

React does not touches Real DOM it uses Virtual DOM's and then updates Real DOM which makes it faster.

Whenever there is a change in state variable React compares the virtual DOM ad change the Real DOM.

Virtual DOM is just JS representation of the HTML elements present, this concept existed form the long time but React used it algorithms on it to effectively boost the speed of the web page
