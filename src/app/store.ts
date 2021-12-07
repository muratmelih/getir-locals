import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import companyReducer from "../features/companies/companySlice";
import itemReducer from "../features/items/itemSlice";
import loadingReducer from "../features/loading/loadingSlice";

export const store = configureStore({
  reducer: {
    company: companyReducer,
    item:itemReducer,
    loading:loadingReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
