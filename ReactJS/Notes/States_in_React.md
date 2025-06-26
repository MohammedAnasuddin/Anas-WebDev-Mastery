# States

Components often need to change what’s on the screen as a result of an interaction. 

But this is not possible via updating the local variables which holds the content of the component.

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

# Hooks

Functions starting with `use` are referred as `Hooks`.

> These Hooks can only be called from Top-level (similar to `import`), they can't be called from inside conditions, loops, or other nested functions.

When you call `useState`, you are telling React that you want this component to remember something.

Every time your component renders, `useState` gives you an array containing two values.

### Working of useState():

1. Component renders for first time using the `intial_value`

2. When `state_variable` is updated. This tells React to remember `state_variables` is `updated_value` now and triggers another render. 

3.  React *remembers* that you set `State_variable` to `updated_variable`, it returns `[updated_value, setState_Variable]` instead.

   
