import { CARD_IMG_BASE_URL as IMG_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
// console.table(resData)
// const data = props.resData.data;
// console.table("Original Props: ",props)
 const {
   name, 
   areaName, 
   locality, 
   cuisines, 
   avgRating, 
   cloudinaryImageId
} = props.resData

  return ( <div className="rest-card">
     <img src={IMG_URL+cloudinaryImageId} style={{width: "100%",height:"50%", borderRadius:"15px 15px 0px 0px"}}/>
     <div className="description">
      <h3 style={{lineHeight:"20px"}}>{name}</h3>
      <h4 style={{fontWeight:'lighter', color:'GrayText', lineHeight:"1.5rem"}}>{`${areaName},  ${locality}`}</h4>
      
      <p style={{fontWeight: "bold", lineHeight:"20px"}}>Cuisine: <span style={{color:"darkslategray", fontWeight:"bolder",}}> {cuisines.join(", ")}</span> </p>
      <p style={{fontWeight: "bold"}}>Rating: <span style={{color:"goldenrod", fontWeight:"bolder"}} >{avgRating}</span> </p>
     </div>
  </div>)
}


export const withBadge = (RestaurantCard)=>{
  const badgePosition = {
      position: 'absolute',
      top: '8px',
      right: '8px',
      zIndex: 1,
      backgroundColor: "black",
      borderRadius:"50%" // optional, ensures it appears above the card
    }

  return function EnhancedComponent(props){
    // console.log("Enhanced props: ",props)
    return (
      <div style={{ position: 'relative' }}>
          <svg style={badgePosition} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="rgba(245, 126, 16, 1)">
          <path d="M12 14V22H4C4 17.5817 7.58172 14 12 14ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
          </svg>
          <RestaurantCard {...props}/>
      </div>
    )
  }

}
export default RestaurantCard;