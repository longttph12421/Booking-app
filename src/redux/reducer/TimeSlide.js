import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as TimeSeries from "../../services/TimeService";

export const getWeekByDoctor = createAsyncThunk(
  "week/findByDoctor",
  async (body) => {
    const response = await TimeSeries.findWeekByDoctorAndStatus(body);
    console.log(response.data);
    return response.data;
  }
);

export const TimeSlide = createSlice({
  name: "Time",
  initialState: {
    weeks: [],
    days: [],
  },
  reducers: {},
  extraReducers: {
    [getWeekByDoctor.fulfilled]: (state, action) => {
      state.weeks = action.payload;
    },

    [getWeekByDoctor.rejected]: (state, error) => {
      console.log(error);
      state.weeks = state;
    },
  },
});

export const { getById } = TimeSlide.actions;

export default TimeSlide.reducer;
