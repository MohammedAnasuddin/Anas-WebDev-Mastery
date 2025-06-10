//. Setting the root
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

//. 4 Cases to learn:
//> 1. using External React Elements inside React Elements: 
//> 2. using External components inside React Elements: 
//> 3. using External React Elements inside components:  { React_Element}
//> 4. using External components inside React Components:  <Component/>



//. Element
//> Creating Elements of a card
const card_header = <h3>Card Tilte</h3>
const card_subheading = <h5>Subtitle</h5>

//> these are the React Elements


//. Functional Component
//> A JS function which returns JSX

//Note: Always Starts with Capital Letter
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
//> Since .render takes an react Eleemnt as parameter we need to conert componet into React Element  using </>