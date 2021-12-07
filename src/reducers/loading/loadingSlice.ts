import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState: boolean = false;

export const loadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    showLoading: (state) => {
      return true;
    },
    hideLoading: (state) => {
      return false;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;

export const loadingStatus = (state: RootState) => state.isLoading;

export default loadingSlice.reducer;
