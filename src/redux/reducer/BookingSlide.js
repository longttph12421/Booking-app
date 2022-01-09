import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as BookingDetailService from "../../services/BookingDetailService";

export const getListBooking = createAsyncThunk("booking/getList", async () => {
  const response = await BookingDetailService.getFindByStt1();
  return response.data.data;
});

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    value: [],
    dataMapping: {},
  },
  reducers: {
    dataMapping: (state, action) => {
      state.dataMapping = action.payload;
    },
  },
  extraReducers: {
    [getListBooking.pending]: () => {
      //show loading
    },
    [getListBooking.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [getListBooking.rejected]: (state, error) => {
      console.log(error);
      state.value = state;
    },
  },
});

export const { dataMapping } = bookingSlice.actions;

export default bookingSlice.reducer;
