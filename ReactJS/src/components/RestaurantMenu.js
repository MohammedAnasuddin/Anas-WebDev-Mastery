import {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { RESTAURANT_DATA_URL } from '../utils/constants';

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);
    
    

    useEffect(  ()=>{
     fetchMenu()
    }, [])

  const {resId} = useParams()


    const fetchMenu = async () =>{
        const data = await fetch(RESTAURANT_DATA_URL+resId)
        const jsonData = await data.json();
        console.log("Restaurant Data: ", jsonData);
        setResInfo(jsonData.data)
    }


  //Tip: Always use shimmer on top to avoid errors
  //> The code will go below only if the below condition is failed this is Data has been received.
    if(resInfo == null ) {
        return  <h2>Loading...</h2> 
    } 
    
    const aboutRestaurant =  resInfo?.cards[2]?.card?.card?.info;
    const itemsArray =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

    //> To solve this complicate work of traversing we use GraphQL, which only provides the required data.
    // console.table(itemsArray)
   //Doubt : Should we sue local variables how does it work when there is no data in resInfo while initial load
   //x It throws an error since .cards[2] is not available
   //- To avoid this we use optional Chaining (?.)
    return     (
        <div className="menu">
            <div className="title">
                 <h1>{aboutRestaurant.name} <span style={{color:"orangered", fontSize:"20px"}}>{aboutRestaurant.avgRating}</span> </h1>
                  
            </div>
           
            <h3 style={{color: "GrayText"}}>Find us at:  {aboutRestaurant.locality},  {aboutRestaurant.areaName}</h3>
            <h3 style={{color: "orangered"}}>Enjoy: {aboutRestaurant.cuisines.join(", ")}</h3>           
            <h2>We Love To Serve: </h2>
            <ul>
                {itemsArray.map((item)=> <li key={item?.card?.info?.id}><h4>{item?.card?.info?.name} - <span style={{color:"darkgreen"}}> {typeof(item?.card?.info?.price)=='undefined' ?  "N/A" : (item?.card?.info?.price)/100 }</span></h4></li>)}
              
            </ul>
        </div>
    )
}

export default RestaurantMenu