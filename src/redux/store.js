import { configureStore } from "@reduxjs/toolkit";
import BookingSlide from "./reducer/BookingSlide";
import DoctorSlide from "./reducer/DoctorSlide";
import ProductSlide from "./reducer/ProductSlide";
export const store = configureStore({
  reducer: {
    product: ProductSlide,
    doctor: DoctorSlide,
    booking: BookingSlide,
  },
});
