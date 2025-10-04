import RequestCard from '../Requests/RequestCard.jsx'
import ShimmerRequest from "../Requests/ShimmerRequest.jsx"
import {useState, useEffect} from 'react';
import axios from "axios";
import {SERVER_URL} from "../../utils/constants";


const Connections = ()=>{
    const [card_details,setCardDetails] = useState([])
    useEffect(()=>{
        (async ()=>{
            const response = await axios.get(SERVER_URL+"/user/connections",{withCredentials:true})
            setCardDetails(response.data);
        })()

    },[])

    if(card_details.length === 0) {
        return <ShimmerRequest/>
    }
  
    return (
              <div className="base-400 border border-blue-400 flex justify-center items-start w-full min-h-96">
                  
                  <ul className="list m-4 bg-base-100 rounded-box shadow-md w-6/12 h-1/6  ">
        
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide p-6">You are Connected to</li>
        {
            card_details.map((element)=>  <RequestCard key={element._id} need="request" details={element}/>)
        }
        
        
        
        
       
      
      
        
      </ul>
                  
              </div>
    )
}

export default Connections;