import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import companyReducer from "../reducers/companies/companySlice";
import itemReducer from "../reducers/items/itemSlice";
import loadingReducer from "../reducers/loading/loadingSlice";

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
