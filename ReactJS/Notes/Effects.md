# Effects

Used when a `task` is dependent upon one component life cycle

![How to understand a component's lifecycle methods in ReactJS](https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png)

*Effects* let you run some code after rendering so that you can synchronize your component with some system outside of React.

**Side-Effects :** any operation or action within a component that interacts with the "outside world".

***Effects* let you specify side effects that are caused by rendering itself, rather than by a particular event (user-performed events).**

> **Event vs Effect:**
> 
> Sending a message in the chat is an **event** because it is directly caused by the user clicking a specific button. However, setting up a server connection is an **Effect** because it should happen no matter which interaction caused the component to appear.
> 
> **Effect vs States:**
> 
> `State` holds values and updates them whereas `Effect` is all about performing/trigger actions.

Effects run at the end of a commit after the screen updates. 

- `React` Components needs to be `pure` (same output for same input) , Applying `Effects`  during the rendering may introduce `impurity` from `side-effects (External Events)` which violates the `React` rule.

- Hence `Effects` are applied after the `commit` (component added to `real-DOM`) 

- This also prevents errors of missing DOM-Nodes since before `commit` all the `nodes` are not finalized in the `real-DOM`.

- This is the reason it's a bad practice for DOM-Modifications in JSX expressions

## Implementing Effects:

To implement Effects we use `useEffect` Hook

```jsx
import {useEffect} from 'react'


function Component(){
    useEffect(()=>{

},[Dependency, Array, Optional])
}
```

` useEffect` “delays” a piece of code from running until that render is reflected on the screen.

we wrap the side effect with `useEffect` to move it out of the rendering calculation.

Don't call a `setSate()` inside a `useEffect` they create a infinite loop

    `useEffect: ` calls `setSate()` after rendering.

    `setState`:  re-renders  (Which after commit again calls the `useEffect`)

```jsx
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1);
});
```

### Deciding `useEffect` call:

Most Effects should only re-run when needed rather than after every render.

You can tell React to **skip unnecessarily re-running the Effect** by specifying an array of *dependencies* as the second argument to the `useEffect` call.

```jsx
import {useEffect} from 'react'


function Component(){

useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component  first appears)
  // Does not call for any updates of the component.

}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);

}
```

React will only skip re-running the Effect if **all of the dependencies(elements of the Dependencies Array) you specify have exactly the same values as they had during the previous render.**

### Cleanup Function:

```jsx
useEffect(() =>{

return cleanupFunction
})
```

React will call your `cleanup function` each time before the Effect runs again, and one final time when the component unmounts (gets removed)

The cleanup function should stop or undo whatever the Effect was doing.

### Effect in Development Mode:

React intentionally remounts your components in development to find bugs like in the last example. **The right question isn’t “how to run an Effect once”, but “how to fix my Effect so that it works after remounting”.**

By remounting your component, React verifies that navigating away and back would not break your code. Disconnecting and then connecting again is exactly what should happen.

When you implement the cleanup well, there should be no user-visible difference between running the Effect once vs running it, cleaning it up, and running it again.

If your Effect fetches something, the cleanup function should either abort the fetch or ignore its result:
