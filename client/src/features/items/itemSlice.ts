import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Product } from "../../types/product";
import { getAllItems } from "./items.api";

export interface ItemState {
  data: Product[];
  count:number;
  status: "idle" | "loading" | "failed";
}

const initialState: ItemState = {
  data: [],
  status: "idle",
  count:0
};

export const getPagedAsync = createAsyncThunk("item/getAsync", async (index,pageSize) => {
  const response = await getAllItems();
  const returnValue = {
      data:response.data.slice((0 * index),),
      count:response.data.length
  }
  return returnValue;
});

export const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPagedAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPagedAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload.data;
        state.count = action.payload.count;
      });
  },
});

export const {} = ItemSlice.actions;

export const selectItems = (state: RootState) => state.item.data;


export default ItemSlice.reducer;
