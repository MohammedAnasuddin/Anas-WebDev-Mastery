export const DishCard = (props)=>{
    const {price, name} = props;
    return (
        <div style={{width:"max-content", height:"min-content",border:"2px solid darkgray", borderRadius:"8px", backgroundColor:"#f5f3f3f8",margin:"4px",padding:"4px 8px", lineHeight:"2px"}}>
            <p style={{fontSize: "0.95rem" , fontWeight:"bold"}}>{name}</p>
            <h5 style={{fontSize: "0.85rem",color:"#489604ff", fontWeight:"bold"}}>Rs. {price}</h5>
        </div>

    )
}