import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productSlice";
import { addToCart } from "../Cart/cartSlice";
 import './Products.css';
const Products=()=>{
    const products = useSelector(state => state.products.products);
    const stat = useSelector(state => state.products.stat);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    if (stat === "error") {
        return <div className="load">Please Check Your Code....</div> 
    }
    else if (stat === "wait") {
          return  <div className="load"> Loading ....</div>
    }

    return (
        
        <div className="">
            <h2>PRODUCTS LIST</h2>
            <hr />
            <div className="prdct">
            {
                products.map(product => {
                    return (
                        <div key={product.id} className="box">
                            <h4>{product.title}</h4>
                            <p>
                                <img src={product.image} alt={product.title} width="200" /><br />  
                            </p>
                            <p className="price">
                                 Price: {product.price}
                            </p>
                            <p>
                                <input type="button" value="ADD TO CART" onClick={() => dispatch(addToCart(product))} />
                            </p>
                        </div>
                    )
                })
            } 
            </div>
        
        </div>
    )
}
export default Products;