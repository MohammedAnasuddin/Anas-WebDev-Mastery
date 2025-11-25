import axios from "axios"
import {SERVER_URL} from '../utils/constants'
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/redux/feedSlice"
import { useEffect, useState } from "react"
import FeedCard from "./FeedCard"

const Feed = ()=>{
const dispatch = useDispatch()
const userFeed = useSelector((store)=>store.feed)
const [cards_data,setCardsData] = useState([])
const [current_card, setCurrentCard] = useState(0);
const [cardsOver, setCardsOver] = useState(false);
useEffect(()=>{
   (async ()=> {
        const required_data =  await getFeedData();
        setCardsData(required_data)
   })()
   
},[])

const bringNextCard = ()=>{
    if(current_card === (cards_data.length)-1){
        setCardsOver(true)
    }
    else{
        setCurrentCard((current_card)=> current_card+1)
    }

}


    const getFeedData = async ()=> {

        try {
            if(userFeed == null){
                const res_feed = await axios.get(SERVER_URL+"/feed",{withCredentials:true})
                dispatch(addFeed(res_feed.data.data))
                return res_feed.data.data
            }
        } catch (error) {
            console.log(error.message)
        }

        
    }

    if(cardsOver){
        // setCurrentCard(0);
            setCurrentCard(0)
       

    }
     
    

    return (
        <div>
            <h2 className="text-2xl font-semibold antialiased font-mono text-center m-2">Devs To Connect</h2>
            <FeedCard user={cards_data[current_card]}  nextCard = {bringNextCard}/>
        </div>
    )

}

export default Feed;