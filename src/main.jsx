import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Q4 from "./Q4";
import Card from "./Card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/independance/" element={<Q4 />} />
          <Route path="/cards/:code" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
