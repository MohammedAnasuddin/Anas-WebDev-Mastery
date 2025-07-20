import { DishCard } from "./DishCard"
const DishContainer = (props)=>{

// console.log("Valid_dishes: ",valid_dishes)
const {valid_dishes} = props

return(
    <div className="category-dishes-container" style={{display: "flex", flexDirection: "row", flexWrap:"wrap"}}>
                {
                   valid_dishes.map((e) => <DishCard key={e?.card?.info?.id} name= {e?.card?.info?.name} price ={e?.card?.info?.price ? (e?.card?.info?.price)/100 : (e?.card?.info?.defaultPrice)/100 } />)
                }
                </div> 
 
)
}
export default DishContainer;