import { CARD_IMG_BASE_URL as IMG_URL } from "../utils/constants";

const RestaurantCard = ({resData})=>{
// console.table(resData)
// const data = props.resData.data;
// console.table("Component Props: ",resData)
 const {
   name, 
   areaName, 
   locality, 
   cuisines, 
   avgRating, 
   cloudinaryImageId
} = resData

  return ( <div className="rest-card">
     <img src={IMG_URL+cloudinaryImageId} style={{width: "100%",height:"50%", borderRadius:"15px 15px 0px 0px"}}/>
     <div className="description">
      <h3 style={{lineHeight:"20px"}}>{name}</h3>
      <h4 style={{fontWeight:'lighter', color:'GrayText', lineHeight:"20px"}}>{`${areaName},  ${locality}`}</h4>
      
      <p style={{fontWeight: "bold", lineHeight:"20px"}}>Cuisine: <span style={{color:"darkslategray", fontWeight:"bolder",}}> {cuisines.join(", ")}</span> </p>
      <p style={{fontWeight: "bold"}}>Rating: <span style={{color:"goldenrod", fontWeight:"bolder"}} >{avgRating}</span> </p>
     </div>
  </div>)
}

export default RestaurantCard;