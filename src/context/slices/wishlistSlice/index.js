import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    like: (state, action) => {
      let index = state.value.findIndex((el) => el._id === action.payload._id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((el) => el._id !== action.payload._id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { like } = wishlistSlice.actions;
export default wishlistSlice.reducer;
