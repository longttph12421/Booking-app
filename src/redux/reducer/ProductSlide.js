import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ProductService from "../../services/ProductService";

export const getList = createAsyncThunk("product/getList", async () => {
  const response = await ProductService.getList();
  return response.data.data;
});

export const addToCart = createAsyncThunk("product/addToCart", async (data) => {
  const response = await ProductService.addProduct(data);
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
    product :{},

  },
  reducers: {},
  extraReducers: {
    [getList.pending]: () => {
      //show loading
    },

    [getList.fulfilled]: (state, action) => {
      state.data = action.payload;
    },

    [getList.rejected]: (state, error) => {
      console.log(error);
      state.data = state;
    },
    
    [findById.pending]: () => {
      //show loading
    },

    [findById.fulfilled]: (state, action) => {
      state.product = action.payload;
    },

    [findById.rejected]: (state, error) => {
      console.log(error);
      state.product = state;
    },
  },

});

export const { getListProduct } = productSlice.actions;

export default productSlice.reducer;
