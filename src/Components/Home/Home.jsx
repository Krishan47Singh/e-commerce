import "./home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "../Product/Products";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
const Home = () => {
    return (

        <div className="container">
            <h1>TECH HEAVEN</h1>
            <Router>
                <div className="lnk">
                
                <Link to="/products">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/cart">Cart</Link>  
                </div>
                


                <Routes>
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>

            </Router>
            <Footer/>

        </div>

    )
}
export default Home;