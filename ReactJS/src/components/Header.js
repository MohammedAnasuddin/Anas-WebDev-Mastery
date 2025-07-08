import {button_style} from './Body'
import { HEADER_LOGO_URL } from "../utils/constants"
import { useState } from 'react'
import { Link } from 'react-router'

const Header = ()=>{


  const [button_content, setButton_Content] = useState("Login"); 
  return (
  
    <div className='Header'>
          <div className='logo-container'>
          <img src={HEADER_LOGO_URL}/>
           </div>

          <div className="Navbar">
              <ul id='nav-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* <li>About</li>
                <li>Services</li>
                <li>Contact</li>  */}
                <li  onClick={()=>{button_content=="Login" ? setButton_Content("Logout"): setButton_Content("Login")}}  > {button_content}  </li>      
              </ul>
          </div>
    
    </div>
)
}
export default Header