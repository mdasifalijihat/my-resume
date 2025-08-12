import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router";
import LoaderManager from "./utils/LoaderManager.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderManager>
      <RouterProvider router={router} />
    </LoaderManager>
  </StrictMode>
);
