import { configureStore } from "@reduxjs/toolkit";
import ProductSlide from "./reducer/ProductSlide";
import UiSlider from "./reducer/UiSlider";
import { reducer as formReducer } from 'redux-form';
export const store = configureStore({
  reducer: {
    product: ProductSlide,
    form: formReducer,
    UI: UiSlider,
  },
});
