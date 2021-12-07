import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Product } from "../../types/product";
import { SortEnum } from "../../types/sortEnum";
import { getAllItems } from "./items.api";

export interface ItemState {
  data: Product[];
  count: number;
  itemTypes: string[];
  loading: boolean;
  tags: string[];
}

interface PageFilterTypes {
  company: string[];
  tag: string[];
  itemType?: string;
  sortId?: number;
  index: number;
  pageSize: number;
}

const initialState: ItemState = {
  data: [],
  loading: false,
  count: 0,
  itemTypes: [],
  tags: [],
};

export const getPagedAsync = createAsyncThunk(
  "item/getAsync",
  async (pageValues: PageFilterTypes) => {
    const response = await getAllItems();
    let data: Product[] = response.data;
    const types = data
      .map((item) => item.itemType)
      .filter((value, index, self) => self.indexOf(value) === index);

    let tags: string[] = [];

    data.map((a) => {
      a.tags.map((t) => {
        if (!tags.find((tag) => tag == t)) {
          tags.push(t);
        }
      });
    });
    if (pageValues.itemType) {
      data = data.filter((a: Product) => a.itemType == pageValues.itemType);
    }
    if (pageValues.company.length) {
      data = data.filter((a: Product) =>
        pageValues.company.includes(a.manufacturer)
      );
    }
    if (pageValues.tag.length) {
      data = data.filter(
        (a: Product) => a.tags.filter((b) => pageValues.tag.includes(b)).length
      );
    }
    if (pageValues.sortId) {
      switch (pageValues.sortId) {
        case SortEnum.DateAsc:
          data = data.sort((a, b) => {
            if (a.added < b.added) {
              return -1;
            }
            if (a.added > b.added) {
              return 1;
            }
            return 0;
          });
          break;
        case SortEnum.DateDesc:
          data = data.sort((a, b) => {
            if (a.added < b.added) {
              return 1;
            }
            if (a.added > b.added) {
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
      itemTypes: types,
      tags: tags,
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
        state.loading = true;
      })
      .addCase(getPagedAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.count = action.payload.count;
        state.itemTypes = action.payload.itemTypes;
        state.tags = action.payload.tags;
      });
  },
});

export const {} = ItemSlice.actions;

export const selectItems = (state: RootState) => state.item;
export const itemsStatus = (state: RootState) => state.item.loading;
export const selectItemTypes = (state: RootState) => state.item.itemTypes;
export const selectTags = (state: RootState) => state.item.tags;

export default ItemSlice.reducer;
