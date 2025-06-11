import React from 'react';
import ReactDOM from 'react-dom/client'
//> Now the eleemnt needs to be used in the DOM hence we use ReactDOM

const heading = React.createElement("h1",{},"Hello World from React")
//> the object is used  to provide attributes to the element
//- .createElement returns a Object


const root = ReactDOM.createRoot(document.getElementById("root"))
//> React needs a root to perform DOM operations.

    root.render(heading);
    //> this method converts the Object into a HTML ELement and adds it to the root.

    //> The most costly operation on a web page is to manipulate DOM tree(Nodes)
    //> React's Philosophy is to manipulate DOM using Javascript

//. Creating nested Eleembts using React
/*
Example Element:
    <div>
        <div>
            <h1></h1>
            <h2></h2>
        </div>
    </div>
 */

//> Third Parametr of .createElement() is reponsible for innerHTML for the element
//x Dont use = for attributes object use :
let nested_elements = React.createElement('div',{id:"parent"}, 
    React.createElement("div",{id:"child"}, 
     //- innerHTML parameter is an array which enables us to add multiple elements at the same level
     [React.createElement('h1',{id:"sibling-1"},"I'm Sibling-1"),
      React.createElement('h1',{id:"sibling-2"},"I'm Sibling-2")
     ]
    ))

    root.render(nested_elements)

    //> .render() replaces the innerHTML of the root with the element passed.

//- React can work independently at small scale making it a library.