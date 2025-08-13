import { TProduct } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { colgroup } from "framer-motion/client";
export interface EditProductState {
  product: TProduct | null;
}
const initialState: EditProductState = {
  product: null,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductId: (state, action: PayloadAction<TProduct | null>) => {
      if (action.payload) {
        state.product = action.payload;
      } else {
        state.product = null;
      }
      console.log();
    },
  },
  
});

export const productReducer = ProductSlice.reducer;
export const productAction = ProductSlice.actions;
