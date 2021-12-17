import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as DoctorService from "../../services/DoctorService";

export const getAll = createAsyncThunk("staff/getAll", async () => {
  const response = await DoctorService.getAll();
  return response.data.data;
});

export const findById = createAsyncThunk("staff/findById", async (id) => {
  const response = await DoctorService.findById(id);
  return response.data.data;
});

export const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    data: [],
    value: {},
  },
  reducers: {
    getById: (state, action) => {
      state.data.map((doctor) => {
        if (doctor.id === action.payload) {
          return (state.value = doctor);
        }
        return state.value;
      });
    },
  },
  extraReducers: {
    [getAll.fulfilled]: (state, action) => {
      state.data = action.payload;
    },

    [getAll.rejected]: (state, error) => {
      console.log(error);
      state.data = state;
    },
    [findById.fulfilled]: (state, action) => {
      state.value = action.payload;
    },

    [findById.rejected]: (state, error) => {
      console.log(error);
      state.value = state;
    },
  },
});

export const { getById } = doctorSlice.actions;

export default doctorSlice.reducer;
