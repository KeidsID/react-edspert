import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import container from "./infrastructures/container";
import router from "./interfaces/router/router";
import "./index.css";

(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router(container)} />
    </React.StrictMode>
  );
})();
