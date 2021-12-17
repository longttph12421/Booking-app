import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ProductService from "../../services/ProductService";

export const getList = createAsyncThunk("product/getAll", async () => {
  const response = await ProductService.getList();
  return response.data.data;
});

export const findById = createAsyncThunk("product/findById", async (id) => {
  const response = await ProductService.findById(id);
  return response.data.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    value: {},
  },
  reducers: {},
  extraReducers: {

    [getList.fulfilled]: (state, action) => {
      state.data = action.payload;
    },

    [getList.rejected]: (state, error) => {
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

export const { getListProduct } = productSlice.actions;

export default productSlice.reducer;
