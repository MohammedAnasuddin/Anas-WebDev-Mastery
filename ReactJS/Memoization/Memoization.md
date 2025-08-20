# 📘 React Memoization (Summary Notes)

## 🔹 1. `useMemo` vs `useCallback`

- **`useMemo`**: Caches the **result of a function**.

- **`useCallback`**: Caches the **function definition** itself.

👉 Example:

```jsx
const memoizedValue = useMemo(() => expensiveComputation(a, b), [a, b]);
const memoizedFn = useCallback(() => handleClick(a, b), [a, b]);
```

---

## 🔹 2. Dummy Expensive Calculation

We created a fake "heavy" calculation that blocks the main thread for 2 seconds.

```jsx
function calculation(id) {
  const start = Date.now();
  while (Date.now() - start < 2000) {} // block for 2s
  return id + "34342";
}
```

---

## 🔹 3. Using `useMemo` to Cache Results

If `details.id` changes, only then re-run the heavy `calculation`.

❌ Wrong (no return):

```jsx
const id = useMemo(() => { calculation(details.id) }, [details.id]);
```

✅ Correct (with `return`):

```jsx
const id = useMemo(() => calculation(details.id), [details.id]);
```

Now React will **reuse the cached `id`** until `details.id` changes.

---

## 🔹 4. Dependency Array

- Think of it as **"When should React re-run this memoized value?"**

- If a variable comes from props/state, include it.

- If the value **never changes**, use `[]`.

- If the value depends on `details.id`, write `[details.id]`.

👉 Example:

```jsx
const id = useMemo(() => calculation(details.id), [details.id]);
```

---

## 🔹 5. Debugging with `console.time` & `console.timeLog`

You can measure how long rendering or calculations take.

```jsx
console.time("Render");   // start timer

const Child = ({ details }) => {
  const id = useMemo(() => calculation(details.id), [details.id]);

  console.timeLog("Render"); // logs elapsed ms since "Render"
  return <h1>{details.name} {id} - {details.role}</h1>;
};

console.timeEnd("Render"); // end timer
```

---

## 🔹 6. Converting Milliseconds to Seconds

To show elapsed time in **seconds with 2 decimal places**:

```jsx
const ms = 2345; // example value
const sec = (ms / 1000).toFixed(2);
console.log(`Rendered in ${sec} sec`);
```

---

## 🔹 7. `React.memo` with `useMemo`

If the parent re-renders but props **don’t change**, `React.memo` prevents re-rendering.  
Inside the child, `useMemo` prevents re-calculating heavy values unnecessarily.

```jsx
const Child = React.memo(({ details }) => {
  const id = useMemo(() => calculation(details.id), [details.id]);

  console.log("Child rendered with prop:", details.name);
  return <h1>{details.name} {id} - {details.role}</h1>;
});
```

---

✅ With this setup:

- If only `details.name` changes, recalculation **doesn’t happen**.

- If `details.id` changes, recalculation **happens**.

## useMemo()

`useMemo` is a React Hook that lets you cache the result of a calculation between re-renders.

### `useMemo(calculateValue, dependencies)`

Call `useMemo` at the top level of your component to cache a calculation between re-renders:

```js
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // ...
}
```

- `calculateValue`: The function calculating the value that you want to cache. *It should be pure, should take no arguments, and should return a value of any type.* React will call your function during the initial render.**On next renders, React will return the same value again if the `dependencies` have not changed since the last render.** Otherwise, it will call `calculateValue`, return its result, and store it so it can be reused later.

- `dependencies`: The list of all reactive values referenced inside of the `calculateValue` code. **Reactive values include props, state, and all the variables and functions declared directly inside your component body**. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like `[dep1, dep2, dep3]`. React will compare each dependency with its previous value using the [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison.

#### Returns On the initial render, `useMemo` returns the result of calling `calculateValue` with no arguments.

During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call `calculateValue` again, and return the result that `calculateValue` has returned.

- `useMemo` is a Hook, so you can only call it **at the top level of your component** or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.

## useCallback()

`useCallback` is a React Hook that lets you cache a function definition between re-renders.

### `useCallback(fn, dependencies)`

Call `useCallback` at the top level of your component to cache a function definition between re-renders:

```js
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

#### Parameters

- `fn`: The function value that you want to cache. It can take any arguments and return any values. **React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the `dependencies` have not changed since the last render.** Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.

- `dependencies`: The list of all reactive values referenced inside of the `fn` code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is [configured for React](https://react.dev/learn/editor-setup#linting), it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like `[dep1, dep2, dep3]`. React will compare each dependency with its previous value using the [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison algorithm.

#### Returns

On the initial render, `useCallback` returns the `fn` function you have passed.

During subsequent renders, it will either return an already stored `fn` function from the last render (if the dependencies haven’t changed), or return the `fn` function you have passed during this render.





#### Code Snippet

```jsx
import React from 'react';
import {memo, useState, useMemo } from 'react';

console.time("Child Rendered at")

  function calculation (id){
    const start = Date.now();
    while(Date.now() - start < 10000){}
    return id+"34342";

  }

const Child = ({details})=> {
  
   const id = useMemo(()=>calculation(details.id), [details.id] )  


  console.timeLog("Child Rendered at")
  return <h1>{details.name} {id} -{details.role}</h1>
}    
```
