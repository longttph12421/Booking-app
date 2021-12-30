import { configureStore } from "@reduxjs/toolkit";
import BookingSlide from "./reducer/BookingSlide";
import DoctorSlide from "./reducer/DoctorSlide";
import ProductSlide from "./reducer/ProductSlide";
import UiSlider from "./reducer/UiSlider";
import ServiceCustomerSlide from "./reducer/ServiceCustomerSlide";
import TimeSlide from "./reducer/TimeSlide";
import { reducer as formReducer } from "redux-form";
export const store = configureStore({
  reducer: {
    product: ProductSlide,
    doctor: DoctorSlide,
    booking: BookingSlide,
    service: ServiceCustomerSlide,
    time: TimeSlide,
    form: formReducer,
    UI: UiSlider,
  },
});
