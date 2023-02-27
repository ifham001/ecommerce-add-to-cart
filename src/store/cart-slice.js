import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalAmount:0,
        totalQty:0
    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(item=>item.id===newItem.id)
            
            if(!existingItem){
                state.items.push(
                   {
                    id:newItem.id,
                    price:newItem.price,
                    amount:newItem.amount,
                    item:newItem.item,
                    totalPrice:newItem.price * newItem.amount
                   }
                )
                state.totalQty = state.totalQty+ newItem.amount;
                state.totalAmount = state.totalAmount + newItem.amount * newItem.price
            }
            else{
                state.totalQty = state.totalQty+ newItem.amount;
                existingItem.amount = existingItem.amount + newItem.amount;
                state.totalAmount = state.totalAmount + newItem.amount * existingItem.price

            }
        },
        
    
    removeToCart(state,action){
        const id = action.payload;
        const existingItem = state.items.find(item=>item.id===id.id)
        state.totalQty--;
        if(existingItem.amount===1){
            state.items= state.items.filter(item=> item.id !== id.id)
            state.totalAmount= state.totalAmount - existingItem.price
        }
        else{
            existingItem.amount--;
            existingItem.totalPrice= existingItem.totalPrice - existingItem.price;
            state.totalAmount= state.totalAmount - existingItem.price
        }
    }}
})

export const cartAction = cartSlice.actions

export default cartSlice;