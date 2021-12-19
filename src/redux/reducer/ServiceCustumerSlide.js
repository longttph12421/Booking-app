import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ServiceCustumerService from "../../services/ServiceCustumerService";

export const getListServiceCustumer = createAsyncThunk("service/getList", async () => {
    const response = await ServiceCustumerService.getAllServiceCustumer();
    console.log(response.data.data)
    return response.data.data;
});

export const serviceCustumerSlice = createSlice({
    name: "service",
    initialState: {
        value: [],
    },
    reducers: {},
    extraReducers: {
        [getListServiceCustumer.pending]: () => {
            //show loading
        },
        [getListServiceCustumer.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
        [getListServiceCustumer.rejected]: (state, error) => {
            console.log(error);
            state.value = state;
        },
    },
});

export const { getList } = serviceCustumerSlice.actions;

export default serviceCustumerSlice.reducer;
