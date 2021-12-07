import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as DoctorService from "../../services/DoctorService";

export const getAll = createAsyncThunk("staff/getAll", async () => {
  
  const response = await DoctorService.getAll();
  return response.data.data;
});

export const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    data: [],
    value: {},
  },
  reducers: {},
  extraReducers: {
    [getAll.pending]: () => {
    },

    [getAll.fulfilled]: (state, action) => {
      state.data = action.payload;
    },

    [getAll.rejected]: (state, error) => {
      console.log(error);
      state.data = state;
    },
  },
});

export const { getListDoctor } = doctorSlice.actions;

export default doctorSlice.reducer;
