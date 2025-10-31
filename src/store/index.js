import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import favouriteSlice from "./favourite";

const moboStore = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        favourite :favouriteSlice.reducer,
    }
})

export default moboStore;