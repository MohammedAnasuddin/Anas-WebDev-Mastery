# States

Components often need to change what’s on the screen as a result of an interaction. 

But this is not possible via updating the local variables which holds the content of the component.

State allows us to *manage changing data in an application*. **It's defined as an object where we define key-value pairs specifying various data we want to track in the application.**

## Reasons for Local Variables Won't Work:

1. **Local variables don’t persist between renders.** When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
2. **Changes to local variables won’t trigger renders.** React doesn’t realize it needs to render the component again with the new data.

To update a Component we need to:

- **Retain** the data between renders.

- **Trigger** React to Render the Component with new data/updates.  
  
  `useState` provides us these needs by providing a `state_variable` to retain data and `state setter function` to update the `state_variable`and trigger react to render the component again.

## Using useState():

import useState():

```js
import { useState } from 'react';
```

Syntax:

```js
const [state_variable, setState_variable] = useState(initial_value);
```

> [!NOTE]
> 
> State Values can be `const` since there scope is renewed on every setState() call

Always use `setState_Variable_Name` as the name for `setter_function`

> The array returned by `useState` always has exactly two items.
> 
> Hence we perform array_destructuring in the syntax which is similar to:
> 
> ```js
> let variable = useState(inital_value);
> let state_variable = variable[0]
> let setState_variable = variable[1]
> ```

Whenever the state variables updates , react triggers a reconciliation Cycle(re-renders the component) .

Don't create states inside if-else or Loops

### Understanding it's Components:

#### initialState:

- The value you want the state to be initially. It can be a value of any type.

- Is it's a function it will be treated as an *initializer function*. It should be `pure` (same output for same input), `should take no arguments`, and should return a value of any type. React will call your initializer function when initializing the component, and **store its return value as the initial state**.

- The `intializer function` should be pure because:
  
  - - In Strict Mode, React will **call your initializer function twice** in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your initializer function is pure (as it should be), **this should not affect the behavior(since for the same input the output would be the same no matter how many times it has been called).** The result from one of the calls will be ignored.

- `initialState` is ignored after the initial render.

`useState` returns an array with exactly two values: current_state and a `set` function. 

#### setState():

- The `set` function returned by `useState` lets you update the state to a different value and trigger a re-render.

- You can pass the next state directly, or a function that calculates it from the previous state.

- `set` functions do not have a return value.

- ##### Parameters:
  
  - `nextState`: the required state
    
    - `updater_function` : `nextState` can be a pure function (for same reason as `initializer function`) which can only take `previousState` as it's only argument. React will consider it's return vale as `nextState`
    
    - 

- ```jsx
  setCount(count+1)   
  setCount(count+1)
  setCount(count+1)
  console.log(count)
  
  //What will be displayed as Count in UI , 1 or 3?
  //What will be logged?
  ```

- The UI will display the `Count ` value as 1 Since **React waits until *all* code in the event handlers has run before processing your state updates.** This is why the re-render only happens *after* all these `setNumber()` calls.
  
  - Hence `0` is logged since `setCount` is not called yet.

- It is same as:

- ```jsx
  setCount(0+1)   
  setCount(0+1)
  setCount(0+1)
  ```

> This might remind you of a waiter taking an order at the restaurant. A waiter doesn’t run to the kitchen at the mention of your first dish! Instead, they let you finish your order, let you make changes to it, and even take orders from other people at the table.

- This lets you update multiple state variables—even from multiple components—without triggering too many re-renders. But this also means that the **UI won’t be updated until after your event handler, and any code in it, completes*. This behavior, also known as batching.**

##### Utilizing Previous States:

Instead of passing the *next state value* like `setState(nextState)`, you can pass a `updater_function(prevState)` that calculates the next state **based on the previous one in the queue.**

```jsx
setNumber(n => n + 1); //newState: 1
setNumber(n => n + 1); //newState: 2
setNumber(n => n + 1); //newState: 3 

//Final nextState=3 which will be rendered in the UI.

//Thinks as:
setState(nextState): replace currentState with nextState
setState(s=>s+value): add value to the Current state.


//Note: setState(s=>s+value) will takes the currentState 
// considering previous setState() calls. 
```

