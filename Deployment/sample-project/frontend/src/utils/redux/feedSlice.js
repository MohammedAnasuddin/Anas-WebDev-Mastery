import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"Feed",
    initialState:null,
    reducers: {
        addFeed : (state,action)=>{
            return action.payload;
        },
        removeFeed: (state,action) => null
    }
})

export const {addFeed,removeFeed} = feedSlice.actions
export default feedSlice.reducer;