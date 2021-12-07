import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./modules/Products/products";
import Loader from "./components/Loader/loader";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Loader>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/products" element={<Products />}></Route>
          </Routes>
        </BrowserRouter>
      </Loader>
      ,
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();
