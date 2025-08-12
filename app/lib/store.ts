import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counterSlice";
import { cartReducer } from "./features/cartSlice";
import { editProductReducer } from "./features/editProductSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      cart: cartReducer,
      editProduct: editProductReducer,
    },
    devTools: true,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
