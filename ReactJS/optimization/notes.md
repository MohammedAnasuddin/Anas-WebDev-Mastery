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

Importance of Custom Hooks

**More importantly, the code inside them describes *what they want to do* (use the online status!) rather than *how to do it* (by subscribing to the browser events).**

When you extract logic into custom Hooks, you can hide the gnarly details of how you deal with some external system or a browser API. The code of your components expresses your intent, not the implementation.

If function in Component doesn’t call any Hooks, avoid the `use` prefix. You should give `use` prefix to a function (and thus make it a Hook) if it uses at least one Hook inside of it.

## Sharing States in custom Hooks

using same hook for multiple components

```js
function StatusBar() {
  const isOnline = useOnlineStatus();
  // ...
}

function SaveButton() {
  const isOnline = useOnlineStatus();
  // ...
}
```

on changing the state will both the components re-render?

**Custom Hooks let you share *stateful logic* but not *state itself.* Each call to a Hook is completely independent from every other call to the same Hook.** 

so the code:

```js
//Each state will be binded to the scope of their components

function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // ...
  }, []);
  // 
}

function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // ...
  }, []);
  // ...
}
```

These are two completely independent state variables and Effects.

### Creating a custom hooks

Since these are utility (helper functions) place them in the utilities function.

> Create a individual file for each hook, name exactly as the hook name
> 
> Note: Hooks start form "use....."

1. Create the function with required parameters

2. return the required value.

3. program the logic to get the required return value.

Internet checker customHook

1. finalize the contact : the input to hook and output by the hook

```js
import {useState, useEffect} from 'react'

const useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{

        window.addEventListener('offline',()=>{
            setOnlineStatus(false)
        })

        window.addEventListener('online',()=>{
            setOnlineStatus(true)
        })


    },[])

    return onlineStatus;
}

export default useOnlineStatus;
```

```js
//Body.js

const isOnline = useOnlineStatus();
if(isOnline==false){
  return (
    <div>
      <h1>No Internet :(</h1>
    <h2>Connect to an Network</h2>
    </div>

  )
}
```

> How does react remembers event even after hooks gets executed.
> 
> Because the **event handler function is a closure** — it *remembers* the `setOnlineStatus` reference even after the hook function is done running.
> 
> one listener on the `window` object tracks internet connectivity across your *entire project*.

## Bundling

Merges all the `JS` files into a single JS file

Check: Network tab -> Select JS you will find only a single JavaScript file

> Challenge of Bundling:
> It  helps to reduce the no. of calls but size of the JS file grows larger as components / operations of project increases.
> 
> To solve this issue and use bundling as optimizer we use **Chunking**

## Chunking

aka Code Splitting , dynamic bundling , lazy loading 

> Rule:  A bundle should have enough code for the feature.
> 
> This is to request for the js file does not become so heavy that it takes a lot of time to get into browser.

To perform chunking we will load the imports only when they are required.

Eg: when we go to a page it's respective JS file should be fetched.

we use `lazy()` from `react`, takes a callback which returns a `import()`

this `import()` takes the path of the compoenent.

```js
const Later = lazy(()=> import('path/of/Later'));
```

when we use this value `Later` we receive a new JS file.

> find this file in `dist` folder 

> You will get an Error 
> 
> reason: React quickly renders the `Later` component but file containing it's code is on its way hence React suspends the rendering and throws the error.

To solve this error we will use **Suspense**

## Suspense

A component hence name starts with Capital S

whenever you want to use the `Later` component wrap it `Suspense` `

and it takes a attribute `fallback`  which takes JSX which shallbe shown until the `Later` is available (Loading/Shimmer/place holder)

```jsx
<Suspense fallback={<Compoent/>}><Later></Suspense>
```
