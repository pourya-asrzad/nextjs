import { TProduct } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface EditProductState {
  product: TProduct | null;
}
const initialState: EditProductState = {
  product: null,
};

export const editProductSlice = createSlice({
  name: "editProduct",
  initialState,
  reducers: {
    setEditId: (state, action: PayloadAction<TProduct | null>) => {
      if (action.payload) {
        state.product = action.payload;
      } else {
        state.product = null;
      }
    },
  },
});

export const editProductReducer = editProductSlice.reducer;
export const editProductAction = editProductSlice.actions;
