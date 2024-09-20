import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  food: [],
};

const ProductSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoods(state, action) {
      state.food = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { setFoods } = ProductSlice.actions;
