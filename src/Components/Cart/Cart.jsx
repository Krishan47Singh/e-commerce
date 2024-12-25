import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";
const Cart=()=>{
    const cart=useSelector(state=>state.cart.cart);
    const dispatch=useDispatch();
    let totalCost=0;
    let totalItems=0;    
    for(let row of cart)
    {
        totalItems=totalItems+row.q; 
        totalCost=totalCost+(row.price*row.q);           
    }
    return(
        <>
            <h2>Cart</h2>
            Total items in cart : {totalItems} <br />
            {
                cart.map((product,i)=>{return(
                    <div key={i} className="box"> 
                        <h4>{product.title}</h4>
                        <p>
                            <img src={product.image} alt={product.title} width="200" /><br />
                            {product.price} <br />
                            {product.description}
                        </p>
                        <p>
                            Q : {product.q}
                        </p>
                        <p>
                            <input type="button" value="Remove from cart" onClick={()=>dispatch(removeFromCart(i))} />
                        </p>
                        <hr />
                    </div> 
                )})
            }
            <hr /> <hr />
            Total cost : {totalCost}
        </>
    );
}
export default Cart;