"use client"
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const getCartData = () => {
  const cartData = Cookies.get('cart');
  return cartData ? JSON.parse(cartData) : [];
};

const getTotalAmount = () => {
  const totalAmount = Cookies.get('totalAmount');
  return totalAmount ? parseFloat(totalAmount) : 0;
};


const saveCartDataToCookies = cartData => {
  Cookies.set('cart', JSON.stringify(cartData));
};

const initialState = {
  items: getCartData(),
  totalAmount: getTotalAmount()
 };

const calculateTotalAmount = cartItems => {
  let total = 0;
  cartItems.forEach(item => {
    total += item.price * item.quantity;
  });
  return total;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItm = state.items.find(item => item.id === newItem.id);
      if (existingItm) {
        existingItm.quantity = existingItm.quantity + 1;
      } else {
        newItem.quantity = 1;
        state.items.push(newItem);
      }
      state.totalAmount = calculateTotalAmount(state.items);
            saveCartDataToCookies(state.items);
    },
    deleteItemFromCart(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      state.totalAmount = calculateTotalAmount(state.items); 
      saveCartDataToCookies(state.items);
    },
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        item.quantity = item.quantity + 1;
        state.totalAmount = calculateTotalAmount(state.items); 
         saveCartDataToCookies(state.items);
      }
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
        } else {
          state.items = state.items.filter(item => item.id !== itemId);
        }
        state.totalAmount = calculateTotalAmount(state.items); 
        saveCartDataToCookies(state.items);
      }
    },
  },
});

export const {addItemToCart,deleteItemFromCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
