import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState: boolean = false;

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    show: (state) => {
      state = true;
    },
    hide: (state) => {
      state = false;
    },
  },
});

export const {show,hide} = loadingSlice.actions;

export const loading = (state: RootState) => state.loading;

export default loadingSlice.reducer;
