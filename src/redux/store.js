import { configureStore } from "@reduxjs/toolkit";
import ProductSlide from "./reducer/ProductSlide";
export const store = configureStore({
  reducer: {
    product: ProductSlide,
  },
});
