import { useSelector } from "react-redux";
import { DishCard } from "./DishCard";
import Order_Item from "./Order_Item";

const Cart = ()=>{

    const order_items = useSelector((store) => store.cart.items)
    console.log(order_items);

    if(order_items.length==0){
        return (
            <h1> Start Adding Items to Begin Checkout </h1>
        )
    }

return(
    <div className="container">
    <h1>Your Cart - Checkout</h1>
    <div style={{display:"flex", justifyContent: "center", alignItems:"center",border:"2px dotted black", flexDirection:"column", padding:"56px"}} className="Bill">
        <h3>Bill to Be Paid</h3>
        <div className="Items" style={{width:"100%"}}>
            {
                order_items.map((e) => <Order_Item style={{width:"100%", margin:"4px"}} name={e.name} rate={e.price}  /> ) 
            }
            <div style={{width:"inherit", borderBottom:"2px dashed black"}}></div>

            <div className="Total" style={{display: "flex",justifyContent: "space-evenly"}}>
                <h2>Total</h2>
                <h2>{order_items.reduce((acc,e) => (acc+e.price),0)}</h2>
            </div>
        </div>

    </div>
    </div>
)
}

export default Cart;