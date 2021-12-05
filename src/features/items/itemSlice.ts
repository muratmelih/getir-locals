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

export const getPagedAsync = createAsyncThunk("item/getAsync", async (pageValues:any) => {
  const response = await getAllItems();
  let data:Product[] = response.data;
  if(pageValues.company){
      data = data.filter((a:Product)=> a.manufacturer == pageValues.company);
  }
  if(pageValues.tag){      
    data = data.filter((a:Product)=> a.tags.filter(b=> b.toUpperCase().includes(pageValues.tag.toUpperCase())).length);
  }

  if(pageValues.itemType){
    data = data.filter((a:Product)=> a.itemType == pageValues.itemType);
  }
  
  const returnValue = {
      data:data.slice((((pageValues.index -1)  * pageValues.pageSize)),(((pageValues.index -1)  * pageValues.pageSize)+ pageValues.pageSize)),
      count:data.length
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

export const selectItems = (state: RootState) => state.item;


export default ItemSlice.reducer;
