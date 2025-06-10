# Foundations- React

## Creating Scripts 

Scripts are created to automate the process of running build commands.

Modify the `"scripts"` object  in `package.json`

```js
"script_name": "command_to_run"
//Don't inlcude npx in the command
```

> [!TIP]
>
> To know how to start a unknown project just checkout scripts from package.json of that project.

To execute the script  `npm run script_name` 



## Fundamentals

### React Elements:  

Objects created by `React.createElement()` method

> [!TIP]
>
> Keep the default innerHTML of an element as **"Not Rendered",** when `.render()` fails to load the element will display Not Rendered and we can debug easily.

 

### JSX: JavaScript Syntax

> [!WARNING]
>
> JSX is not a part of React and it's not HTML inside JS

JSX merges the Skeleton(HTML) and Logics(JS) in to one.

JSX replaces Complexity  of creating an element using  `React.createElement()` by utilizing HTML like syntax. and makes the code cleaner.

> [!NOTE]
>
> Both JSX and `React.createElement()` returns the same object.

 JS Engines does not understand JSX , its transpired in browser compatibles form by babel

#### babel

JS transpiler coverts JSX into the code which is understandable by JS Engines or React/Browser.

Makes the JS browser compatible

### Difference between HTML and JSX

- JSX has `class` attribute as `classsName`

- In JSX, the Attributes follows camelCase Style

- Since JSX is closer to JavaScript than to HTML, React DOM uses `camelCase` property naming convention instead of HTML attribute names.

- Everything is converted to a string before being rendered. This helps prevent [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

  Checkout [Introduction to JSX-React.pdf]() 

  ### 

### Multiple Line JSX

Wrap the elements inside parenthesis 

```js
const card = (<h1>Card Title</h1>
               <p> Card Description </p> )
```



## React Components 

> [!WARNING]
>
> Always name components starting with Capital Letter. That's how React Identifies Components.

### Types of Components:

#### Class Based Components -> Old Way

#### Function Components -> New and Most Used

It's just a normal **JavaScript Function which returns JSX (or a React Element)**.

**Common Syntax:** 

```jsx
const Card = ()=> {
return (<h1>Card Title</h1>
                   <p> Card Description</p>)
}

//or 

const Card = ()=> (<h1>Card Title</h1>
                   <p>Card Description</p>)
```

> [!TIP]
>
> Always use arrow functions for creating functional components

#### To Render these Components:

```js
root.render(< Functional_Component />)
```

Since render takes React Elements not components hence to convert component into an react element using `<Component />`   or  `<Component > <Component/>`  

#### Nested Components: aka Components Composition

```js
const card_Gallery = ()=> (< Card/>)
```

#### JS Expression's in JSX:

- Any JS expression can be injected anywhere in JSX using `{ expression }` Even React Elements as well.
- Since attacks might be prone since anything in { } will be executed but JSX prevents it by sanitize.
-  Also  you render function components by calling them.

```jsx
<div>
{Card()}
</div>
```

