# Redux

Redux works in data layer.

Redux is not mandatory in project.

use Redux in data oriented projects where large no. of data-exchange occurs and read-write operations occur. use it wisely.

> All the applications built using redux can also be build without redux.

Redux a external library just like react-router.

Zustand is the alterative of Redux.

## Why to use Redux

Redux provides easy debugging via browsing extension.

Redux offers two libraries:

`REact-Redux` and `Redux-Toolkit` (aka `RTK`)

Redux has simplified alot. hence `Redux-Toolkit` is the newer way to write redux.

The **Redux Toolkit** package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"

## Theory

A Global Storage Place holder. But as the data gros manging it would be difficult.

hence we have `splices`

#### Slices

small portions in redux store. these are logical parts separated for concerned use.

Eg: user Slice for User Info, cart slice for order data, theme 

### Modifying the slices

Whenever a button is clicked(Event occurred)  a action is *dispatched*  and function is called. and this function modifies the `slice`

to modify a `slice` a  function will be needed. this function is known as `reducer`

>  only `reducer` functions can modify the slice of redux store.  the reducer function is called by the dispatched `action` in response to an `Event`. 

### Accessing the Modified Slice

we use a `selector` to read data from the Redux Store and updates the component.

using an `selector` to get data for updating component is known as *subscribing to the store*

![](G:\SKILLS\Full%20Stack%20Devlopment\WEB%20DEV\Learning-Web-Devlopment-MERN-Stack\ReactJS\Notes\Images%20and%20Diagrams\Redux%20Working.png)

## Implementing Redux

  install `npm install @reduxjs/toolkit react-redux`

### Creating the store

1. create a JS file in `/utils` 

2. import `configureStore()`
   
   ```js
   import {configureStore} from '@reduxjs/toolkit';
   
   const appStore = configureStore({});
   
   export default appStore;
   ```

### Adding Store in our App

1. At root level (at div class="root") , import the `provider`

2. >  the things related to redux are imported from `@reduxjs/toolkit`
   > 
   > the things which connects redux to react (like `provider`) are imported from `react-redux`

3. wrap the root div with `Provider` by passing the required store as `props`
   
   1. Make sure, the prop key is `store` 

4. > `Note`
   > 
   > Yo can also wrap the a `redux store` to specific part of the project. 

```jsx
import { Provider } from 'react-redux';
import appStore from './utils/store';

return (
    <Provider store={appStore}>
        <div id="app">
              <Header/>
              <Outlet/>
        </div>
    </Provider>
)
```

### Creating Slices in Redux Store

1. use `createSlice`

2. It takes a `JS-Object` as a configuration.

3. It takes property such as `name` and ``intialState``

4. we can create `reducer functions` using `reducers` property which is a Object which stores all the `actions`(entities to communicate with redux store).

5. Every `actions` has a function (`reducer`) which is called when the corresponding action is dispatched.

6. `reducer` gets two parameters `state` and `action` hence use the `action` it can change the `state` 

7. Define the logic for `reducers`

8. Export the `sliceName.reducer` as default and `sliceName.actions`

```js
import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        action1: (state,action)=>{
            // reducer-1
        },
        action2: (state,action)=>{
            // reducer-2
        },
        actionN: (state,action)=>{
            // reducer-N
        },
        },
    }
)


export default cartSlice.reducer;
export const {action1, action2,actionN} = cartSlice.actions;
```

In this we are *directly mutating the state*

### Adding Slices to Redux Store

Global store will have its own `reducers` to contact with it's `slices`

1. import the slice reducers

2. In the global store , create `reducer` property , add new reducers as
   
   1. `sliceIdentifier : sliceReducer`

```js
import cartReducer from './cartSlice'
const appStore = configureStore({

    reducer: {
        cart: cartReducer,
    }
});
```

> For Global store it's `reducer` Because Redux accepts only one root reducer.
> For Slices, the configuration_property is `reducers` slices can have multiple reducers.

### Reading the data (Subscribing)

we need to use `selector` to interact with redux store ,  which is a *hook* from `react-redux` . takes a callback which lets us subscribe to get the required data/values.

```js
const cartItems = useSelector((store)=> store.cart.items)
```

Always subscribe to the right portion of the Store, 

>  `NOTE`
> 
> Don't subscribe the whole store and get the required data by chaining. This will have a bad effect on performance.   
> 
> Only subscribe to the data required by the component.  selector selects the required data hence they are called `selectors`

### Modifying Store data

Includes two Steps:

#### 1. Dispatching Action

1.   create a dispatcher using hook `useDispatch`

2. import the required action from the `slice`

3. call the `action` with the *new_value* as parameter to the dispatcher.

4. Redux converts the updated_data to a object  where the `property` has a update_data. Hence we use `action.payload` to get newest data.  

```jsx
  import { useDispatch } from "react-redux";
  const dispatcher = useDispatch();

  const handleAdd = (ordered_dish)=>{
        dispatcher(addItem(ordered_dish))
    }
```

> In Vanilla Redux , you can't update the state you have to create a copy , update it and then return it,
> 
> But In Redux-toolkit, you have use mutate state for sure. 
> 
> But Redux creates a immutable copy behind the scenes using *immer* JS library. It applies diffing to the old and new state  and returns the immutable state 
