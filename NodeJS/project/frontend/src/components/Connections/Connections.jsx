import RequestCard from '../Requests/RequestCard.jsx'
import ShimmerRequest from "../Requests/ShimmerRequest.jsx"
import {useState, useEffect} from 'react';
import axios from "axios";
import {SERVER_URL} from "../../utils/constants";


const Connections = ()=>{
    const [card_details, setCardDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 1. Add loading state

    useEffect(()=>{
        (async ()=>{
            try {
                const response = await axios.get(SERVER_URL+"/user/connections",{withCredentials:true})
                setCardDetails(response.data);
            } catch (error) {
                console.error("Failed to fetch connections:", error);
                // Optionally, set an error state here to show an error message
            } finally {
                setIsLoading(false); // 2. Set loading to false after fetch completes
            }
        })()

    },[])

    // 3. Show shimmer component ONLY while loading
    if (isLoading) {
        return <ShimmerRequest/>
    }
  
    return (
        // 4. Add transition classes for a smooth fade-in effect
        <div className="base-400 border border-blue-400 flex justify-center items-start w-full min-h-96 
                        transition-opacity duration-500 ease-in-out opacity-100">
            <ul className="list m-4 bg-base-100 rounded-box shadow-md w-6/12 min-h-[10rem]">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide p-6">You are Connected to</li>
                {
                    // 5. After loading, show data or a "no connections" message
                    card_details.length > 0 
                        ? card_details.map((element)=>  <RequestCard key={element._id} need="request" details={element}/>)
                        : <li className="p-4 text-center text-gray-500">You have no connections yet.</li>
                }
            </ul>
        </div>
    )
}

export default Connections;