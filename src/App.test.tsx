import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import Products from "./modules/Products/products";
import loadingReducer, {
  hideLoading,
  showLoading,
} from "./reducers/loading/loadingSlice";
import companyReducer, {
  getAllCompanies,
  CompanyState,
} from "./reducers/companies/companySlice";
import { getAll } from "./reducers/companies/company.api";
test("renders products title", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Products />
    </Provider>
  );

  expect(getByText(/Products/)).toBeInTheDocument();
});

test("should set loading state true", () => {
  const previousState: boolean = false;
  expect(loadingReducer(previousState, showLoading())).toEqual(true);
});

test("should set loading state false", () => {
  const previousState: boolean = false;
  expect(loadingReducer(previousState, hideLoading())).toEqual(false);
});

test("the data is list of companies", async () => {
  const response = await getAll();
  expect(response.data.length).toBeGreaterThan(0);
});
