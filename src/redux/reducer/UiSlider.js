import { createSlice } from "@reduxjs/toolkit";

export const UiSlider = createSlice({
  name: "UI",
  initialState: {
    modal: false,
  },
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
  },
  extraReducers: {},
});

export const { openModal, closeModal } = UiSlider.actions;

export default UiSlider.reducer;
