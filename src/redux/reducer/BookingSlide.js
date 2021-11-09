import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as BookingService from "../../services/BookingService";

export const getListB = createAsyncThunk("booking/getList", async () => {
    const response = await BookingService.getList();
    return response.data;
});

export const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        value: [],
    },
    reducers: {},
    extraReducers: {
        [getListB.pending]: () => {
            //show loading
        },
        [getListB.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
        [getListB.rejected]: (state, error) => {
            console.log(error);
            state.value = state;
        },
    },
});

export const { getListBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
