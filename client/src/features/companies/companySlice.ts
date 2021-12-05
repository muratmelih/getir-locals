import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Manufacturer } from "../../types/manufacturer";
import { getAllCompanies } from "./company.api";

export interface CompanyState {
  data: Manufacturer[];
  status: "idle" | "loading" | "failed";
}

const initialState: CompanyState = {
  data: [],
  status: "idle",
};

export const getAsync = createAsyncThunk("company/getAsync", async () => {
  const response = await getAllCompanies();
  return response.data;
});

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export const {} = companySlice.actions;

export const selectCompanies = (state: RootState) => state.company.data;


export default companySlice.reducer;