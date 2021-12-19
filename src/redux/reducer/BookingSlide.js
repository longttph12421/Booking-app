import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as BookingDetailService from "../../services/BookingDetailService";

export const getListBooking = createAsyncThunk("booking/getList", async () => {
    const response = await BookingDetailService.getAllBooking();
    return response.data.data;
});

export const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        value: [],
    },
    reducers: {},
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

export const { getListBookingDetail } = bookingSlice.actions;

export default bookingSlice.reducer;
