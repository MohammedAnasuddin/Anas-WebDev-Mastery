import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import {Body}  from './components/Body';
const root = ReactDOM.createRoot(document.getElementById("root"));

/* 
. Project Structure
 - Header
  > Logo
  > nav Links
- Body
  >Search Bar
  > Cards_Container
    > Cards
       >Img
       >name of the Restaurat, Rating
       >
- Footer
  > Copyright
  > Links
  > Address
  > Contact

*/

//Tip: Always Start to build the Layout with Top Level Elements
//> We need to define elements before we can use them hence layout is at bottom








//. props
//> passing data to the Compoents 
//> Treat them as Parameters since components are functions




const AppLayout = ()=>(
    <div id="app"> 
    <Header/>
    <Body/>
    </div>
)


root.render(<AppLayout/>);
