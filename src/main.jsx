import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import productsReducer from './Components/Product/productSlice';
import cartReducer from './Components/Cart/cartSlice';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        products:productsReducer,
        cart:cartReducer
    }
})

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><App /></Provider>)