#### Important Facts:

- The `set` function **only updates the state variable for the *next* render**. If you read the state variable after calling the `set` function, that was on the screen before your call.

- If the new value you provide is identical to the current `state`, as determined by an [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison, React will **skip re-rendering the component and its children.** This is an optimization. 

- React batches state updates. It updates the screen **after all the event handlers have run** and have called their `set` functions. This prevents multiple re-renders during a single event. 

- Calling the `set` function *during rendering* is only allowed from within the currently rendering component. React will discard its output and immediately attempt to render it again with the new state. 

#### Objects and Arrays as States:

In React, `state is considered read-only`, so **you should *replace* it rather than *mutate* your existing objects**.

    **To add new Properties/Element:**

            use spread operator:

```jsx
setState(
    ...obj/array,
    key:value/item
)            
```

#### Keys and States:

You can **reset a component’s state by passing a different `key` to a component.**

```jsx
<button onClick={setVersion(0)}> Reset </button>
// Never directy call the setState direct;y fromthe componets
// They are called as soon as component renders creating a loop
// Throwing "Too many Re-Renders Error"
```

# `useState()` Hook

> These Hooks can only be called from Top-level (similar to `import`), they can't be called from inside conditions, loops, or other nested functions.

When you call `useState`, you are telling React that you want this component to remember something.

Every time your component renders, `useState` gives you an array containing two values.

### Working of useState():

1. Component renders for first time using the `intial_value`

2. When `state_variable` is updated. This tells React to remember `state_variables` is `updated_value` now and triggers another render. 

3. React *remembers* that you set `State_variable` to `updated_variable`, it returns `[updated_value, setState_Variable]` instead.

### Structuring Multiple States

You can have as many state variables of as many types as you like in one component. It is a good idea to have multiple state variables if their state is unrelated.

But if you find that you often change two state variables together, it might be easier to combine them into one.

#### Principles of a Good State Structure:

**The goal behind these principles is to make state easy to update without introducing mistakes. Removing redundant and duplicate data from state helps ensure that all its pieces stay in sync.**

1. **Group related state.** If you always update two or more state variables at the same time, consider merging them into a single state variable.

```jsx
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);  

    //Better way: Since both the values changes together.
     const [position, setPosition] = useState({ x: 0, y: 0 });

    setPosition({
          x: e.clientX,
          y: e.clientY
        });


    //This way they are always in sync. 
```

1. Note: We need to update all the values of State_variable when calling setState(), only updating a single value of a combined_sate_variable leads to errors.

2. **Avoid contradictions in state.** When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes.

3. **Avoid redundant state.** If you can calculate some information from the **component’s props or its existing state variables** during rendering, you should not put that information into that component’s state.
   
   ```jsx
   //Mirroring the props to State
   function Message({ initialColor }) {
     // The `color` state variable holds the *first* value of `initialColor`.
     // Further changes to the `initialColor` prop are ignored.
     const [color, setColor] = useState(initialColor);
   
   // ** ”Mirroring” props into state only makes sense
   // when you want to ignore all updates for a specific prop.**
   ```

4. **Avoid duplication in state.** When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync.

5. **Avoid deeply nested state.** Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

#### Scope of States

State is local to a component instance on the screen. In other words, **if you render the same component twice, each copy will have completely isolated state!** Changing one of them will not affect the other.

Unlike props, **state is fully private to the component declaring it.** The parent component can’t change it. This lets you add state to any component or remove it without impacting the rest of the components.

> `setState` will always re-render the component that owns that state,  
> no matter how deep, how nested, or where you call it from.



## Infinite re - render

```jsx
onClick={revealDishes()} // ❌
```


❌ Problem:
Using revealDishes() (with parentheses) calls the function immediately on render, not on click.
This sets the state (setShowDishes(true)), which causes a re-render, which again calls the function, causing an infinite loop.





## Handling Satte for Each Component:

Each and every  Component instance will have it own state (Checkout the components tab in devTools)
