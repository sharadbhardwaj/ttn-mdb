import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import axios from "axios";

import { Provider } from "react-redux";
import { store } from "./store/store";

//setup axios
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmIxZDg1YjljODEzMjkxN2E1NDFmMWFhMTMzMWNkZiIsInN1YiI6IjY1NDliZDg4NTMyYWNiMDExYjEwOTQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5dAu3MqMwEHfPs623NmVtGpyQD46_Lp_S9B81kTN0uI`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
          <RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
