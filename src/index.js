import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Loading
import { LoaderProvider } from "./context/LoaderContext";

import "./assets/scss/main.scss";
//store
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </Provider>
);
