import { configureStore } from "@reduxjs/toolkit";
import BookingSlide from "./reducer/BookingSlide";
import DoctorSlide from "./reducer/DoctorSlide";
import ProductSlide from "./reducer/ProductSlide";
import UiSlider from "./reducer/UiSlider";
import ServiceCustumerSlide from "./reducer/ServiceCustumerSlide";
import { reducer as formReducer } from "redux-form";
export const store = configureStore({
  reducer: {
    product: ProductSlide,
    doctor: DoctorSlide,
    booking: BookingSlide,
    service: ServiceCustumerSlide,
    form: formReducer,
    UI: UiSlider,
  },
});