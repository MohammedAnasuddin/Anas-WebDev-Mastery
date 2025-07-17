# Custom Hooks

create your own Hooks for your application’s needs

These help in sharing logic between components.

Also makes the components more readable by abstracting the external logic.

> #### IMPORTANT
> 
> If you observe multiple components using `useState` and `useEffect`
> 
> in the same way / purpose then extract it and make a separate custom hook.
> 
> When you extract logic into custom Hooks, you can hide the gnarly details of how you deal with some external system or a browser API.

Always start hook names with `use...`

## Handling States in Custom Hooks

Custom Hooks let you share stateful logic, not state itself.

If multiple components use the same custom hook then , Every component will get it's independent `state` .

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

Is equivalent to

```js
// Each Compoennt will receive it's independent state

function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // ...
  }, []);
  // ...
}

function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // ...
  }, []);
  // ...
}
```

> `NOTE`
> 
> The code inside your custom Hooks will re-run during every re-render of your component. 

This is why, like components, custom Hooks and  Because custom Hooks re-render together with your component, **they always receive the latest props and state.**



## When to use Custom Hooks

You don’t need to extract a custom Hook for every little duplicated bit of code. Some duplication is fine.

Use them when you are using `useEffect` to communicate with external system or to do something that React doesn’t have a built-in API for. 

Wrapping it into a custom Hook lets you precisely communicate your intent and how the data flows through it.

By “hiding” your Effect inside `customHooks`, you also prevent someone working on the  component from adding unnecessary dependencies to it.



#### use custom Hooks to wrap Effects:

Because:

1.  data flow to and from your Effects very explicit

2. components focus on the intent rather than on the exact implementation of your Effects.

3.  When React adds new features, you can remove those Effects without changing any of your components.

### Tips to develop a Custom Hook

1. Start by choosing your custom Hook’s name. If you struggle to pick a clear name, it might mean that your Effect is too coupled to the rest of your component’s logic, and is not yet ready to be extracted.
   
   1. Ideally, your custom Hook’s **name should be clear enough that even a person who doesn’t write code often could have a good guess about what your custom Hook does, what it takes, and what it returns.

2. A good custom Hook makes the calling code more declarative by constraining what it does. If your custom Hook  **doesn’t constrain the use cases and is very abstract, in the long run it’s likely to introduce more problems than it solves.**

3. Avoid creating and using custom “lifecycle” Hooks that act as alternatives to existing hooks. `useEffectOnce()` is a big no.



> **escape hatch** : you use them when you need to “step outside React” and when there is no better built-in solution for your use case. `useEffect()` helps to perform escape hatches.
