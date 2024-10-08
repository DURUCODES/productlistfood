import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";
export const store = configureStore({
  reducer: {
    food: ProductSlice,
    order: CartSlice,
  },
});
