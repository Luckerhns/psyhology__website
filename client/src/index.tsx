import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log(process.env.REACT_APP_API_URL)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
