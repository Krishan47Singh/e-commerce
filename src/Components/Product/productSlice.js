import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    products:[],
    stat:"idle"
};
const productsSlice=createSlice({
    name:'products',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.stat="wait";
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.stat="done";
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.stat="error";
        })
    }
});
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data
    },
  );
export default productsSlice.reducer;