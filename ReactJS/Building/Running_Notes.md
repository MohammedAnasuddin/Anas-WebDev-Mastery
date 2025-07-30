# Building With React

## How Real-World Apps are Built

### Step-1 Planning:

1. Exactly Know what to build 
2. Build Wireframe use the site: sneakpeek  

### Step-2: Figure out Components

1. List the Components like Parent and Children Format.

### Step-3: Start with the Layout

1. Start building Top - Level Components

> [!TIP]
> 
>   Repeating Components should be coded once and then used multiple times to maintain modularity.

### Styling Attribute:

In JSX, style Attribute takes JavaScript Object which has CSS properties as Key-Value,

which should be injected using `{}`

```jsx
<div style={{property: value }}
```

*React' s Philosophy write everything in JS*

#### Making Dynamic Components

Constructing same component multiple times using data. 

#### Method-1: using props:

 Passing data to components.

props full form properties

Since components are normal functionals treat props as arguments to that function.

**Syntax:**

Just like attribute and value in a react element.

```jsx
<Functional_Component 
    prop1="value1"
    prop2="value2"
    />
```

React gathers all these properties convert it to a object and passes to the function of the component..    the object is given name of `props` 

props are used using { } in the function JSX

```js
const Function_Component=(props)=>(
<element>{props.property1}</element>
)
```

or You could destructure it.

```js
const Function_Component=({property1, property2})=>(
<element>{property1}</element>
)
```

#### Method-2: using JSON

Data received as JSON

**config-driven UI**:

controlling UI using the data received from backend.

Example, food ordering website shows different restaurants available on the user location.

> [!TIP]
> 
> A good frontend engineer would always care for the data receiving from the api.
> 
> Question api why this data is being shared?
> 
> A good front end engineer always concerned about the  UI and Data Layer

JSON Data are usually large the easy way to pass them:

```js
cosnt JSON_Data={
large key value-pairs
}

<Functional_Component componentData={JSON_Data} />

const Function_Component=(dataOBJ)=>(
<element>{dataOBJ.dataOBJ.property}</element>
)
```

 **Explanation: **React wraps every attribute into an object

```js
<Functional_Component componentData={JSON_Data} />

// React will wrap in a new Object

{
 compoentData: JSON_Data
}

// This new object will be passed 


// when used  
const Function_Component=(dataOBJ)=>(
// here dataOBJ is 
{
 compoentData: JSON_Data
}


to use the properties we need to 
dataOBJ.componentData.property



//Trick: usng destructuring
const {compoentData} = dataOBJ
//This will directly give you the access to the object containg required properties

// use it as compoentData.property
```

**Remember the syntax:**

```js
<Component key_name=data/>

Component= (props)=> {  
const {key_name} = props
}
```

In Real-world, The data will always be a list of objects.

```
[

{
item:1
},
{
item:2
},
{
item:3
}

]
```

#### Creating Reusable Components

**Best Pratices:**

1. Always destructor your props
   
   ```js
   const {property1, property2} = Object_name
   
   //Note: these proprties should exactly match the keys of the object
   ```

2. **Iterate over list of data to create components:**
   
   > [!IMPORTANT]
   > 
   > Always use array methods to iterate .map() .filter(), and reduce() rather than loops .

​    

```js
{
array_list.map(element => <Component prop_idetifier = {element})/>
}

//prop identifier is with what name the function of component receives the prop

Compoent = (prop_identifier)=>{

}
```

> [!IMPORTANT]
> 
> Hence React gets the markup and logics together at single file via JSX

While dynamically rendering components are rendered React suggest to provide unique key to  each component element being created.

```jsx
{
array_list.map(element => <Component key={unique_key}                     prop_idetifier = {element})/>
}
```

here `key` is the reserved word.

This is to optimize the rendering,  If a new item is added since React knows the id's of the existing components it will just add the new component rather then re-rendering all the existing component's of the same level/container.

> [!IMPORTANT]
> 
> Always use `key` when `.map()` is used.

> [!CAUTION]
> 
> Never use `index` as key
