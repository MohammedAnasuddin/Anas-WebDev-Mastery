import React, { useState } from 'react';
import axios from "axios"

function Login() {
const [mail,setMail] = useState("loki@asgard.com")
const [password,setPassword] = useState("Loki@1234")

const handleLogin= async (e)=>{
  e.preventDefault();
  try {
    await axios.post("http://localhost:5000/login",  {
    mail,
    password
  }, {withCredentials:true})
  } catch (error) {
    console.log("Error Log In User: ", error.message)
  }

}

return (
<div className="flex justify-center-safe">

<div className="card w-96 bg-base-200 card-l shadow-sm ">
  <div className="card-body items-baseline">
    <h2 className="card-title mb-4">Login</h2>
    <div className="justify card-actions">
      <label className="floating-label mb-2">
      <input type="mail" placeholder="Email" className="input input-lg" onChange={(e)=> {setMail(e.target.value)}} />
        <span>Email</span>
        </label>
      <label className="floating-label mb-2">
      <input type="password" placeholder="Password" className="input input-lg" onChange={(e)=> {setPassword(e.target.value)}} />
        <span>Password</span>
        </label>
      
     <button className="btn btn-primary" onClick={(e)=>{handleLogin(e)}}>Login</button>
    </div>
  </div>
</div>
</div>
 
);
}

export default Login;
