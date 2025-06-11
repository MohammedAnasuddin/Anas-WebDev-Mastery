import React from 'react';
import ReactDOM from 'react-dom/client';

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

const Header = ()=>(
    <div className='Header'>
          <div className='logo-container'>
          <img src='https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY='/>
           </div>

          <div className="Navbar">
              <ul id='nav-list'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>       
              </ul>
          </div>
    
    </div>
)

const RestaurantCard = ()=>(
  <div className="rest-card">
      <h3>Pista House</h3>
  </div>
)

const rest_container_styles = {
  height: "70vh",
  margin: "5px",
  display: "flex",
  flexDirection: "row",
  flexWrap:"row",
  padding: "16px",
  border: "2px solid grey",
  borderRadius: "10px"
}
//> This a object passed to style attribute
//Tip: keep all properties in camelCase remove  and also replace ; to ,
//Tip: For example, border-radius turns into borderRadius
//Tip: Also place the values in String


const Body=()=>(
  <div className="body">
      <div className="search-box">
          
      </div>

      <div className="rest-container" style={rest_container_styles}>
        {/* Repeating Components should be coded once for modularity */}
        {/* Add Cards here */}
          {/* 
          > IN JSX, Inline styles are adding as JS object , where key-value are property:value of the CSS
          > Then the object is given to style attribute using { } (since need to evalaute the object to get the CSS properties)  */}
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>

  </div>
)



const AppLayout = ()=>(
    <div id="app"> 
    <Header/>
    <Body/>
    </div>
)


root.render(<AppLayout/>);
