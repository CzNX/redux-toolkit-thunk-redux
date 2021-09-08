import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  show: true,
  notification: null,
  changed: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    increment: (state, action) => {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    decrement: (state, action) => {
      state.changed = true;

      state.totalQuantity--;

      const existingItem = state.items.find(
        (item) => item.itemId === action.payload
      );
      if (existingItem.quantity === 1) {
        state.items.pop(existingItem);
        // state.items=state.items.filter(i=>i.id!==action.payload)
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    toggle: (state) => {
      state.show = !state.show;
    },
    showNoti: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        msg: action.payload.msg,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, toggle, showNoti, replaceCart } =
  cartSlice.actions;

export const cartSelector = (state) => state.cart;

export default cartSlice.reducer;
