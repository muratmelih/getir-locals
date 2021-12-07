import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Manufacturer } from "../../types/manufacturer";
import { getAll } from "./company.api";

export interface CompanyState {
  data: Manufacturer[];
  loading:  boolean;
}

const initialState: CompanyState = {
  data: [],
  loading: false,
};

export const getAllCompanies = createAsyncThunk("company/getAll", async () => {
  const response = await getAll();
  return response.data;
});

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCompanies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const {} = companySlice.actions;

export const selectCompanies = (state: RootState) => state.company.data;
export const companyStatus = (state: RootState) => state.company.loading;


export default companySlice.reducer;
