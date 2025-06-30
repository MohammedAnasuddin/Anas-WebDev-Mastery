import ReactDOM from 'react-dom/client'
import React from 'react'
import {useState} from 'react'
function NameDisplay({ user_name }) {
  return <h4>The Name : {user_name}</h4>;
}

const Body=()=>{
  const [user_name, setUserName] = useState("john")
  const [version, setVersion] = useState(0)

  function updateName(){
    setUserName("Anas") 
    setVersion(1)
  }

  return(
    <div>
      <NameDisplay key={version} user_name={user_name} />
      <button onClick={updateName}> Change </button>
      <button onClick={()=>{setVersion(0)}}> Reset </button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Body/>)