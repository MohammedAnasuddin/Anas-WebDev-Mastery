# Handling Data in React

React works in two layers Data Layer and UI Layer.

If Data Layer is managed properly then performance wouldbe optimized. 

## Higher Order Components

A `JS` Function which takes a component and returns a component.

Takes a  exisiting component enhance it and returns it back.

used to make a component special in group of component eg: adding badges as new to a card.

Syntax:

```js
let EnhancedCompoennt = (currentComponent)=>{
  // this should return new enhanced componet
   return EnhancedComponent;
}
```

Higher order should return a Component.

>  `NOTE`
> 
> `JSX` is result of a Component , so you cannot return `JSX` in HOC. 
> 
> HOC should only a return a component(*a function that returns JSX*) which uses the given component in it's `JSX`

## Creating a HOC

1. Create a function that takes a input component. This function is commonly referred as `withWrapper` since it signals what is enhanced in the  component for example `withBadge` a card with badge.
   
   ```js
   const withWrapper = (inputComponent) =>{
   
   } 
   ```

2. Return the Enhanced Component (a function)
   
   ```js
   const withWrapper = (inputComponent) =>{
       return function EnhancedComponent(){
       // can use the arrow functions as well
   } 
   }
   ```

3. Return a `JSX` using the inputComponent
   
   ```jsx
   const withWrapper = (inputComponent) =>{
      return function EnhancedComponent(){
          return(
              <div>
                 <inputComponent/>
              </div>
   )
      } 
   }
   ```

| Situation                                 | Where to define HOC                                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 🔁 You reuse HOC across many components   | ✅ Put it in its **own file** (e.g., `withBorder.js`)                                               |
| 🧪 HOC is just for testing/demo           | 🆗 Define it **inline temporarily** inside the same file                                           |
| **HOC is specific to just one component** | **You *can* keep it in the original component file, but it’s still better to extract for clarity** |
| 🧱 You’re building your own UI library    | ✅ Group HOCs in `/hoc/` or `/utils/hoc/` folders                                                   |

## Using HOC

use them while rendering the Original Component.

1. Create the Enhanced Component by calling withWrapper with Original_Component.
   
   ```js
   const EnhancedComponent = withWrapper(Original_component)
   ```

Now you got the functions to create both the versions of the component use them as needed.

> `NOTE`
> 
> Don't think that all the components associated are enhanced. It's not the instance that is enhanced rather the function to create them.
> For instance: Consider component as Biryani you can either make a regular biryani or else make hyderabadi dum biryani. It's the recipe(function) gets enhanced not the dish(component) 

## Using `props` for enhancedComponents.

> Why to pass `props` when you are passing the whole component
> 
> For your kind information, You’re **passing the component function**, not its **rendered version with props**.

`props` are required in `HOC` to build the Original_Component in the Enhanced_Component

since function of Original_functions uses `props` to build the component

 when we use `HOC`  the `props` are passed to the `Enhanced Compoent` .

this is because 

```js
const EnhancedComponent = withWrapper(Original_component)

// withWrapper has returned a Enhancd Component's Function

<EnhancedComponent props="data"/>

//These propare passed to the Enahnced Components functions 


//hence we receive them at return of Enahnced Component in wth Wrapper.
```

```js
const withWrapper = (inputComponent) =>{
    return function EnhancedComponent(props){
        return(
            <div>
               <inputComponent {...props}/>
            </div>
)
    } 
}
```

#### Why to use `...props`

Suppose yo have passed 

```js
<EnhancedCompoent data="123" name="lorem" />
```

props object created : `{date:"123", name:"Lorem"}`

this object is passed to Enhanced Compoent

```js
const withWrapper = (inputComponent) =>{
    return function EnhancedComponent(props){

        console.log(props) //{date:"123", name:"Lorem"}`
        return(
            <div>
               <OriginalCompoenent {...props}/>
            </div>
)
    } 
}
```

the Orignal_component needs dedicated `props` (name and data individually) but there are wraped in single object hence we spread them while passing to original component

> How can we use ... inside JSX
> 
> JSX is compiled as
> 
> ```js
> React.createElement(Component, { name: "Lorem", data: 22 });
> 
> //hence props are object we could spread them.
> ```

## 

## Controlled and Uncontrolled Components:

When a Component has it's *own state* it can *control itself* hence these components are known as **Uncontrolled Component**

If the state(component) is controlled by parent/external component it is **Controlled Component**

#### How to control state of parent from child component

pass the `setState` of the parent_state as a function in props.

this is known as Lifting the state up.

```js
//Parent

const [parent_state , setParentState] = useState()



