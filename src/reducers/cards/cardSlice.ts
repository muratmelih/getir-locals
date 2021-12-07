import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { CardType } from "../../types/card";
import { getAll } from "./card.api";

export interface CardState {
  data: CardType[];
  loading: boolean;
}

const initialState: CardState = {
  data: [],
  loading: false,
};

export const getAllCard = createAsyncThunk("card/getAll", async () => {
  const response = await getAll();
  return response.data.data;
});

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCard.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const {} = cardSlice.actions;

export const selectCard = (state: RootState) => state.card.data;
export const cardStatus = (state: RootState) => state.card.loading;

export default cardSlice.reducer;
