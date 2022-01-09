import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as TimeSeries from "../../services/TimeService";

export const getWeekByDoctor = createAsyncThunk(
  "week/findByDoctor",
  async (body) => {
    const response = await TimeSeries.findWeekByDoctorAndStatus(body);
    return response.data;
  }
);
export const getTime = createAsyncThunk("day/getTime", async (id) => {
  const response = await TimeSeries.findDayByWeekId(id);
  return response.data;
});

export const getDayByDoctor = createAsyncThunk(
  "day/findByDoctor",
  async (body) => {
    const response = await TimeSeries.findDayByDoctorAndDay(body);
    return response.data;
  }
);

export const TimeSlide = createSlice({
  name: "Time",
  initialState: {
    weeks: [],
    days: [],
    time: [],
    dataBooking: {},
  },

  reducers: {
    mapDataBooking: (state, action) => {
      state.dataBooking = action.payload;
    },
  },
  extraReducers: {
    [getWeekByDoctor.fulfilled]: (state, action) => {
      state.weeks = action.payload;
    },

    [getWeekByDoctor.rejected]: (state, error) => {
      console.log(error);
      state.weeks = state;
    },
    [getDayByDoctor.fulfilled]: (state, action) => {
      state.days = action.payload;
    },

    [getDayByDoctor.rejected]: (state, error) => {
      console.log(error);
      state.days = state;
    },

    [getTime.fulfilled]: (state, action) => {
      state.time = action.payload;
    },

    [getTime.rejected]: (state, error) => {
      console.log(error);
      state.time = state;
    },
  },
});

export const { getById, mapDataBooking } = TimeSlide.actions;

export default TimeSlide.reducer;
