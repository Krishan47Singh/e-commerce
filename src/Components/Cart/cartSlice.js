import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[]
};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{            
            const newObj={...action.payload,q:1};
            //console.log("in cart : ",newObj);
            const index=state.cart.findIndex(item=>item.id===newObj.id);
            if(index===-1)
            {
                //console.log("not");
                state.cart.push(newObj);
            }
            else 
            {
                //console.log("yes");
                state.cart[index].q=state.cart[index].q+1;
            }
            
        },
        removeFromCart:(state,action)=>{
            state.cart.splice(action.payload,1);
        }
    }
});

export const {addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;