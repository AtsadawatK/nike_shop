// lib/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    
  name: 'cart',
  initialState: {
    products:[],
    totalQuantity: 0,
    totalAmount: 0,
    allQuantity:0,
    allAmount:0,
  },
  reducers: {
     addProducts: (state,action) => {
     const newProducts = action.payload;
     const existingproducts = state.products.find(product => product.id === newProducts.id);
     if (!existingproducts) {
        state.products.push({
          id: newProducts.id,
          price: newProducts.price,
          quantity: 1,
          img: newProducts.img,
          totalPrice: newProducts.price,
          name: newProducts.name,
        });
        state.totalQuantity++;
      } else {
        existingproducts.quantity++;
        existingproducts.totalPrice = existingproducts.quantity * newProducts.price;
      }
      state.allAmount = state.products.reduce((sum, product) => sum + product.totalPrice, 0);
      state.allQuantity = state.products.reduce((sum, product) => sum + product.quantity, 0);
    }, 

    /* addProducts:(state,action) => {
        state.products.push(action.payload)
    } */
  },
});

// Export actions และ reducer
export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;
