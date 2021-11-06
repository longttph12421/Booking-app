import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as DoctorService from "../../services/DoctorService";

export const getListD = createAsyncThunk("doctor/getList", async () => {
    const response = await DoctorService.getList();
    return response.data;
});

export const doctortSlice = createSlice({
    name: "doctor",
    initialState: {
        value: [],
    },
    reducers: {},
    extraReducers: {
        [getListD.pending]: () => {
            //show loading
        },
        [getListD.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
        [getListD.rejected]: (state, error) => {
            console.log(error);
            state.value = state;
        },
    },
});

export const { getListDoctor } = doctortSlice.actions;

export default doctortSlice.reducer;
