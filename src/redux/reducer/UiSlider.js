import { createSlice } from "@reduxjs/toolkit";

export const UiSlider = createSlice({
  name: "UI",
  initialState: {
    modal: false,
    loading: false,
  },
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    showLoading: (state) => {
      state.loading = true;
    },
    hiddenLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: {},
});

export const { openModal, closeModal, showLoading, hiddenLoading} = UiSlider.actions;

export default UiSlider.reducer;
