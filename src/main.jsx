import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Form from "./components/Form";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "form/*",
    element: <Form />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
