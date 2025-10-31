import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        products: [],
        count: 0,
    },
    reducers:{
        addToCart : (state, action)=>{
            state.products.push(action.payload);
            state.count = state.products.length;
        },
        removeFromCart:(state, action)=>{
            state.products = state.products.filter(item=>item.id !== action.payload);
            state.count = state.products.length;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;