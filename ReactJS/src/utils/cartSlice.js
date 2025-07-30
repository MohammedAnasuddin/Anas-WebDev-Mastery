import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state,action)=>{
            state.items.pop()
            // reducer-2
        },
        clearCart: (state,action)=>{
            // reducer-N
            state.items.length =0;
        },
        },
    }
)


export default cartSlice.reducer;
export const {addItem, removeItem,clearCart} = cartSlice.actions;