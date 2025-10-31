import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState : [],
    reducers : {
        addToFav : (state, action)=>{
            state.push(action.payload);
        },
        removeFromFav:(state, action)=>{
            return state.filter(item=>item.id !== action.payload);
        }
    }
})

export const favouriteAction = favouriteSlice.actions; 
export default favouriteSlice;