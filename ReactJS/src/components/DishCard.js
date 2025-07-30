import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const DishCard = (props)=>{
    const dispatcher = useDispatch();
    const {price, name , showButton} = props;

    const handleAdd = (ordered_dish)=>{
        dispatcher(addItem(ordered_dish))
    }
    return (
        <div style={{width:"max-content", height:"max-content",border:"2px solid darkgray", borderRadius:"8px", backgroundColor:"#f5f3f3f8",margin:"4px",padding:"4px 8px", lineHeight:"2px"}}>
            <p style={{fontSize: "0.95rem" , fontWeight:"bold"}}>{name}</p>
            <h5 style={{fontSize: "0.85rem",color:"#489604ff", fontWeight:"bold"}}>Rs. {price}</h5>
            {
                showButton == undefined ?
                <button 
                style={{padding:"6px",color:"white", backgroundColor:"#2b2b2bff", border:"2px solid white", borderRadius:"6px", fontWeight:"bold"}}
                onClick={()=>{handleAdd(props)}}
                > Add + </button>
                :
                <></>
            }
        </div>

    )
}