import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Product } from "../../types/product";
import { SortEnum } from "../../types/sortEnum";
import { getAllItems } from "./items.api";

export interface ItemState {
  data: Product[];
  count: number;
  status: "idle" | "loading" | "failed";
}

interface PageFilterTypes {
  company?: string;
  tag?: string;
  itemType?: string;
  sortId?: number;
  index: number;
  pageSize: number;
}

const initialState: ItemState = {
  data: [],
  status: "idle",
  count: 0,
};

export const getPagedAsync = createAsyncThunk(
  "item/getAsync",
  async (pageValues: PageFilterTypes) => {
    const response = await getAllItems();
    let data: Product[] = response.data;
    if (pageValues.company) {
      data = data.filter((a: Product) => a.manufacturer == pageValues.company);
    }
    if (pageValues.tag) {
      data = data.filter(
        (a: Product) =>
          a.tags.filter((b) =>
            b
              .toUpperCase()
              .includes(pageValues.tag ? pageValues.tag.toUpperCase() : "")
          ).length
      );
    }

    if (pageValues.itemType) {
      data = data.filter((a: Product) => a.itemType == pageValues.itemType);
    }
    if (pageValues.sortId) {
      switch (pageValues.sortId) {
        case SortEnum.NameAsc:
          data = data.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          break;
        case SortEnum.NameDesc:
          data = data.sort((a, b) => {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          });
          break;
        case SortEnum.PriceAsc:
          data = data.sort((a, b) => {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return 0;
          });
          break;
        case SortEnum.PriceDesc:
          data = data.sort((a, b) => {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            return 0;
          });
          break;
        default:
          break;
      }
    }
    const returnValue = {
      data: data.slice(
        (pageValues.index - 1) * pageValues.pageSize,
        (pageValues.index - 1) * pageValues.pageSize + pageValues.pageSize
      ),
      count: data.length,
    };
    return returnValue;
  }
);

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
