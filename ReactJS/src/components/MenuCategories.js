import DishContainer from "./DishContainer";
import { DishCard } from "./DishCard";
import { useState } from "react";

const MenuCategories = (props)=>{
const {category, dishes, showDishes,index, changeReveal} = props;
// const [showDishes, setShowDishes] = useState(false)
const revealDishes = ()=> {
    // setShowDishes((!showDishes))
    changeReveal(index)
}

const valid_dishes = dishes.filter((e) => e?.card?.info !=undefined);
// console.log("Dishes for the category are: ",valid_dishes)
    return (
        <div style={{display:"flex" , flexDirection:"column"}}>
            
                <h3 onClick={revealDishes}  style={{ color: "orangered", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
  {category}
 
  {
    showDishes ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path></svg>
    : 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
   
  }
</h3>
                
        
                    {
                    showDishes && <DishContainer valid_dishes={valid_dishes}/>
                    }
                
             {/* <div className="category-dishes-container" style={{display: "flex", flexDirection: "row", flexWrap:"wrap"}}>
                 {
                    valid_dishes.map((e) => <DishCard key={e?.card?.info?.id} name= {e?.card?.info?.name} price ={e?.card?.info?.price ? (e?.card?.info?.price)/100 : (e?.card?.info?.defaultPrice)/100 } />)
             }
               </div>  */}
                
                
            
            
        </div>
    )
}

export default MenuCategories;