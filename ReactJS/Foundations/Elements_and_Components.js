//. Setting the root
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

//. JSX
//> JSX merges the Skeleton(HTML) and Logics(JS) in to one
//> It's the JS version of the HTML.
//> Provides Clean and Readable way to to create REact Elements

//. Components Composition:

//> 1. using External React Elements :  { React_Element}
//> 2. using External components :  <Component/>



//. Element
//> Creating Elements of a card
const card_header = <h3>Card Tilte</h3>
const card_subheading = <h5>Subtitle</h5>

//> these are the React Elements
//> To use then under JSX , wrap them with {element_name}
//- IF just element name is used React will treat it as just text 
//- { } used to get the React Element Object holded by that element(variable)
//> It's like num = 1000  to get , 1000 you can't us enum in JSX we need to use {num} 

//. Functional Component
//> A JS function which returns JSX
//Note: Always Starts with Capital Letter
//> To use them wrap them < Component /> 
//- This is Equal to React.createElement(Component)
//Tip: If the Component has Children use <Component> </Component>
const Card_Description = ()=>{
    return (
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sed!</p>
    )
}


const Card = ()=>{
//. Case 3 and 4
    return(
          //> To render React Elements Inside a Component use {react_element}
        <div id="card_container">
          {card_header}
          {card_subheading}
          <Card_Description/>
        </div>
    );
}




//> Rendering Card
root.render(<Card/>)
//> Since .render takes an react Element as parameter we need to convert component into React Element  using </>


//. Assignment
const nested_header_method = React.createElement("div",{className:'title'}, [
  //- Always use className attribute rather than class 
  
  React.createElement('h1',{},"Created Using React.createElement()"),
  React.createElement('h1',{},"Heading-1"),
  React.createElement('h2',{},"Heading-2"),
  React.createElement('h3',{},"Heading-3"),
])

root.render(nested_header_method);

const jsx_header = (
  <div>
    <h1>Created using JSX</h1>
    <h1>Heading-1</h1>
    <h2>Heading-2</h2>
    <h3>Heading-3</h3>
  </div>
);

root.render(jsx_header);


const Func_Component = ()=>{
  return (
    <div>
    <h1>Created using Functional Component</h1>
    <h1>Heading-1</h1>
    <h2>Heading-2</h2>
    <h3>Heading-3</h3>
  </div>
  );
}

root.render(<Func_Component/>)


//. Nav Bar
const Search_Bar = ()=>(
  <form>
    <input id='search'></input>
  </form>
)

const Logo = ()=>(
  <img src='https://placehold.co/125x125' id='logo'></img>
)

const Icon = ()=>(
  <img src='https://placehold.co/125x125' id='icon'></img>
)

const Header_Container = ()=>(
  <div id="HC">
    <Logo/>
    <Search_Bar/>
    <Icon/>
  </div>
);

root.render(<Header_Container/>);