import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ServiceCustomerService from "../../services/ServiceCustomerService";

export const getListServiceCustomer = createAsyncThunk("service/getList", async () => {
    const response = await ServiceCustomerService.getAllServiceCustomer();
    console.log(response.data.data)
    return response.data.data;
});

export const serviceCustomerSlice = createSlice({
    name: "service",
    initialState: {
        value: [],
        detail: {},

    },
    reducers: {
        getById: (state, action) => {
            state.detail = action.payload;
        },
        clear: (state, action) => {
            state.detail = action.payload;
        },
    },
    extraReducers: {
        [getListServiceCustomer.pending]: () => {
            //show loading
        },
        [getListServiceCustomer.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
        [getListServiceCustomer.rejected]: (state, error) => {
            console.log(error);
            state.value = state;
        },
    },
});

export const { getById } = serviceCustomerSlice.actions;

export default serviceCustomerSlice.reducer;
