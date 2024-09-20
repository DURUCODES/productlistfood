import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { name, price, quantity, image } = action.payload;

      const existingItem = state.food.find((item) => item.name === name);

      if (existingItem) {
        // If it exists, update the quantity and total price
        existingItem.quantity++;
        state.totalPrice += price;
      } else {
        // If it doesn't exist, add new item to the cart
        state.food.push({ name, price, quantity: 1, image });
        state.totalPrice += price;
      }

      // Update total quantity
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      const name = action.payload; // Change to use name or provide id in the payload
      const findItem = state.food.find((item) => item.name === name);
      if (findItem) {
        state.totalPrice -= findItem.price * findItem.quantity;
        state.totalQuantity -= findItem.quantity;
        state.food = state.food.filter((item) => item.name !== name);
      }
    },

    increaseQuantity(state, action) {
      const name = action.payload;
      const findItem = state.food.find((item) => item.name === name);
      if (findItem) {
        findItem.quantity++;
        state.totalPrice += findItem.price;
        state.totalQuantity++;
      }
    },

    decreaseQuantity(state, action) {
      const name = action.payload;
      const findItem = state.food.find((item) => item.name === name);
      if (findItem && findItem.quantity > 1) {
        findItem.quantity--;
        state.totalPrice -= findItem.price;
        state.totalQuantity--;
      }
    },
    clearCart(state) {
      state.food = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} = CartSlice.actions;

// Export the reducer
export default CartSlice.reducer;
