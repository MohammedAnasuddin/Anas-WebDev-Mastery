const Order_Item = (props)=>{
const {name, rate} = props
    return(

        <div data-testid="order_item" className="list" style={{width:"100%" ,margin:"4px", padding:"4px", display:"flex" , justifyContent:"space-evenly"}}>
            <h4>{name}</h4>
            <h4 style={{color: "#489604ff"}}>{rate}</h4>
        </div>

    )
}
export default Order_Item