# Architecture

## Monolith:

Everything(API, UI, Auth, DB ) Inside a Single Project

Whole project uses a single tech stack.

## Microservices

Different Services for Dedicated Operations/Jobs ( this is known as  Concern Separated or Single Responsibility Principle)

These services combine to form a Bigger Project. 

Unlike Monolith , Here Services work independently so they can operate on their comfortable tech-stack.

All of these services run on their specific ports. All of these ports can be deployed on a single domain_url .

These services interact by calling to the port of the required service using a url



# Interaction Using ReactJS

## Making API Calls:

### Approach-1:

`Load -> API -> Render`

On Initial Load, Website renders UI after successful response form API 

### Approach-2:

`Load -> Render(Skeleton) -> API -> Re-Render`

Most-Used Approach Since in `Approach-1` For a Moment There would be nothing , but when `response` received from API Everything Appears Suddenly.

> Re-Renders won't cost the performance of website?
> 
> React 's Re-Render Cycles are pretty fast this won't be a problem 



## 

## useEffect() Hook

**purpose:** 

```js
// Syntax :  has 2 Arguments
useEffect(callback_Arrow,[Dependency_Array])
```

This callback function is called after the `component` renders. 



### Getting the Data

We use `fetch` to get the response from the API 

`fetch` is provided by  `Browser / JS Engine`

`fetch` returns a `Promise` Hence, call it using `async-await`



#### CORS Policy

Browsers does not allow to make request form origin to another origin.

To **Bypass:**  use the extension allow CORS , Turn it on.

As soon as we get Data we call `setState_Varaible` which sets the new data

which can be used to map and render all the components.

> [!TIP]
>
> Always use Optional Chaining( **?.** )  to handle JSON_Data

So make the initial value of state_variable as `[]` to load nothing until data arrives. 



### Using a Spinner until Data is Received: 

The Empty UI during the call leads to Bad UX.

#### Conditional Rendering: 

```jsx
// Using if:
if(state_variable.length == 0){ //Assume state_varaible is a List
     return <Spinner/>
} 
       return <Component/> 
```

```jsx
// Shorthand: 
return condition ? <Spinner/> : ( <Component/> )
```

When the data is received `setState_variable` will be called and above `if-condition` will be `false` hence rendering the required `component`

When exactly the  `useEffect()` is called? If After Return is encountered how is the
`useEffect` inside the function is executed it has lost the control?

 



> [!IMPORTANT]
>
>  Spinners does not leads to a good UX hence always use Shimmers

### Using Shimmers

**Shimmer-ui: ** Reassembles the page's actual ui (fake-ui  of original U I)
