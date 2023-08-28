import {createSlice} from "@reduxjs/toolkit"
import courseItems from "../coursItem"
const initialState = {
    cartItems:courseItems,
    quantity:5,
     total:0
}

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers:{
       clearCart:(state)=>{
        state.cartItems = []
       },
       removeItem:(state,action)=>{
        const ItemId=action.payload
        state.cartItems=state.cartItems.filter((item)=>item.id !==ItemId)
       },
       increase:(state,action)=>{
       const cartItem= state.cartItems.find((item)=> item.id ===action.payload)
       cartItem.quantity+=1
       },
       decrease: (state, action) => {
        const cartItem = state.cartItems.find(item => item.id === action.payload);
  
        if (cartItem) {
          if (cartItem.quantity === 0) {
              cartItem.quantity===0
          } else {
            cartItem.quantity -= 1;
          }
        }
      },
       calculateTotal:(state)=>{
        let total=0
        let quantity=0
        state.cartItems.forEach((item)=>{
            total+= item.prices * item.quantity
             console.log(item.prices+item.quantity);
            quantity += item.quantity
        })
         state.quantity=quantity
          state.total=total
          console.log(total);
    
       },
    }
})
export const {clearCart,removeItem,increase,decrease,calculateTotal} =cartSlice.actions;
export default cartSlice.reducer