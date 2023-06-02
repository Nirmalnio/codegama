"use client"
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const getCartDataFromCookies = () => {
  const cartData = Cookies.get('cart');
  return cartData ? JSON.parse(cartData) : [];
};


const saveCartDataToCookies = cartData => {
  Cookies.set('cart', JSON.stringify(cartData));
};

const initialState = {
  items: getCartDataFromCookies(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      saveCartDataToCookies(state.items);
    },
    deleteItemFromCart(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      saveCartDataToCookies(state.items);
    },
  },
});

export const { addItemToCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;




