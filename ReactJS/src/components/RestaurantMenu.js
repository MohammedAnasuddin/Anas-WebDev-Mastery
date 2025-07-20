
import { useParams } from 'react-router';
import { useMenuData } from '../utils/useMenuData';
import MenuCategories from './MenuCategories';
import DishCard from './DishContainer';
import { useState } from 'react';



const RestaurantMenu = ()=>{
    const {resId} = useParams()
    const resInfo = useMenuData(resId)
    const [showIndex,setShowIndex] = useState(null)



  //Tip: Always use shimmer on top to avoid errors
  //> The code will go below only if the below condition is failed this is Data has been received.
    if(resInfo == null ) { 
        return  <h1 style={{ animation: "fadeIn 1s infinite alternate"}} >Loading .... </h1>
        
    } 
    
    const aboutRestaurant =  resInfo?.cards[2]?.card?.card?.info;
    // const itemsArray =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

    //> To solve this complicate work of traversing we use GraphQL, which only provides the required data.
    // console.table(itemsArray)
   //Doubt : Should we sue local variables how does it work when there is no data in resInfo while initial load
   //x It throws an error since .cards[2] is not available
   //- To avoid this we use optional Chaining (?.)

   const categories = resInfo ?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => e?.card?.card?.itemCards != undefined);
//    console.log("Categories found:",categories)

    return     (
        <div className="menu" style={{display:"flex", flexDirection:"column"}}>
            <div className="title">
                 <h1>{aboutRestaurant.name} <span style={{color:"orangered", fontSize:"20px"}}>{aboutRestaurant.avgRating}</span> </h1>
                  
            </div>
           
            <h3 style={{color: "GrayText"}}>Find us at:  {aboutRestaurant.locality},  {aboutRestaurant.areaName}</h3>
            <h3 style={{color: "orangered"}}>Enjoy: {aboutRestaurant.cuisines.join(", ")}</h3>           
            <h2>We Love To Serve: </h2>
            
            {
                categories.map((e,i) =>  <MenuCategories key={e.card.card.categoryId}  
                style={{margin:"8px", display: "flex" , flexDirection:"column"}} 
                category={e?.card?.card?.title}  dishes={e?.card?.card?.itemCards} 
                showDishes={i == showIndex ? true : false}
                index={i}
                changeReveal={(index)=> {
                    if(index==showIndex){
                        setShowIndex(null)
                    }
                    else{
                        setShowIndex(index)
                    }
                }}
                
                /> )
            }

        </div>
    )
}

export default RestaurantMenu