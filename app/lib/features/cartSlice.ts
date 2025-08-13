import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    decrementCart: (
    state,
    action: PayloadAction<{ id: number; quantity: number; price: number }>
    ) => {
    const existingItem = state.items.find(item => item.id === action.payload.id);
    if (!existingItem) return; 

    const decrementQuantity = Math.min(action.payload.quantity, existingItem.quantity);
    existingItem.quantity =existingItem.quantity - decrementQuantity;
    state.totalPrice -= action.payload.price * decrementQuantity;

   
    },
    deleteCart: (
    state,
    action: PayloadAction<{ id: number; }>
    ) => {
    const existingItem = state.items.find(item => item.id === action.payload.id);
    if (!existingItem) return; 

    state.totalPrice -= existingItem.price * existingItem.quantity;
    state.items = state.items.filter(item => item.id !== action.payload.id);

   if (state.totalPrice < 0) state.totalPrice = 0;
    }
    
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
