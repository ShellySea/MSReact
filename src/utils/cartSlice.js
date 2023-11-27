import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const id = action.payload.card.info.id;
      const index = state.items.findIndex((o) => o.card.info.id === id);
      state.items.splice(index, 1);
      // console.log(current(state.items));
    },
    emptyCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
