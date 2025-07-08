import ReactDOM from 'react-dom/client'
import React from 'react'
import {useState, useEffect} from 'react'


const Body=()=>{
const [headings , setHeadings] = useState([])
useEffect(()=>{
  console.log("Component Mounted")
})

function addHeading(){
  
  setHeadings(headings.push("Heading"))
}

return(
  <div>
    {
      headings.map((h) => <h4>{h}</h4> )
    }
   <button onClick={addHeading}>Add a Heading</button>
  </div>
)
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Body/>)