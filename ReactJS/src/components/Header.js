import {button_style} from './Body'
import { HEADER_LOGO_URL } from "../utils/constants"
import { useState } from 'react'
import { Link } from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import  UserInfo  from '../utils/contexts/UserInfo';
import { useSelector } from 'react-redux';

const Header = ()=>{

  
  const cartItems = useSelector((store)=> store.cart.items)
  const [button_content, setButton_Content] = useState("Login"); 

  const onlineStatus = useOnlineStatus();
  const data = useContext(UserInfo);
  console.log("UseINfo in Header:", data)
  const {name:userName} = data;
 console.log("Cart Length: ",cartItems)
  
  return (
  
    <div className='Header'>
          <div className='logo-container'>
          <img src={HEADER_LOGO_URL}/>
           </div>

          <div className="Navbar">
              <ul id='nav-list'>
                <li>INTERNET: {onlineStatus ? <span style={{ animation: "fadeIn 1s infinite alternate"}}>🟢</span>: "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart- {cartItems.length} items</Link></li>
                {/* {
                   userName=="guest" ? <li>Hey, {userName}!!</li>
                   :
                   <li  onClick={()=>{button_content=="Login" ? setButton_Content("Logout"): setButton_Content("Login")}}  > {button_content}  </li>      
                } */}

                <li>Hey, {userName}</li>
              
              
              </ul>
          </div>
    
    </div>
)
}
export default Header