<Child stateHandler={()=> setParentState()}
// Don't directly pass the setState since it will trigger re-render
// we need to pass it as a result of an function , we will call this functionin 
// when needed
```

in child component

```js
cosnt Child =(props)=>{
    const {stateHandler} = props;

    const timeToChange = ()=>{
    stateHandler()
}
}
```

## Props Drilling

### The Problem:

Passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information.

As the project grows passing data becomes complex because `React` allows only one-way data flow from parent to child.

There is no direct way to pass data from `grand_parent_node` to `leaf nodes`. the data should be passed from children to get to the `leaf_node`  .

To control the `leaf_nodes` together the state needs to be lifted to nearest common parent.

this  become a problem if the project is large and the state has to be passed from grand_parent (assume it as common parent) level  to go from all children of the branch to reach `leaf_node`

it feels like we are *drilling(earth)* to pass props from grand_parent to lead_node hence the name. 

And What if we need the leaf_node controllable by grand_parent_node?

![](G:\SKILLS\Full%20Stack%20Devlopment\WEB%20DEV\Learning-Web-Devlopment-MERN-Stack\ReactJS\Notes\Images%20and%20Diagrams\Props%20Drilling.png)

#### Solving the problem of props drilling

> It's totally ok to pass props for 2 levels

*Wouldn’t it be great if there were a way to “teleport” data from common_parent to the components in the tree that need data without passing props?*

To solve this we need *global data* which can be accessed by components at any level.

Hence we use `context`

## React Context(/con: just like in comicon , text/)

*Context* lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

A global place where data is stored which can be used anywhere in the project to avoid problem of pros drilling.

use context for those data which is required everywhere in the project Eg: LoggedIN User info, theme configs .

Context is useful because you can **provide other, dynamic values from your components**

Context is used in Three steps:

1. **Create** a context. 
2. **Use** that context from the component that needs the data(i.e child component). 
3. **Provide** that context from the component that specifies the data.

### Creating a context

> Use a dedicated space/file for context of easy usage

1. Create a file "`nameContext.js`" (prefarable under `utils`)

2. import  constructor `createContext` and create a custom context.

3. Takes a data which takes default info.

4. export the custom context.

### createContext(intial_value):

- Call `createContext` outside of any components to create a context.

- The only argument to `createContext` is the *default* value.

- The value that you want the context to have when there is no matching context provider in the tree above the component that accessing the context.

- f you don’t have any meaningful default value, specify `null`. The default value is meant as a “last resort” fallback. 

- It is static and never changes over time.

- `createContext` returns a context object.

- context object is like a **channel or pipe** through which data can flow from a **Provider** to any deeply nested component that wants to **subscribe** to it using `useContext()`.

- 

### Accessing Context

1. import `useContext` which takes in the context created by `createContext` as input.

```js
import {useContext} from "react"
import {context} from "context/path"

cosnt data = useContext(Context)            
```

> Should we stop using `props` since we could access data from `context`
> 
> Use `context` for the data which is being used at multiple places. otherwise go use `props`

##### useContext(someContext)

- Hook that lets you read and subscribe (observing for changes) to context from your component.

- If the context value changes, your component **automatically re-renders** to reflect the new value.

- On Change, React **automatically re-renders** all the children that use a particular context starting from the provider that receives a different `value`.

- `useContext` returns the context value for the calling component.

- It is determined as the `value` passed to the closest `SomeContext` above the calling component in the tree.

- If there is no such provider, then the returned value will be the `defaultValue`

- The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.

- `useContext()` always looks for the closest provider *above* the component that calls it.

##### Accessing `context` in class-based components

1. import the  `custom_context `

2. In the `JSX` of class-component use the , which takes a callback having required data as a parameter
   
   ```jsx
   <custom_context.Consumer> 
   {
       (data) => {
       console.log(data)
   }
   
   }
   </custom_context.Consumer>
   ```

### Modifying Existing context

We use `<CustomContext.Provider value={new_data}>` wrap the whole app with this provider.

we wrap the whole app because this sets the `new_data` for the whole project.

> The components wrapped inside the provider will receive the new data and components outside will receive the default value.
> 
> The value that you want to pass to all the components reading this context inside this provider, no matter how deep.

For nested providers , each component will receive data from the `context`  closest to them.   A component calling `useContext(SomeContext)` inside of the provider receives the `value` of the innermost corresponding context provider above it.

> Starting in React 19, you can render `<SomeContext>` as a provider.

```jsx
<UserContext.Provider value={"Anas"}>
<p>If used here we get "Anas"</p>

<UserContext  value={"Anas-2"}>
<p>If used here we get "Anas-2"</p>
</UserContext>

<p>If used here we get "Anas"</p>
</UserContext.Provider>
```

### 

### Handling Global States:

We can update global states by passing `setState` to the `context`

```js
<CustomContext.Provider value={state, setState}>  
```

now any one can access this `state` value.

> The values of context will be same even for the dynamic imports despite the fact they arrive later.
