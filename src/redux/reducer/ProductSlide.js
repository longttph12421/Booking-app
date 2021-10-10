import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ProductService from "../../services/ProductService";

export const getList = createAsyncThunk("product/getList", async () => {
  const response = await ProductService.getList();
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: {
    [getList.pending]: () => {
      //show loading
    },
    [getList.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [getList.rejected]: (state, error) => {
      console.log(error);
      state.value = state;
    },
  },
});

export const { getListProduct } = productSlice.actions;

export default productSlice.reducer;
