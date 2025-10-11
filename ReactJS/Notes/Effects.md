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



## Avoiding the flicker

When a lazy component (Which takes time to build itself) renders for the first time a quick glimpse is visible before the `useEffect()` gets called this is very bad UX.

The "quick glimpse" or "flicker" you're seeing is a disadvantage of fetching data inside a `useEffect()` hook.



### Solution 1: The Classic Fix (Using a Loading State)

The most direct way to fix this inside your component is to introduce a **loading state**. This prevents the initial, incomplete UI from ever being shown.

1. Add a `loading` state variable, initialized to `true`.
2. In your `useEffect`, set the loading state to `false` after the API call completes (whether it succeeds or fails).
3. In your render logic, check the `loading` state. If it's `true`, show a loading indicator (like a spinner) or return `null`. If it's `false`, render your component with the data.



### Solution 2: The Modern React Router Fix (Loaders)

 Using `react-router-dom` (v6.4+), there is a much better, more integrated way to handle this: **Route Loaders**.

A `loader` is a function you define on your route that runs **before** your component even renders. This means the data is ready and available on the very first render, completely eliminating the flicker and the need for `useEffect` and loading states inside your component.

**How it works:**

1. **Define a `loader` function** for your route. This function fetches the data and returns it.
   
   ```js
   //. File_of_Router_Setup.jsx
   
   // In your router setup file
   import { createBrowserRouter } from "react-router-dom";
   import Profile from "./components/Profile";
   import axios from "axios";
   
   // This loader function fetches data BEFORE the Profile component renders
   export async function profileLoader() {
     const response = await axios.get(SERVER_URL + "/user-profile", { withCredentials: true });
     return response.data;
   }
   
   const router = createBrowserRouter([
     {
       path: "/profile",
       element: <Profile />,
       loader: profileLoader, // Assign the loader to the route
     },
     // ... other routes
   ]);
   
   ```
2. **Use the `useLoaderData` hook** in your component to access the data.
3. ```js
   //Component_File.jsx
   import { useLoaderData } from "react-router-dom";
   // ... other imports
   
   function Profile() {
     // No useEffect, no useState for data, no loading state!
     const currentUser = useLoaderData(); // 🚀 Data is here on the first render
   
     // ... rest of your component logic using `currentUser`
     
     if (!currentUser?.data) {
       // This check might still be useful for data integrity, 
       // but the loader handles the "not loaded yet" case.
       return <Navigate to="/login" />;
     }
   
     return (
       // ... your JSX
     );
   }
   
   ```
