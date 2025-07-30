React works in two layers Data Layer and UI Layer.

If Data Layer is managed properly then performance would be optimized.

## Higher Order Components

A `JS` Function which takes a component and returns a component.

Takes a exisiting component enhance it and returns it back.

used to make a component special in group of component eg: adding badges as new to a card.

Syntax:

```js
let EnhancedCompoennt = (currentComponent)=>{
  // this should return new enhanced componet
   return EnhancedComponent;
}
```

Higher order should return a Component.

> `NOTE`
> 
> `JSX` is result of a Component , so you cannot return `JSX` in HOC.
> 
> HOC should only a return a component(*a function that returns JSX*) which uses the given component in it's `JSX`

## Creating a HOC

1. Create a function that takes a input component. This function is commonly referred as `withWrapper` since it signals what is enhanced in the component for example `withBadge` a card with badge.
   
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

when we use `HOC` the `props` are passed to the `Enhanced Compoent` .

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
